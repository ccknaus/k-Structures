export interface ILinkedList<T> {

    insertFirst(value: T): void;

    insertLast(value: T): void;

    getFirst(): T;

    getLast(): T;

    removeFirst(): T;

    removeLast(): T;

    remove(element: T): boolean;

}