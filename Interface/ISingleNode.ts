import { SingleNode } from '../Node/SingleNode';

export interface ISingleNode<T> {

    linkNode(node: SingleNode<T>): SingleNode<T>;

    getAndDestroyNode(): SingleNode<T>;

    getValue(): T;

}