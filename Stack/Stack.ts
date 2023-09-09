import { IStack } from '../Interface/IStack';
import { IList } from '../Interface/IList';
import { SingleNode } from '../Node/SingleNode';
import { GuardNode } from '../Node/GuardNode';

// LIFO

export class Stack<T> implements IStack<T>, IList<T> {
    private topNode: SingleNode<T>;
    private guardNode: GuardNode<T>;
    private readonly value: null | undefined;
    private listSize: number;

    constructor(value?: null | undefined) {
        this.topNode = new GuardNode(value); // make it generic?
        this.guardNode = this.topNode;
        this.value = value;
        this.listSize = 0;
    }

    push(element: T) {
        this.topNode = new SingleNode<T>(element).linkNode(this.topNode);
        this.listSize++;
    }

    pop(): T {
        const result: T = this.topNode.getValue();
        this.topNode = this.topNode.getAndDestroyNode();
        if(this.listSize > 0) {
            this.listSize--;
        }
        return result;
    }

    peek(): T {
        return this.topNode.getValue();
    }

    isEmpty(): boolean {
        return this.topNode === this.guardNode;
    }

    size(): number {
        return this.listSize;
    }

}