{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // CoffeeMaker 인터페이스 규격에 따라 CoffeeMachine을 구현해야함
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    //변하지 않는 데이터는 static을 선언해서 class level로 지정함으로써 new CoffeeMachine() 할때 마다 BEANS_GRAMM_PER_SHOT이 생성되는 것을 막음
    private coffeeBeans: number = 0; // instance level
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number): void {
      this.coffeeBeans = beans;
    }
    clean(): void {
      console.log("cleaning the machine");
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
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(4);
      console.log(coffee);
      this.machine.fillCoffeeBeans(59);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(100);
  const amateur = new AmateurUser(maker);
  amateur.makeCoffee();
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
