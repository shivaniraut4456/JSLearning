console.log("    ");
console.log("============================================= Part 2 ==================================================");
console.log("    ");

const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log('1. Given array is :---->', arrayFruits);

console.log("    ");

console.log(`2. First element of array is :----> ${arrayFruits[0]}`); 

console.log("    ");

console.log(`3. Last element of array is :----> ${arrayFruits[arrayFruits.length-1]}`); 

console.log("    ");

arrayFruits.unshift("Papaya");

console.log('4. Array after adding "Papaya" before "Banana" :---->', arrayFruits);

console.log("    ");

arrayFruits.splice(4,1);

console.log('5. Array after removing "Mango" :---->', arrayFruits);

console.log("    ");

arrayFruits.push("Pineapple");

console.log('6. Array after adding "Pineapple" at last :---->', arrayFruits);

console.log("    ");

arrayFruits.splice(4,0, "Dragon Fruit");

console.log('7. Array after adding "Dragon Fruit" before "Water Melon" :---->', arrayFruits);

console.log("    ");

arrayFruits.splice(2,1, "Kiwi");

console.log('8. Array after replacing "Orange" with "Kiwi" :---->', arrayFruits);

console.log("    ");

console.log(`9. Elements of an array from index 1 to 4 :----> ${arrayFruits.slice(1 , 4)}`);
    
console.log("    ");

/*let element = " ";
for (let index = 1; index < 4; index++) {
    element = element+ arrayFruits[index]+ "  ";
}
console.log(`Elements of array from index 1 to 4 :---->${element}`); */

console.log("    ");

/*let Element=" ";  
for(index = arrayFruits.length-3; index <= arrayFruits.length-1; index++){
    Element = Element+ arrayFruits[index]+"  ";
}
console.log('Last three Elements of an array :---->', Element); */

console.log(`10. Last three Elements of an array :----> ${arrayFruits.slice(4)}`);