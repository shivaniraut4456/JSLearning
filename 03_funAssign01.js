console.log("                                 ");
console.log(
  "=======================================Assignment======================================="
);
console.log("                                 ");
console.log("[Part 1]----------> Function with no argument and no return type");
console.log("                                 ");

function message1() {
  console.log(
    "1. It doesn't matter what others are doing, it matters what you are doing."
  );
}

message1();

console.log("                                 ");

function message2() {
  console.log(
    "2. No matter how small you start, start something that matters."
  );
}

message2();
console.log("                                 ");

console.log(
  "=========================================================================================="
);
console.log("                                 ");

console.log("[Part 2]----------> Personal Details");
console.log("                                 ");

function personalDetails(firstName, lastName, collegeName) {
  firstName = "Shivani";
  console.log("First Name:", firstName);

  console.log("                                 ");

  lastName = "Raut";
  console.log("Last Name:", lastName);

  console.log("                                 ");

  collegeName = "DIEMS Aurangabad";
  console.log("College Name:", collegeName);
}
personalDetails();

console.log("                                 ");
console.log(
  "=========================================================================================="
);
console.log("                                 ");

console.log("[Part 3]----------> Swap Values");
console.log("                                 ");

function swapValues(value1, value2) {
  console.log("values before swapping:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("                                 ");
  console.log("values after swapping:", value1, value2);
}

swapValues("Virat", "Anushka");
console.log("                                 ");
console.log(
  "------------------------------------------------------------------------------------------"
);
console.log("                                 ");
swapValues(1000, 2000);

console.log("                                 ");
console.log(
  "=========================================================================================="
);
console.log("                                 ");

console.log("[Part 4]----------> Addition");
console.log("                                 ");

function addThreeValues(num1, num2, num3) {
  var add = num1 + num2 + num3;
  return add;
}

var addition = addThreeValues(10.23, 600, 40);
console.log("Addition of three values 10.23, 600, 40 is : ", addition);

console.log("                                 ");

var greetings = addThreeValues("Hello,", " Good", " Morning...!!!");
console.log(greetings);

console.log("                                 ");
console.log(
  "=========================================================================================="
);
