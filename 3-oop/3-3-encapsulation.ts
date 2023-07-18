{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  // public : default
  // private : 외부에서 접근 불가능
  // protected : 같은 클래스를 상속한 내에서는 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    //변하지 않는 데이터는 static을 선언해서 class level로 지정함으로써 new CoffeeMaker() 할때 마다 BEANS_GRAMM_PER_SHOT이 생성되는 것을 막음
    private coffeeBeans: number = 0; // instance level
    private constructor(coffeeBeans: number) {
      // constructor 에 private 키워드를 주게 되면 new CoffeeMaker(50); 통해 클래스를 생성할 수 없음
      // makeMachine 을 통해 CoffeeMaker를 생성할 수 있도록 만들었기 떄문에 쉽게 클래스를 생성하지 못하도록 막는 것이 좋음
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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

  // const maker = new CoffeeMaker(50); //클래스를 생성할때 커피콩 갯수를 늘리고 시작!
  const maker = CoffeeMaker.makeMachine(50);
  maker.fillCoffeeBeans(100);
  console.log(maker);
}
