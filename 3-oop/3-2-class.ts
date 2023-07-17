{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  class CoffeeMaker {
    BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasmilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(50); //클래스를 생성할때 커피콩 갯수를 늘리고 시작!
  const coffee = maker.makeCoffee(2);
  console.log(coffee);
}
