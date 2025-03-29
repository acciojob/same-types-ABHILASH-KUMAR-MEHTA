function isSameType(value1, value2) {
  // Convert to numbers if possible
  let num1 = Number(value1);
  let num2 = Number(value2);

  // Check if both are NaN
  if (Number.isNaN(num1) && Number.isNaN(num2)) {
    return true;
  }

  // Compare actual types
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// Display the result
alert(isSameType(value1, value2));
