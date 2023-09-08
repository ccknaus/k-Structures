import { Stack } from "../Stack/Stack";

describe('Stack: constructor default value', () => {
  it('returns the expected value for constructor', () => {
    const stack = new Stack<null>();
    expect(stack.peek()).toBe(undefined);
  });
});

describe('Stack: constructor specified value', () => {
  it('returns the expected value for constructor', () => {
    const stack = new Stack<null>(null);
    expect(stack.peek()).toBe(null);
  });
});

describe('Stack: push and pop stack', () => {
  it('returns the expected value', () => {
    const stack = new Stack<null>();
    stack.push(null);
    expect(stack.pop()).toBe(null);
  });
});

describe('Stack: push twice pop twice', () => {
  it('returns the expected value', () => {
    const stack = new Stack<null>();
    stack.push(null);
    stack.push(null);
    stack.pop();
    expect(stack.pop()).toBe(null);
  });
});

describe('Stack: pop empty stack', () => {
  it('returns undefined', () => {
    const stack = new Stack<null>();
    expect(stack.pop()).toBe(undefined);
  });
});

describe('Stack: pop empty stack twice', () => {
  it('returns undefined', () => {
    const stack = new Stack<null>();
    stack.pop();
    expect(stack.pop()).toBe(undefined);
  });
});

describe('Stack: pop empty stack twice then push', () => {
  it('returns undefined', () => {
    const stack = new Stack<null>();
    stack.pop();
    stack.pop();
    stack.push(null);
    stack.push(null);
    expect(stack.pop()).toBe(null);
    expect(stack.pop()).toBe(null);
    expect(stack.pop()).toBe(undefined);
  });
});

describe('Stack: return true if no elements are present', () => {
  it('returns boolean', () => {
    const stack = new Stack<null>();
    expect(stack.isEmpty()).toBe(true);
  });
});

describe('Stack: return false if elements are present', () => {
  it('returns boolean', () => {
    const stack = new Stack<null>();
    stack.push(null);
    expect(stack.isEmpty()).toBe(false);
  });
});

describe('Stack: return false if elements are pushed, then removed', () => {
  it('returns boolean', () => {
    const stack = new Stack<null>();
    stack.push(null);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});

describe('Stack: size() zero on empty pop', () => {
  it('returns boolean', () => {
    const stack = new Stack<null>();
    stack.pop();
    expect(stack.size()).toBe(0);
  });
});

describe('Stack: size() one after pop', () => {
  it('returns boolean', () => {
    const stack = new Stack<null>();
    stack.push(null);
    expect(stack.size()).toBe(1);
  });
});