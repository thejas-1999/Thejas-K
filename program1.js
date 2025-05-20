/* Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
  Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
  Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string */

class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation.toLowerCase();
  }

  calculations() {
    let result;
    switch (this.operation) {
      case "addition":
        result = this.a + this.b;
        break;
      case "subtraction":
        result = this.a - this.b;
        break;

      case "multiplication":
        result = this.a * this.b;
        break;
      case "division":
        if (this.b !== 0) {
          result = this.a / this.b;
        } else {
          result = `Can't divide by 0`;
        }
        break;

      default:
        result = `Operation is not valid`;
    }
    return result;
  }
}

const add = new Calculator(7, 4, "Addition");
console.log(`Sum = ${add.calculations()}`);

const sub = new Calculator(5, 4, "subtraction");
console.log(`Difference = ${sub.calculations()}`);

const mul = new Calculator(6, 4, "multiplication");
console.log(`Product = ${mul.calculations()}`);

const div = new Calculator(20, 4, "division");
console.log(`quotient = ${div.calculations()}`);

const div2 = new Calculator(6, 0, "division");
console.log(`quotient = ${div2.calculations()}`);
