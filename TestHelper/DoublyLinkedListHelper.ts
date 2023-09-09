import { DoubleNode } from '../Node/DoubleNode.ts'
import { DoublyLinkedList } from '../LinkedList/DoublyLinkedList.ts'

// FIFO & LIFO

export class DoublyLinkedListHelper<T> extends DoublyLinkedList<T> {

    constructor(value: null | undefined) {
        super(value);
    }

    getFirstNode(): DoubleNode<T> {
        return super.getFirstNode();
    }

    getLastNode(): DoubleNode<T> {
        return super.getLastNode();
    }

    isNodeValue(node: DoubleNode<T>, element: T): boolean {
        return super.isNodeValue(node, element);
    }

    find(value: T): DoubleNode<T> {
        return super.find(value);
    }

    findAt(index: number): DoubleNode<T> {
        return super.findAt(index);
    }

    removeNode(nodeToBeRemoved: DoubleNode<T>): T {
        return super.removeNode(nodeToBeRemoved);
    }

}