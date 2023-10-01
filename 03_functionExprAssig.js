console.log("    ");
console.log("========================================== Assignment 1 ===============================================");
console.log("    ");


console.log("============================================= Part 1 ==================================================");


var square = function(num){
    var result = num**2;
    console.log(`Square of ${num} is : ${result}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);


console.log("============================================= Part 2 ==================================================");


var result1 = typeof square;
console.log(`Type of function is : ${result1}`);


console.log("============================================= Part 3 ==================================================");


var area = function(length, breadth){
    var result2 = length*breadth;
    console.log(`Area of rectangle plot is : ${result2}`);

}
area(499, 917);


console.log("============================================= Part 4 ==================================================");


var swap = function(num1, num2){
    console.log(`Num1 and Num2 before swap: ${num1} and ${num2}`);
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`Num1 and Num2 after swap: ${num1} and ${num2}`);
}
swap("Mahi", "Raina");

console.log("    ");

swap(55, 77);


console.log("============================================= Part 5 ==================================================");


var string = function(){
    var string1 = "JS the most popular language of internet";
    console.log(`String is: ${string1}`);

    

    var stringLength = string1.length;
    console.log(`Total characters available in the string: ${stringLength}`);

    
    
    var character1 = string1.charAt(6);
    console.log(`Character at index 6 is: ${character1}`);

    
    
    var character2 = string1.charAt(11);
    console.log(`Character at index 11 is: ${character2}`);
    
    

    var lastChar = string1.charAt(string1.length-1);
    console.log(`Last character of the string is: ${lastChar}`);

   

    var character3 = string1.charAt(0);
    console.log(`Very first character of the string is: ${character3}`);

  

    var character4 = string1.charAt(string1.length-3);
    console.log(`Third last character of the string is: ${character4}`);

   

    var words = string1.split(" ");
    var totalWords = words.length;
    console.log(`Total number of words of the given string: ${totalWords}`);

    

    console.log(`Square of total number of words available in the string: ${totalWords**2}`);
}

string();


console.log("=======================================================================================================");