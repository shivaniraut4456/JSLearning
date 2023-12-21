console.log("    ");
console.log("************************************************************ Object bankSbi *****************************************************************");
console.log("    ");

const bankSbi = {
    name : 'State bank of India',
    location : 'Pune',
    address : 'Shivaji Nagar',
    ifscCode: 'SBIN0018093',
   
}

console.table(bankSbi);

console.log("    ");
console.log("************************************************************ Object bankLocation ************************************************************");
console.log("    ");

const bankLocation = {
    street : 'Tilak Road',
    city : 'Pune',
    pin :  411005

}

console.table(bankLocation);

console.log("    ");
console.log("************************************************************ Cloned Object bank *************************************************************");
console.log("    ");

const bank = Object.assign({}, bankSbi, bankLocation);
console.log("SBI bank details====> ", bank);

console.log("    ");
console.log("************************************************************ Object rateOfInterest **********************************************************");
console.log("    ");

const rateOfInterest = {
    homeLoanInterest : 10,
    personalLoanInterest : 12,
    dueInterest : 5
}

console.table(rateOfInterest);

console.log("    ");
console.log("********************************************************** Merged Object sbiDetails **********************************************************");
console.log("    ");

const sbiDetails = Object.assign( bankSbi, bankLocation, rateOfInterest);
console.log("Complete SBI Details====> ", sbiDetails);

console.log("    ");
console.log("********************************************************** Traversing Merged Object sbiDetails ************************************************");
console.log("    ");

for (const key in sbiDetails) {

    console.log( key , ":", sbiDetails[key]);
 
 }

 console.log("    ");
console.log("*************************************************************************************************************************************************");

