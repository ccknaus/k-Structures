import { IDoubleNode } from '../Interface/IDoubleNode';

export class DoubleNode<T> implements IDoubleNode<T> {

    private value: T | undefined;
    private linkedLeftNode: DoubleNode<T> | undefined;
    private linkedRightNode: DoubleNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
        return this;
    }

    bilink(leftNode: DoubleNode<T>, rightNode: DoubleNode<T>): DoubleNode<T> {
        this.linkedLeftNode = leftNode;
        this.linkedRightNode = rightNode;
        leftNode.linkedRightNode = this;
        rightNode.linkedLeftNode = this;
        return this;
    }

    replaceRightwise(leftNode: DoubleNode<T>, rightNode: DoubleNode<T>): DoubleNode<T> {
        this.destroyNode(); // () => async ?
        rightNode.linkedRightNode = leftNode;
        leftNode.linkedLeftNode = rightNode;
        return leftNode;
    }

    replaceLeftwise(leftNode: DoubleNode<T>, rightNode: DoubleNode<T>): DoubleNode<T> {
        this.destroyNode(); // () => async ?
        leftNode.linkedRightNode = rightNode;
        rightNode.linkedLeftNode = leftNode;
        return leftNode;
    }

    async destroyNode() {
        this.value = undefined;
        this.linkedLeftNode = undefined;
        this.linkedRightNode = undefined; 
    }

    async getAndDestroyNode(): Promise<DoubleNode<T>> {
        this.value = undefined;
        this.linkedLeftNode = undefined;
        this.linkedRightNode = undefined;
        return this;
    }

    async getAndDestroyNodeButLeftNode(): Promise<void> {
        this.value = undefined;
        this.linkedRightNode = undefined;
    }

    async getAndDestroyNodeButRightNode(): Promise<void> {
        this.value = undefined;
        this.linkedLeftNode = undefined;
    }

    destroyAndGetLeftNode(): DoubleNode<T> {
        const result = this.linkedLeftNode;
        this.linkedLeftNode = undefined;
        return result as DoubleNode<T>;
    }

    destroyAndGetRightNode(): DoubleNode<T> {
        const result = this.linkedRightNode;
        this.linkedRightNode = undefined;
        return result as DoubleNode<T>;
    }

    linkLeftNode(node: DoubleNode<T>): DoubleNode<T> {
        this.linkedLeftNode = node;
        return this;
    }

    linkRightNode(node: DoubleNode<T>): DoubleNode<T> {
        this.linkedRightNode = node;
        return this;
    }

    BilinkRightNode(node: DoubleNode<T>): DoubleNode<T> {
        this.linkedRightNode = node;
        node.linkedLeftNode = this;
        return this;
    }

    getAndUnlinkLeftkNode(): DoubleNode<T> {
        const node = this.linkedLeftNode as DoubleNode<T>;
        this.linkedLeftNode = undefined;
        this.linkedRightNode = undefined;
        this.value = undefined;
        return node;
    }

    getAndUnlinkRightkNode(): DoubleNode<T> {
        const node = this.linkedRightNode as DoubleNode<T>;
        this.linkedLeftNode = undefined;
        this.linkedRightNode = undefined;
        this.value = undefined;
        return node;
    }

    getLeftNode(): DoubleNode<T> {
        // carefull, no guarantee!
        return this.linkedLeftNode as DoubleNode<T>;
    }

    getRightNode(): DoubleNode<T> {
        // carefull, no guarantee!
        return this.linkedRightNode as DoubleNode<T>;
    }

    getValue(): T {
        return this.value as T;
    }
}
