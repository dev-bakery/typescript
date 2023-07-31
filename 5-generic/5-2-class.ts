{
  /*
   * 제네릭은 대문자 한글자로 표기함
   * 할당하는 값이 정해져 있지 않을때 유용함
   */
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      console.log(this.leftValue);
      return this.leftValue;
    }
    right(): R {
      console.log(this.rightValue);
      return this.rightValue;
    }
  }

  const either = new SimpleEither(4, "hi");
  either.left();
  either.right();
}
