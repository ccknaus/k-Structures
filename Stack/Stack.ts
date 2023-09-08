import { IStack } from '../Interface/IStack.ts';
import { IList } from '../Interface/IList.ts';
import { SingleNode } from '../Node/SingleNode.ts';
import { GuardNode } from '../Node/GuardNode.ts';

// LIFO

export class Stack<T> implements IStack<T>, IList<T> {
    private topNode: SingleNode<T>;
    private readonly value: null | undefined;

    constructor(value?: null | undefined) {
        this.topNode = new GuardNode(value); // make it generic?
        this.value = value;
    }

    push(element: T) {
        this.topNode = new SingleNode<T>(element).linkNode(this.topNode);
    }

    pop(): any {
        const result: T = this.topNode.getValue();
        this.topNode = this.topNode.getAndDestroyNode();
        return result;
    }

    peek(): T {
        return this.topNode.getValue();
    }

    isEmpty(): boolean {
        return this.topNode.getValue() === this.value;
    }

}