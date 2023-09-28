
console.log("    ");
console.log("========================================== Assignment 1 ===============================================");
console.log("    ");

console.log("============================================= Part 1 ==================================================");
console.log("    ");

function squareOfWordLength(str){
    console.log(`String is: ${str}`);

    var string1 = str.length;
    console.log(`Length of string is: ${string1}`);
    console.log(`Square of its length is: ${string1**2}`);


}


squareOfWordLength("Shivani");

console.log("    ");


squareOfWordLength("JavaScript");

console.log("    ");

squareOfWordLength("Google Chrome");

console.log("    ");


squareOfWordLength("Developer Smart");

console.log("    ");
console.log("============================================= Part 2 ==================================================");
console.log("    ");

function details(){
    var string = "I am Angular Developer";
    console.log(string);

    console.log("    ");

    console.log(`Length of string is: ${string.length}`);
    
    console.log("    ");

    var words = string.split(" ");
    console.log(`Total no. of words available in the string: ${words.length}`);

    console.log("    ");

    console.log(`Result of "Division" of string length to the total no. of words available in the string is: ${string.length / words.length}`);

    console.log("    ");

    console.log(`Result of "Multiplication" of string length with the total no. of words available in the string is: ${string.length * words.length}`);

}
details();



console.log("                                 ");
console.log(
  "======================================================================================================"
);