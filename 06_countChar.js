
console.log("    ");
console.log("========================================== Assignment ===============================================");
console.log("    ");

function countCharA(str){

    console.log(`Given string ===> "${str}"`);
    var check = 'Aa';
    var count = 0;
    for (let index = 0; index <= str.length-1; index++) {
        var char1 = str.charAt(index);
        if (check.includes(char1)) {
            count = count + 1;
        }

        
    }
    console.log(`Count of 'A' and 'a' in given string is ===> ${count}`);
}
countCharA("I AM Learning JavaScript, The Language of internet");

console.log("    ");

countCharA("My favourite movie is LAggAn");

console.log("                                 ");
console.log(
  "======================================================================================================"
);