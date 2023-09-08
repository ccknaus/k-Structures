import { DoublyLinkedListHelper } from "../TestHelper/DoublyLinkedListHelper";
import { DoublyLinkedList } from "../LinkedList/DoublyLinkedList";
import { DoubleNode } from "../Node/DoubleNode";

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

describe('DLL: isNodeElement)', () => {
  it('has value on head', () => {
    const dll = new DoublyLinkedListHelper<null>(null);
    expect(dll.isNodeValue(dll.getFirstNode(), null)).toBe(true);
  });
});

describe('DLL: isNodeElement)', () => {
  it('has wrong value on head', () => {
    const dll = new DoublyLinkedListHelper<undefined>(null);
    expect(dll.isNodeValue(dll.getFirstNode(), undefined)).toBe(false);
  });
});

describe('DLL: isNodeElement)', () => {
  it('has three nodes with one correct element', () => {
    const dll = new DoublyLinkedListHelper<number>(null);
    dll.insertFirst(3);
    dll.insertFirst(2);
    dll.insertFirst(1);
    expect(dll.isNodeValue(dll.getFirstNode(), 1)).toBe(true);
  });
});

describe('DLL: isNodeElement)', () => {
  it('has node with complex element', () => {
    const dll = new DoublyLinkedListHelper<DoubleNode<null>>(null);
    const node = new DoubleNode<null>(null);
    dll.insertFirst(new DoubleNode<null>(null));
    expect(dll.isNodeValue(dll.getFirstNode(), node)).toBe(true);
  });
});

describe('DLL: remove)', () => {
  it('remove given element on head node', () => {
    const dll = new DoublyLinkedList<null>(null);
    expect(dll.remove(null)).toBe(false);
  });
});

describe('DLL: remove)', () => {
  it('remove given element with one node', () => {
    const dll = new DoublyLinkedList<null>(null);
    dll.insertFirst(null);
    expect(dll.remove(null)).toBe(true);
  });
});

describe('DLL: remove)', () => {
  it('remove given elements with two nodes', () => {
    const dll = new DoublyLinkedList<null>(null);
    dll.insertFirst(null);
    dll.insertFirst(null);
    expect(dll.remove(null)).toBe(true);
    expect(dll.remove(null)).toBe(true);
    expect(dll.remove(null)).toBe(false);
  });
});

describe('DLL: remove)', () => {
  it('remove given elements with three nodes', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(0);
    dll.insertFirst(1);
    dll.insertFirst(2);
    expect(dll.remove(2)).toBe(true);
    expect(dll.remove(0)).toBe(true);
    expect(dll.remove(1)).toBe(true);
  });
});

describe('DLL: size)', () => {
  it('insert one element', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(0);
    expect(dll.size()).toBe(1);
  });
});

describe('DLL: size)', () => {
  it('remove no element', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.remove(0);
    expect(dll.size()).toBe(0);
  });
});

describe('DLL: size)', () => {
  it('insert and remove wrong element', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(1);
    dll.remove(0);
    expect(dll.size()).toBe(1);
  });
});

describe('DLL: size)', () => {
  it('insert and remove element', () => {
    const dll = new DoublyLinkedList<number>(null);
    dll.insertFirst(1);
    dll.remove(1);
    expect(dll.size()).toBe(0);
  });
});

describe('DLL: size)', () => {
  it('remove operations on empty list returns 0', () => {
    const dll = new DoublyLinkedList<null>(null);
    dll.remove(null);
    dll.removeFirst();
    dll.removeLast();
    expect(dll.size()).toBe(0);
  });
});
