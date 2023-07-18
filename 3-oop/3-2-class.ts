{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7;
    //변하지 않는 데이터는 static을 선언해서 class level로 지정함으로써 new CoffeeMaker() 할때 마다 BEANS_GRAMM_PER_SHOT이 생성되는 것을 막음
    coffeeBeans: number = 0; // instance level
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasmilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(50); //클래스를 생성할때 커피콩 갯수를 늘리고 시작!
  const coffee = maker.makeCoffee(2);
  console.log(maker);
  console.log(coffee);
}
