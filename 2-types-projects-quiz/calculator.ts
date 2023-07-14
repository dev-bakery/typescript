/**
 * Let's make a calculator 🧮
 */
function calculate(calc: string, firstNum: number, lastNum: number) {
  switch (calc) {
    case "add":
      return firstNum + lastNum;

    case "substract":
      return firstNum - lastNum;

    case "multiply":
      return firstNum * lastNum;

    case "divide":
      return firstNum / lastNum;

    case "remainder":
      return firstNum % lastNum;
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
