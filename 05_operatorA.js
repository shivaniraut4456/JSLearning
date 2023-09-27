
console.log("    ");
console.log("========================================== Assignment 1 ===============================================");
console.log("    ");

console.log("============================================= Part 1 ==================================================");
console.log("    ");

function squareOfWordLength(str){
    console.log(`String is: ${str}`);
}

var string1 ="Shivani";
squareOfWordLength(string1);
console.log(`Length of string is: ${string1.length}`);
console.log(`Square of its length is: ${string1.length**2}`);

console.log("    ");

var string2 ="JavaScript";
squareOfWordLength("JavaScript");
console.log(`Length of string is: ${string2.length}`);
console.log(`Square of its length is: ${string2.length**2}`);

console.log("    ");

var string3 ="Google Chrome";
squareOfWordLength("Google Chrome");
console.log(`Length of string is: ${string3.length}`);
console.log(`Square of its length is: ${string3.length**2}`);

console.log("    ");

var string4 ="Developer Smart";
squareOfWordLength("Developer Smart");
console.log(`Length of string is: ${string4.length}`);
console.log(`Square of its length is: ${string4.length**2}`);

console.log("    ");
console.log("============================================= Part 2 ==================================================");
console.log("    ");

function details(){
    console.log(`I am Angular Developer`);
}
details();

console.log("    ");

var string = "I am Angular Developer";
console.log(`Length of string is: ${string.length}`);

console.log("    ");

var words = string.split(" ");
console.log(`Total no. of words available in the string: ${words.length}`);

console.log("    ");

console.log(`Result of "Division" of string length to the total no. of words available in the string is: ${string.length / words.length}`);

console.log("    ");

console.log(`Result of "Multiplication" of string length with the total no. of words available in the string is: ${string.length * words.length}`);

console.log("                                 ");
console.log(
  "======================================================================================================"
);