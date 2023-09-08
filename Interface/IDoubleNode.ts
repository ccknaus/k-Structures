import { DoubleNode } from '../Node/DoubleNode';

export interface IDoubleNode<T> {

    linkLeftNode(node: DoubleNode<T>): DoubleNode<T>;

    linkRightNode(node: DoubleNode<T>): DoubleNode<T>;

    // getAndUnlinkLeftkNode(): DoubleNode<T>;

    // getAndUnlinkRightkNode(): DoubleNode<T>;

    getValue(): T;

}