import { DoublyLinkedList } from "../LinkedList/DoublyLinkedList";

describe('DLL: constructor default value', () => {
  it('returns the expected value for constructor', () => {
    const dll = new DoublyLinkedList<null>();
    expect(dll.getFirst()).toBe(undefined);
    expect(dll.getLast()).toBe(undefined);
  });
});

describe('DLL: constructor default value', () => {
  it('returns the expected value for constructor', () => {
    const dll = new DoublyLinkedList<null>(null);
    expect(dll.getFirst()).toBe(null);
    expect(dll.getLast()).toBe(null);
  });
});

describe('DLL: insertFirst value', () => {
  it('returns the expected value after insertFirstion', () => {
    const dll = new DoublyLinkedList<number>();
    dll.insertFirst(1);
    expect(dll.getFirst()).toBe(1);
    expect(dll.getLast()).toBe(1);
  });
});

describe('DLL: insertLast value', () => {
  it('returns the expected value after insertFirstion', () => {
    const dll = new DoublyLinkedList<number>();
    dll.insertLast(1);
    expect(dll.getFirst()).toBe(1);
    expect(dll.getLast()).toBe(1);
  });
});

describe('DLL: insertFirst value twice', () => {
  it('returns the expected value after insertFirstion', () => {
    const dll = new DoublyLinkedList<number>();
    dll.insertFirst(1);
    dll.insertFirst(2);
    expect(dll.getFirst()).toBe(2);
    expect(dll.getLast()).toBe(1);
  });
});

describe('DLL: insertLast value twice', () => {
  it('returns the expected value after insertFirstion', () => {
    const dll = new DoublyLinkedList<number>();
    dll.insertLast(1);
    dll.insertLast(2);
    expect(dll.getFirst()).toBe(1);
    expect(dll.getLast()).toBe(2);
  });
});

describe('DLL: insertFirst, insertLast, insertFirst value', () => {
  it('returns the expected value after insertFirstion', () => {
    const dll = new DoublyLinkedList<number>();
    dll.insertFirst(1);
    dll.insertLast(2);
    dll.insertFirst(3);
    expect(dll.getFirst()).toBe(3);
    expect(dll.getLast()).toBe(2);
  });
});

describe('DLL: insertLast, insertFirst, insertLast value', () => {
  it('returns the expected value after insertFirstion', () => {
    const dll = new DoublyLinkedList<number>();
    dll.insertLast(1);
    dll.insertFirst(2);
    dll.insertLast(3);
    expect(dll.getFirst()).toBe(2);
    expect(dll.getLast()).toBe(3);
  });
});

describe('DLL: remove value twice', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    expect(dll.removeFirst()).toBe(null);
    expect(dll.removeFirst()).toBe(null);
  });
});

describe('DLL: removeLast value twice', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    expect(dll.removeLast()).toBe(null);
    expect(dll.removeLast()).toBe(null);
  });
});

describe('DLL: remove value after insertFirst', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(1);
    expect(dll.removeFirst()).toBe(1);
    expect(dll.removeFirst()).toBe(null);
  });
});

describe('DLL: remove value after insertLast', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertLast(1);
    expect(dll.removeFirst()).toBe(1);
    expect(dll.removeFirst()).toBe(null);
  });
});

describe('DLL: removeLast value after insertFirst', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(1);
    expect(dll.removeLast()).toBe(1);
    expect(dll.removeLast()).toBe(null);
  });
});

describe('DLL: removeLast value after insertLast', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertLast(1);
    expect(dll.removeLast()).toBe(1);
    expect(dll.removeLast()).toBe(null);
  });
});

describe('DLL: removeFirst, removeLast, removeLast after insertFirst operations', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(1);
    dll.insertLast(2);
    expect(dll.removeFirst()).toBe(1);
    expect(dll.removeLast()).toBe(2);
    expect(dll.removeLast()).toBe(null);
  });
});

describe('DLL: removeFirst, removeLast, removeLast after insertFirst operations', () => {
  it('returns the expected value after removal', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(1); // 1, null
    dll.insertLast(2); // 1, 2, null
    expect(dll.removeFirst()).toBe(1); // 2, null
    expect(dll.removeLast()).toBe(2); // null
    expect(dll.removeLast()).toBe(null); // null
    dll.insertFirst(1); // 1, null
    dll.insertFirst(2); // 2, 1, null
    dll.insertLast(3); // 2, 1, 3, null
    expect(dll.removeLast()).toBe(3); // 2, 1, null
    expect(dll.removeFirst()).toBe(2); // 1, null
    expect(dll.removeFirst()).toBe(1); // null
    expect(dll.removeFirst()).toBe(null); // null
    expect(dll.removeFirst()).toBe(null); // null
  });
});

describe('DLL: isEmpty()', () => {
  it('returns the expected value', () => {
    const dll = new DoublyLinkedList<null>(null);
    expect(dll.isEmpty()).toBe(true);
  });
});

describe('DLL: isEmpty()', () => {
  it('returns the expected value after one null inserts', () => {
    const dll = new DoublyLinkedList<null>(null);
    dll.insertFirst(null);
    expect(dll.isEmpty()).toBe(false);
  });
});

describe('DLL: isEmpty()', () => {
  it('returns the expected value after one null inserts and removal', () => {
    const dll = new DoublyLinkedList<null>(null);
    dll.insertFirst(null);
    expect(dll.isEmpty()).toBe(false);
    dll.removeFirst()
    expect(dll.isEmpty()).toBe(true);
  });
});
