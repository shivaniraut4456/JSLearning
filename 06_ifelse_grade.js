console.log("    ");
console.log("========================================== Assignment 2 ===============================================");
console.log("    ");

var voteEligible = function(age){
    console.log(`Age is: ${age}`);
    if(age==0 || age<0 || age>130 || age==null){
        console.log(`Invalid data`);
    }
    else{
        if(age<18){
            console.log(`Not eligible for vote`);
        }
        else{
            console.log(`Eligible for vote`);
        }
    }
}

voteEligible(45);

console.log("    ");

voteEligible(17);

console.log("    ");

voteEligible(8);

console.log("    ");

voteEligible(20);

console.log("    ");

voteEligible(-10);

console.log("    ");

voteEligible(200);

console.log("    ");

voteEligible(0);

console.log("    ");

voteEligible(undefined);

console.log("    ");

voteEligible(null);

console.log("    ");
console.log("=======================================================================================================");