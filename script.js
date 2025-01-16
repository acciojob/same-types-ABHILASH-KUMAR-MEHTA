function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if types of both values are the same
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// Display the result
alert(isSameType(value1, value2));
