function isSameType(value1, value2) {
  // Convert numeric strings to numbers
  if (!isNaN(value1)) value1 = Number(value1);
  if (!isNaN(value2)) value2 = Number(value2);

  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Compare types
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// Display the result
alert(isSameType(value1, value2));
