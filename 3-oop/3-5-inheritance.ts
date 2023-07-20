{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    // CoffeeMaker 인터페이스 규격에 따라 CoffeeMachine을 구현해야함
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    //변하지 않는 데이터는 static을 선언해서 class level로 지정함으로써 new CoffeeMachine() 할때 마다 BEANS_GRAMM_PER_SHOT이 생성되는 것을 막음
    private coffeeBeans: number = 0; // instance level
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      console.log(`grind beans for ${shots} shots`);
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preHeat(): void {
      console.log("heating up..");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`extract coffee ${shots} shots`);
      return {
        shots: shots,
        hasmilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
    fillCoffeeBeans(beans: number): void {
      this.coffeeBeans = beans;
    }
    clean(): void {
      console.log("cleaning the machine");
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    steamMilk() {
      console.log("steaming some milk~");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //super 키워드 이용해서 부모클래스의 메서드를 사용할 수 있음.
      this.steamMilk();
      return {
        ...coffee,
        hasmilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(100);
  const latteMachine = new CaffeLatteMachine(100);
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}
