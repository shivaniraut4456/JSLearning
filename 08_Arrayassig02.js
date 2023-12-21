console.log("    ");
console.log("========================================== Assignment 2 ===============================================");
console.log("    ");

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

console.log("1. Given array :---->" , arrayNumbers);

console.log("  ");

console.log(`2. Length / total elements available in an array :----> ${arrayNumbers.length}`);

console.log("  ");

console.log(`3. First element of an array :----> ${arrayNumbers[0]}     Last element of an array :----> ${arrayNumbers[arrayNumbers.length-1]}`);

console.log("    ");

console.log(`4. Third last element of an array :----> ${arrayNumbers[arrayNumbers.length-3]}`);

console.log("    ");

const even = [];
for (const num of arrayNumbers) {
    if (num % 2 ==0) {
        even.push(num);
        
    }
}
console.log('5. EVEN numbers from an array :---->', even);

console.log(" ");

const odd = [];
for (const num of arrayNumbers) {
    if (num % 2 != 0) {
        odd.push(num);
        
    }
}
console.log('6. ODD numbers from an array :---->', odd);

console.log(" ");

const evenPosition = [];
let count = 0;
for (const index in arrayNumbers) {
    if (index % 2==0) {
        const element = arrayNumbers[index];
        evenPosition.push(element);
        count = count + element;

    }
}
console.log('7. EVEN position elements of an array :---->', evenPosition);

console.log(" ");

console.log('8. Sum of all EVEN position elements of an array :---->', count);

console.log(" ");

const oddPosition = [];
count = 0;
for (const index in arrayNumbers) {
    if (index % 2 != 0) {
        const element = arrayNumbers[index];
        oddPosition.push(element);
        count = count + element;

    }
}
console.log('7. ODD position elements of an array :---->', oddPosition);

console.log(" ");

console.log('8. Sum of all ODD position elements of an array :---->', count);

console.log(" ");

count = 0;
for (const index in arrayNumbers) {
    const element = arrayNumbers[index];
    count = count + element;

}

console.log('9. Sum of all elements of an array :---->', count);

console.log(" ");

const fiveMultiple = [];
for (const num of arrayNumbers) {
    if (num % 5 ==0) {
        fiveMultiple.push(num);
        
    }
}
console.log('5. Numbers from an array which are multiple of 5 :---->', fiveMultiple);

console.log(" ");

console.log(`6. Is number 115 available in array :----> ${arrayNumbers.includes(115)}`);

console.log(" ");

console.log(`7. Is number 23 available in array :----> ${arrayNumbers.includes(23)}`);

console.log(" ");

arrayNumbers.splice(3, 0,55, 66);

console.log(`8. Array after adding 55, 66 before index 3 in an array :----> ${arrayNumbers}`);

console.log(" ");

arrayNumbers.splice(4, 3);

console.log(`9. Array after deleting 3 elements starting from index 4 :----> ${arrayNumbers} `);

console.log("    ");
console.log("=======================================================================================================");