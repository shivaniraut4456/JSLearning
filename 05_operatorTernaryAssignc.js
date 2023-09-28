

console.log("    ");
console.log("========================================== Assignment 1 ===============================================");
console.log("    ");

console.log("============================================= Part 1 ==================================================");
console.log("    ");

function maleMarriageEligibility(gender, age, boyName){

    var result = gender == "Male" && age >= 21 ? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are not eligible for Marriage`;
    return result;
}

var result1 = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result1);

console.log("    ");

var result2 = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result2);

console.log("    ");

console.log("============================================= Part 2 ==================================================");
console.log("    ");

function femaleMarriageEligibility(gender, age, girlName){
    var Result = gender == "Female" && age >= 18 ? `Hey ${girlName} you are eligible for Marriage`: `Hey ${girlName} you are not eligible for Marriage`;
    return Result;
}

var Result1 = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(Result1);

console.log("    ");

var Result2 = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(Result2);

console.log("                                 ");
console.log(
  "======================================================================================================"
);