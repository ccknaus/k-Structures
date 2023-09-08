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

    getFirst(): T {
        return this.firstNode.getValue();
    }


    getLast(): T {
        return this.lastNode.getValue();
    }

    protected getFirstNode(): DoubleNode<T> {
        return this.firstNode;
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
        const nodeToBeRemoved = this.find(element);
        const secondNode = this.firstNode.getRightNode();
        if(nodeToBeRemoved !== this.headNode) {
            const leftNode = nodeToBeRemoved.replaceLeftwise(nodeToBeRemoved.getLeftNode(), nodeToBeRemoved.getRightNode());
            if(leftNode === this.headNode) {
                this.firstNode = secondNode;
            }
            this.listSize--;
            return true;
        }
        return false;

    }

    protected isNodeValue(node: DoubleNode<T>, element: T): boolean {
        return _.isEqual(node.getValue(), element); // deep equality
    }

    isEmpty(): boolean {
        return this.headNode.getRightNode() === this.headNode;
    }

    size(): number {
        return this.listSize;
    }

}