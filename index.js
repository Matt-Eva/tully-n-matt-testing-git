function sayHi() {
  console.log("hi");
  console.log("this is my factorial program!");
  console.log(fact(5));
}

function fact(number) {
  if (number <= 0) {
    return 0;
  }

  return number * fact(number - 1);
}
