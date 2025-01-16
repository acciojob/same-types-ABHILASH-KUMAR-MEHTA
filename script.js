function isSameType(value1, value2) {
  function isSameType(value1, value2) {
  // Both values are NaN
  if (typeof value1 === 'number' && typeof value2 === 'number' && isNaN(value1) && isNaN(value2)) {
    return true;
  }
  // Compare types
  return typeof value1 === typeof value2;
}

}

// Do not change the code below.
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// Display the result
alert(isSameType(value1, value2));
