console.log(" ");
console.log("================================================== Assignment 3 ==========================================================");
console.log(" ");

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// Find out all the Numbers which are greater than 50
const newArray = arrayNumbers.filter((currentValue)=>{
    return currentValue > 50;
});

console.log("Numbers which are greater than 50 :===> ", newArray);

console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");

// Find out all the even numbers
const newArray1 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 2 == 0;
});

console.log("All even numbers from an array :===> ", newArray1);

console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");

// Find out all the odd numbers
const newArray2 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 2 != 0;
});

console.log("All odd numbers from an array :===> ", newArray2);


console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");

// Find out all numbers which are multiple of 5
const newArray3 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 5 == 0;
});

console.log("Numbers which are multiple of 5 :===> ", newArray3);

console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");

// Find out all numbers which are in between 20 and 50
const newArray4 = arrayNumbers.filter((currentValue)=>{
    return ((currentValue > 20) && (currentValue < 50));
});

console.log("Numbers between 20 and 50 are :===> ", newArray4);


console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");
