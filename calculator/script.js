function calculator(num1, num2, operator) {
  let result;

  
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Cannot divide by zero");
        return;
      }
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  
  console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}


calculator(10, 5, "+"); 
calculator(10, 5, "-"); 
calculator(10, 5, "*"); 
calculator(10, 5, "/"); 
calculator(10, 0, "/"); 
calculator(10, 5, "%"); 
