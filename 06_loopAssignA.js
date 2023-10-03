console.log("    ");
console.log("========================================== Assignment 1 ===============================================");
console.log("    ");


console.log("============================================= Part 1 ==================================================");
console.log("    ");

var str = "I am very good UI IT Developer"
console.log(`Given String ===> "${str}"`);
var vowels = "AEIOUaeiou"
var count = 0;
for (let index = 0; index <= str.length-1; index++) {
    var char = str.charAt(index);
    if (vowels.includes(char)) {
        count = count + 1;
    }
    
}
console.log(`Number of vowels in given string are ===> ${count}`);


console.log("    ");
console.log("============================================= Part 2 ==================================================");
console.log("    ");


function sumOfCubes(){
    var sum = 0;
    for (let index = 1; index <= 5; index++) {
         sum = sum + index**3;
        
    }
    console.log(`Sum of cube of numbers from 1 to 5 is ===> ${sum}`);
}
sumOfCubes();

console.log("    ");
console.log("============================================= Part 3 ==================================================");
console.log("    ");

function oddPositionedChars(str){
    console.log(`Given string ===> "${str}"`);
    var char = " ";
    for (let index = 0; index <= str.length-1; index++) {
        if (index%2 != 0 && str.charAt(index) != " ") {
            char = char + str.charAt(index) + " ";
        }
        
    }
    console.log(`Odd positioned characters are ===> ${char}`);
}
oddPositionedChars("Hard work always pays back");

console.log("    ");

oddPositionedChars("Soon I will be UI IT Champ");


console.log("    ");
console.log("=======================================================================================================");