
console.log("    ");
console.log("========================================== Assignment 2 ===============================================");
console.log("    ");

console.log("============================================= Part 1 ==================================================");
console.log("    ");

function greaterNumber(num1, num2){

         if(num1 > num2){
            console.log(`Greater number amongst ${num1} and ${num2} is: ${num1}`);
         }
         else{
            console.log(`Greater number amongst ${num1} and ${num2} is: ${num2}`);
         }

}
greaterNumber(10, -10);

console.log("    ");

greaterNumber(800, 899);

console.log("    ");

console.log("============================================= Part 2 ==================================================");
console.log("    ");

function isEvenOrOddNum(num){
          var result = num%2 == 0 ? "TRUE" : "FALSE";
          return result;
}

var result1 = isEvenOrOddNum(29);
console.log(`Given number 29 is: ${result1}`);

console.log("    ");

var result2 = isEvenOrOddNum(44);
console.log(`Given number 44 is: ${result2}`);

console.log("    ");

var result3 = isEvenOrOddNum(0);
console.log(`Given number 0 is: ${result3}`);

console.log("    ");

var result4 = isEvenOrOddNum(101);
console.log(`Given number 101 is: ${result4}`);

console.log("    ");

console.log("============================================= Part 3 ==================================================");
console.log("    ");

function wordLength(str){
    var Num = str.length;
    var Result = Num%2 == 0 ? "EVEN" : "ODD";
    return Result;

}
 var Result1 = wordLength("JavaScript");
 console.log(`Word JavaScript has: ${Result1} length`);

 console.log("    ");

 var Result2 = wordLength("Developer");
 console.log(`Word Developer has: ${Result2} length`);

console.log("    ");

 var Result3 = wordLength("Google");
 console.log(`Word Google has: ${Result3} length`);

 console.log("                                 ");
console.log(
  "======================================================================================================"
);