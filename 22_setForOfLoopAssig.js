
let arrayNumber = [11, 3, 4, 11, 4, 7, 3];

const setNum = new Set(arrayNumber);
console.log('Removed duplicates using Set() :===>',setNum);

console.log("==========================================================================================================");


arrayNumber = [...new Set(arrayNumber)];
console.log('Final array after removing duplicates :===>', arrayNumber);

console.log("==========================================================================================================");


function uniqueValue(array){

let arrayOfUniqueValue = [];

for (const index of array) {
    if(arrayOfUniqueValue.indexOf(index) === -1) {
        arrayOfUniqueValue.push(index);
    }
    
}
console.log('Array after removing duplicates with for of loop :===>', arrayOfUniqueValue);
}

uniqueValue(arrayNumber);

console.log("==========================================================================================================");


const str = "How are you mate";

const str1 = str.split(" ");

console.log(str1);

let finalStr = " ";

for (const word of str1) {
    let firstChar = word.charAt(0).toUpperCase()+str1.slice(0);
    let lastChar = word.charAt(word.length-1).toUpperCase()+str1.slice(word.length-1);

    
    finalStr = finalStr + word + " ";
    console.log(word, firstChar,lastChar);
}
console.log(finalStr);