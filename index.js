function sayHi() {
  console.log("hi");

  console.log(
    "i pooped, and my name is matthew I poop pretty often, every mornign while drinking coffee, often twice a day, sometimes more if I need to or am anxious"
  );

  console.log("this is my factorial program!");
  console.log(fact(5));
}

function fact(number) {
  if (number <= 0) {
    return 0;
  }

  return number * fact(number - 1);

}
