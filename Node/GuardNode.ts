import { ISingleNode } from '../Interface/ISingleNode';
import { SingleNode } from './SingleNode';

export class GuardNode<T> extends SingleNode<T> implements ISingleNode<T> {

    constructor(value: null | undefined) {
        super(value as T);
        return this;
    }

    linkNode(node: SingleNode<T>): SingleNode<T> {
        return super.linkNode(node);
    }

    getAndDestroyNode(): SingleNode<T> {
        // guard node mustn't be destroyed
        return this;
    }

    getValue(): T {
        return super.getValue();
    }
}