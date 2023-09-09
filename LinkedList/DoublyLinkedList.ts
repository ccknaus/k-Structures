import { ILinkedList } from '../Interface/ILinkedList.ts';
import { IList } from '../Interface/IList.ts';
import { DoubleNode } from '../Node/DoubleNode.ts'
import { DoubleHeadNode } from '../Node/DoubleHeadNode.ts'
import * as _ from 'lodash';

// FIFO & LIFO

export class DoublyLinkedList<T> implements ILinkedList<T>, IList<T> {
    private readonly headNode: DoubleNode<T>;
    private firstNode: DoubleNode<T>;
    private lastNode: DoubleNode<T>;
    private listSize: number;
    

    constructor(value?: null | undefined) {
        this.headNode = new DoubleHeadNode(value);
        this.headNode.linkLeftNode(this.headNode);
        this.headNode.linkRightNode(this.headNode);
        this.firstNode = this.headNode;
        this.lastNode = this.headNode;
        this.listSize = 0;
    }

    insertFirst(element: T): void {
        this.firstNode = new DoubleNode<T>(element).bilink(this.headNode, this.firstNode);
        if(this.lastNode === this.headNode) {
            this.lastNode = this.firstNode
        }
        this.listSize++;
    }

    insertLast(element: T): void {
        this.lastNode = new DoubleNode<T>(element).bilink(this.lastNode, this.headNode);
        if(this.firstNode === this.headNode) {
            this.firstNode = this.lastNode
        }
        this.listSize++;
    }

    insertAt(element: T, index: number): number {
        if(this.isListIndexRange(index)) { // shifts all nodes to the right
            const rightNode = this.findAt(index);
            new DoubleNode<T>(element).bilink(rightNode.getLeftNode(), rightNode);
            this.listSize++;
        } else if(index > this.getIndex()) {
            index = this.size();
            this.insertLast(element);
        } else { // smaller 0
            index = 0;
            this.insertFirst(element);
        }
        return index;
    }

    getFirst(): T {
        return this.firstNode.getValue();
    }


    getLast(): T {
        return this.lastNode.getValue();
    }

    removeFirst(): T {
        const result = this.firstNode.getValue();
        if(this.firstNode === this.headNode) {
            return result
        }
        this.firstNode = this.firstNode.replaceRightwise(this.firstNode.getRightNode(), this.headNode);
        this.listSize--;
        return result;
    }

    removeLast(): T {
        const result = this.lastNode.getValue();
        if(this.lastNode === this.headNode) {
            return result
        }
        this.lastNode = this.lastNode.replaceLeftwise(this.lastNode.getLeftNode(), this.headNode);
        this.listSize--;
        return result;
    }

    remove(element: T): boolean { // removal from left to right in O(n)
        const nodeToBeRemoved: DoubleHeadNode<T> = this.find(element);
        if(nodeToBeRemoved === this.headNode) {
            return false;
        }
        const value: T = this.removeNode(nodeToBeRemoved);
        return this.isValueEqual(value, element); // is present
    }

    removeAt(index: number): T { // removal from left to right in O(n)
        const nodeToBeRemoved = this.findAt(index);
        return this.removeNode(nodeToBeRemoved);
    }

    isEmpty(): boolean {
        return this.headNode.getRightNode() === this.headNode;
    }

    size(): number {
        return this.listSize;
    }

    protected getIndex(): number {
        return this.listSize - 1;
    }

    protected getFirstNode(): DoubleNode<T> {
        return this.firstNode;
    }

    protected getLastNode(): DoubleNode<T> {
        return this.lastNode;
    }

    protected find(element: T): DoubleNode<T> { // finds the first element that is kept by the node or head node if nothing was found
        let current: DoubleNode<T> = this.firstNode;
        while(current !== this.headNode) { // lacks iterator? lacks parallelism. 
            if(this.isNodeValue(current, element)) {
                return current;
            }
            current = current.getRightNode();
        }
        return this.headNode;
    }

    protected findAt(index: number): DoubleNode<T> { // finds the first element that is kept by the node or head node if nothing was found
        if(this.isEmpty() || !this.isListIndexRange(index)) {
            return this.headNode;
        }
        let current = this.firstNode;
        while(index > 0) { // lacks iterator? lacks parallelism. 
            current = current.getRightNode();
            --index;
        }
        return current;
    }

    protected removeNode(nodeToBeRemoved: DoubleHeadNode<T>): T {
        const value = nodeToBeRemoved.getValue();
        if(nodeToBeRemoved === this.headNode) {
            return value;
        }
        const secondNode = this.firstNode.getRightNode();
        const leftNode = nodeToBeRemoved.replaceLeftwise(nodeToBeRemoved.getLeftNode(), nodeToBeRemoved.getRightNode());
        if(leftNode === this.headNode) {
            this.firstNode = secondNode;
        }
        this.listSize--;
        return value;
    }

    protected isNodeValue(node: DoubleNode<T>, element: T): boolean {
        return _.isEqual(node.getValue(), element); // deep equality
    }

    protected isValueEqual(value1: T, value2: T): boolean {
        return _.isEqual(value1, value2); // deep equality
    }

    protected isListIndexRange(index: number): boolean {
        return index >= 0 && index <= this.size();
    }

}