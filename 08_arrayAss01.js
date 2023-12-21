console.log("    ");
console.log("========================================== Assignment 1 ===============================================");
console.log("    ");


console.log("============================================= Part 1 ==================================================");
console.log("    ");
let arrayNumbers = [22, 11, 44, 55, 77, 33];

for(let index=0; index<=arrayNumbers.length-1; index++){
    if(index%2==0){
     
        const element= arrayNumbers[index]
        console.log(`EVEN positioned element is : ${element}`);

    }
}
console.log("    ");
console.log("============================================= Part 2 ==================================================");
console.log("    ");

arrayNumbers = [22, 11, 44, 55, 77, 33];
let count=0;
for(index=0; index<=arrayNumbers.length-1; index++){
    count=arrayNumbers[index]+count;
}
console.log(`Sum of array elements is : ${count}`);

console.log("    ");
console.log("=======================================================================================================");