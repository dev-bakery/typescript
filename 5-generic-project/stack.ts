{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this._size === this.capacity) {
        console.log("Stack is full");
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      // console.log(this.head);
      return node.value;
    }
  }
  const stack = new StackImpl<string>(5);
  stack.push("aaa");
  stack.push("bbb");
  stack.push("ccc");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  const stack2 = new StackImpl<number>(5);
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
