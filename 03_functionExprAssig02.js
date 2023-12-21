console.log("    ");
console.log("========================================== Assignment 1 ===============================================");
console.log("    ");

var leapYear = function(year){
if (year == null || year == undefined) {
    console.log(`${year} ===> is an invalid data`);
}
else{
    if ((year % 4 == 0 || year % 100 == 0 || year %4 == 0)){ 
        console.log(`${year} ===> is a leap year`);
    }
    else{
        console.log(`${year} ===> is not a leap year`);
    }
}

}
    
        
    



leapYear(2020);

console.log("    ");

leapYear(1999);

console.log("    ");

leapYear(1600);

console.log("    ");

leapYear(2022);

console.log("    ");

leapYear(1945);

console.log("    ");

leapYear(null);

console.log("    ");

leapYear("Twenty Twenty");

console.log("    ");

leapYear(undefined);

console.log("    ");

leapYear(NaN);

console.log("    ");

leapYear(1750);

