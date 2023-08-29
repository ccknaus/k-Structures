import { Queue } from "../Queue/Queue";

describe('Queue: constructor default value', () => {
  it('returns the expected value for constructor', () => {
    const queue = new Queue<null>();
    expect(queue.peek()).toBe(undefined);
  });
});

describe('Queue: constructor specified value', () => {
  it('returns the expected value for constructor', () => {
    const queue = new Queue<null>(null);
    expect(queue.peek()).toBe(null);
  });
});

describe('Queue: enqueue on empty queue', () => {
  it('returns the expected value after peek', () => {
    const queue = new Queue<null>();
    queue.enqueue(null);
    expect(queue.peek()).toBe(null);
  });
});

describe('Queue: enqueue twice', () => {
  it('returns the expected value after peek', () => {
    const queue = new Queue<number>();
    expect(queue.peek()).toBe(undefined);
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });
});

describe('Queue: dequeue on empty queue', () => {
  it('returns the default value', () => {
    const queue = new Queue<null>();
    expect(queue.dequeue()).toBe(undefined);
  });
});

describe('Queue: dequeue twice on empty queue', () => {
  it('returns the default value', () => {
    const queue = new Queue<null>();
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe(undefined);
  });
});

describe('Queue: enqueue and deqeue', () => {
  it('returns the expected value deque', () => {
    const queue = new Queue<null>();
    queue.enqueue(null);
    expect(queue.dequeue()).toBe(null);
  });
});

describe('Queue: enqueue and deqeue twice', () => {
  it('returns the expected value deque', () => {
    const queue = new Queue<null>();
    queue.enqueue(null);
    expect(queue.dequeue()).toBe(null);
    expect(queue.dequeue()).toBe(undefined);
  });
});

describe('Queue: enqueue twice and deqeue three times', () => {
  it('returns the expected value deque', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(undefined);
  });
});
