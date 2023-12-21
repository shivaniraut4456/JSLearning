
console.log("===================================================================");


const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];

const sum = array_numbers.reduce( (runningTotal, value)=>{

    return runningTotal + value;

}, 0);

console.log('Sum of all numbers using reduce() is:===>',sum);

console.log("===================================================================");

let sum1 = 0;
for (const index of array_numbers) {
    sum1 = sum1 + index;
    
}
console.log('Sum of all numbers using traditional method / for of loop is:===>',sum1);

console.log("===================================================================");

const multiple = array_numbers.filter((currentValue) =>{
    return currentValue %5== 0;
});
console.log('Numbers which are multiple of 5 are:===>',multiple);

console.log("===================================================================");

const sum3 = multiple.reduce((runningTotal, value) => {
    return runningTotal + value;
},0);

console.log('Sum of numbers which are multiple of 5 is:===>', sum3);

console.log("===================================================================");
