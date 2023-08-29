import { ISingleNode } from '../Interface/ISingleNode';

export class SingleNode<T> implements ISingleNode<T> {
    private value: T | undefined;
    private linkedNode: SingleNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
        return this;
    }

    linkNode(node: SingleNode<T>): SingleNode<T> {
        this.linkedNode = node;
        return this;
    }

    getAndDestroyNode(): SingleNode<T> {
        const node = this.linkedNode as SingleNode<T>;
        this.linkedNode = undefined;
        this.value = undefined;
        return node;
    }

    getValue(): T {
        // only callable before getAndUnlinkNode()
        return this.value as T;
    }
    
}
