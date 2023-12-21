

console.log("==========================================================================================================");

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log('Original array:===>',arrayRollNumbers);

console.log("==========================================================================================================");

const reversedArray = arrayRollNumbers.reverse();
console.log('Reversed array:===>',reversedArray);

console.log("==========================================================================================================");

const sortedArray = arrayRollNumbers.sort();
console.log('Sorted array using sort() Method without custom logic:===>',sortedArray);

console.log("==========================================================================================================");

const sortedArray1 = arrayRollNumbers.sort((a,b) => {
    return a > b ? 1 : -1 ;
});
console.log('Sorted array in ascending order using sort() method with custom logic :===>',sortedArray1);

console.log("==========================================================================================================");

const greatestNumber = sortedArray1[sortedArray1.length-1];
console.log('Greatest number from an array is:===>', greatestNumber);

console.log("==========================================================================================================");

const lowestNumber = sortedArray1[0];
console.log('Lowest number from an array is:===>', lowestNumber);

console.log("==========================================================================================================");

const set1 = new Set(sortedArray1);
console.log('Array after removing duplicates:===>',set1);

console.log("==========================================================================================================");
