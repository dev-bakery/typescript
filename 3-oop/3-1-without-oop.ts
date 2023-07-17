/**
 * command에는 string 타입보다는 5가지의 케이스가 정해져 있으므로 union타입을 사용해서 값을 지정하는것도 좋겠다.
 */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(
  command: Command,
  firstNum: number,
  lastNum: number
): number {
  switch (command) {
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
    default:
      throw Error("unknown command");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
