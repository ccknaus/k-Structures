export interface IStack<T> {

    push(value: T): void;

    pop(): T;

    peek(): T;

}