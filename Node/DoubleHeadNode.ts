import { IDoubleNode } from '../Interface/IDoubleNode';
import { DoubleNode } from './DoubleNode';

export class DoubleHeadNode<T> extends DoubleNode<T> implements IDoubleNode<T> {

    constructor(value: null | undefined) {
        super(value as T);
        return this;
    }

    linkLeftNode(node: DoubleNode<T>): DoubleNode<T> {
        super.linkLeftNode(node);
        return this;
    }

    linkRightNode(node: DoubleNode<T>): DoubleNode<T> {
        super.linkRightNode(node);
        return this;
    }

    getAndUnlinkLeftkNode(): DoubleNode<T> {
        return super.getAndUnlinkLeftkNode();
    }

    getAndUnlinkRightkNode(): DoubleNode<T> {
        return super.getAndUnlinkRightkNode();
    }

    getLeftNode(): DoubleNode<T> {
        // carefull, no guarantee!
        return super.getLeftNode();
    }

    getRightNode(): DoubleNode<T> {
        // carefull, no guarantee!
        return super.getRightNode();
    }

    async destroyNode() { }

    async getAndDestroyNode(): Promise<DoubleNode<T>> {
        return this;
    }

    getValue(): T {
        return super.getValue();
    }
}
