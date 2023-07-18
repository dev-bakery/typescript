{
  class User {
    get fullName(): string {
      // getter는 readonly, 멤버변수처럼 접근이 가능하지만 어떤 연산이 필요할떄 유용함
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      // setter는 writeonly,
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "jobs");
  console.log(user);
  console.log(user.fullName);
  user.age = 6;
  console.log(user);
}
