import { SingleNode } from "../Node/SingleNode";
import { GuardNode } from "../Node/GuardNode";

describe('SingleNode: constructor adds value', () => {
    it('returns the expected value from node', () => {
        const node = new SingleNode(null);
        expect(node.getValue()).toBe(null);
    });
});

describe('SingleNode: encapsulate', () => {
    it('returns the expected value after constructor call', () => {
        const node = new SingleNode<null>(null);
        expect(node.getValue()).toBe(null);
    });
});

describe('SingleNode: nextNode.linkNode(previousNode)', () => {
    it('returns the expected linked node', () => {
        const previousNode = new SingleNode(null);
        const nextNode = new SingleNode(null).linkNode(previousNode);
        expect(nextNode.getAndDestroyNode()).toBe(previousNode);
    });
});

describe('SingleNode: nextNode.linkNode(noNode)', () => {
    it('returns undefined', () => {
        const nextNode = new SingleNode(null);
        expect(nextNode.getAndDestroyNode()).toBe(undefined);
    });
});