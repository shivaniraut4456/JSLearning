
console.log("    ");
console.log("========================================== Assignment 2 ===============================================");
console.log("    ");

function stringHandsOn(){
    var str = "     Hey you are doing good, keep it up     "
    console.log(`1. Given string is ===> ${str}`);
}

stringHandsOn();

console.log("    ");

var str = "     Hey you are doing good, keep it up     "
var stringLength = str.length;
console.log(`2. Length of the given string is ===> ${stringLength}`);

console.log("    ");

var strAfterTrim = str.trim();
console.log(`3. Given string after removing extra spaces ===> ${strAfterTrim}`);

console.log("    ");

console.log(`4. Length of the given string after removing extra spaces ===> ${strAfterTrim.length}`);

console.log("    ");

var extraSpaces = stringLength - strAfterTrim.length;
console.log(`5. Total no. of extra spaces removed after trimming ===> ${extraSpaces}`);

console.log("    ");

console.log(`6. First and last character of given string ===> ${strAfterTrim.charAt(0)} and ${strAfterTrim.charAt(strAfterTrim.length-1)}`);

console.log("    ");

var result= strAfterTrim.split(" ");
console.log(`7. Total no. of words in the given string ===> ${result.length} `);

console.log("    ");

console.log(`8. Index of word "good" in the given string is ===> ${strAfterTrim.indexOf('good')}`);

console.log("    ");

console.log(`9. Substring staring from index 22 using slice() ===> ${strAfterTrim.slice(22)}   and   using substring(): ${strAfterTrim.substring(22)}`);

console.log("    ");

console.log(`10. Is string ends with word "up" ===> ${strAfterTrim.endsWith('up')}`);

console.log("    ");

console.log(`11. Is string starts with word "Hey" ===> ${strAfterTrim.startsWith('Hey')}`);

console.log("                                 ");
console.log(
  "======================================================================================================"
);