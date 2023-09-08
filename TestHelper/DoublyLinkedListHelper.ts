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

    isNodeValue(node: DoubleNode<T>, element: T): boolean {
        return super.isNodeValue(node, element);
    }

}