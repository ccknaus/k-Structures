import { IQueue } from '../Interface/IQueue.ts';
import { SingleNode } from '../Node/SingleNode.ts'
import { HeadNode } from '../Node/HeadNode.ts'

// FIFO

export class Queue<T> implements IQueue<T> {
    private readonly headNode: HeadNode<T>;
    private currentNode!: SingleNode<T>;

    constructor(value?: null | undefined ) {
        this.headNode = new HeadNode(value);
        this.currentNode = this.headNode.linkNode(this.headNode);  
    }

    enqueue(element: T): void {
        const nextNode = new SingleNode<T>(element); // await
        this.currentNode.linkNode(nextNode); // await
        this.currentNode = nextNode.linkNode(this.headNode);
    }

    dequeue(): any {
        const firstNode = this.headNode.getLinkedNode();
        const result = firstNode.getValue();
        const secondNode = firstNode.getAndDestroyNode(); // await
        this.headNode.linkNode(secondNode); // await
        return result;
    }

    peek(): any {
        return this.headNode.getLinkedValue();
    }

}