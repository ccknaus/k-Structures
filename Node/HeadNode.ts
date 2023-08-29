import { ISingleNode } from '../Interface/ISingleNode';
import { SingleNode } from './SingleNode';

export class HeadNode<T> extends SingleNode<T> implements ISingleNode<T> {
    private nextNode!: SingleNode<T>;

    constructor(value: null | undefined) {
        super(value as T);
        return this;
    }

    linkNode(node: SingleNode<T>): SingleNode<T> {
        this.nextNode = node;
        return this;
    }

    getAndDestroyNode(): SingleNode<T> {
        // head node mustn't be destroyed
        return this.nextNode;
    }

    getLinkedNode(): SingleNode<T> {
        return this.nextNode;
    }

    getLinkedValue(): T {
        return this.nextNode.getValue();
    }

    getValue(): T {
        return super.getValue();
    }
}