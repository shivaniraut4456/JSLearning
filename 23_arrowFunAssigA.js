console.log(" ");
console.log("================================================== Assignment 1 ==========================================================");
console.log(" ");

const message = ()=>{
    console.log("Good Morning, Today is Wednesday");
}
message();

console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");

const mul = (num1, num2, num3=1)=>{
    const S1 = num1*num2*num3;
    return S1;
}
let mul1= mul(5,5,2);
console.log("Multiplication of 5, 5, 2 is:===> ", mul1);

console.log(" ");

let mul2 = mul(10,4);
console.log("Multiplication of 10, 4, (1 as default value ) is:===> ", mul1);

console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");

const sum = (value1, value2, value3, value4, value5)=>{
    const S2 = value1 + value2 + value3 + value4 + value5;
    return S2;
}
let sum1 = sum(100, 100, 200, 349, 756);
console.log("Sum of 100, 100, 200, 349, 756 is:===> ",sum1);

console.log(" ");

let sum2 = sum("I am", " learning", " ES6", " features", " in depth");
console.log("Sum of given string values is:===> ", sum2);

console.log(" ");
console.log("==========================================================================================================================");
console.log(" ");