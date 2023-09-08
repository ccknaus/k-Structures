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
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(undefined);
  });
});

describe('Queue: enqueue / dequeue chaos testing', () => {
  it('returns the expected values on every step', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(undefined);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2)
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(undefined);
  });
});

describe('Queue: returns expected value when empty', () => {
  it('returns true if nothing added', () => {
    const queue = new Queue<null>();
    expect(queue.isEmpty()).toBe(true);
  });
});

describe('Queue: returns expected value with one element', () => {
  it('returns true node was added', () => {
    const queue = new Queue<null>();
    queue.enqueue(null);
    expect(queue.isEmpty()).toBe(false);
  });
});

describe('Queue: returns expected value with no elements', () => {
  it('returns true node was added and then removed', () => {
    const queue = new Queue<null>();
    queue.enqueue(null);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});

describe('Queue: size() returns expected size with chaos testing', () => {
  it('returns 1 if one element was added', () => {
    const queue = new Queue<null>();
    queue.dequeue(); // 0
    expect(queue.size()).toBe(0);
    queue.enqueue(null); // 1
    expect(queue.size()).toBe(1);
    queue.enqueue(null); // 2
    expect(queue.size()).toBe(2);
    queue.dequeue(); // 1
    expect(queue.size()).toBe(1);
    queue.dequeue(); // 0
    expect(queue.size()).toBe(0);
    queue.dequeue(); // 0
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});