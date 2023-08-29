import { ILinkedList } from '../Interface/ILinkedList.ts';
import { DoubleNode } from '../Node/DoubleNode.ts'
import { DoubleHeadNode } from '../Node/DoubleHeadNode.ts'

// FIFO & LIFO

export class DoublyLinkedList<T> implements ILinkedList<T> {
    private readonly headNode: DoubleNode<T>;
    private firstNode: DoubleNode<T>;
    private lastNode: DoubleNode<T>;
    

    constructor(value?: null | undefined ) {
        this.headNode = new DoubleHeadNode(value);
        this.headNode.linkLeftNode(this.headNode);
        this.headNode.linkRightNode(this.headNode);
        this.firstNode = this.headNode;
        this.lastNode = this.headNode;
    }

    insertFirst(element: T): void {
        this.firstNode = new DoubleNode<T>(element).bilink(this.headNode, this.firstNode);
        if(this.lastNode === this.headNode) {
            this.lastNode = this.firstNode
        }
    }

    insertLast(element: T): void {
        this.lastNode = new DoubleNode<T>(element).bilink(this.lastNode, this.headNode);
        if(this.firstNode === this.headNode) {
            this.firstNode = this.lastNode
        }
    }

    getFirst(): T {
        return this.firstNode.getValue();
    }

    getLast(): T {
        return this.lastNode.getValue();
    }

    removeFirst(): T {
        if(this.isEmpty()) {
            return this.headNode.getValue();
        }
        const result = this.getFirst();
        this.firstNode = this.firstNode.replaceRightwise(this.firstNode.getRightNode(), this.headNode);
        return result;
    }

    removeLast(): T {
        if(this.isEmpty()) {
            return this.headNode.getValue();
        }
        const result = this.getLast();
        this.lastNode = this.lastNode.replaceLeftwise(this.lastNode.getLeftNode(), this.headNode);
        return result;
    }

    isEmpty(): boolean {
        return this.headNode.getRightNode() === this.headNode;
    }

}