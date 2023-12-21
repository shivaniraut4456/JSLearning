console.log("    ");
console.log("******************************************************** Original Object ********************************************************");
console.log("    ");

let professor = {

    name : 'prof. Atul Sharma',
    college : 'COEP Pune',
    department : 'Computer Science & Engineering',
    age : 35,
    subject : 'Python',

    degrees : {
        engineering : 'CSC',
        PHD : 'Adv computing'

    },

    certificates : ['Hacker Rank Participation', 'Certificate in IFE course', 'Certification in Adv Programming']

};

console.log(professor);

console.log("    ");
console.log("************************************************* Object after adding experience *************************************************");
console.log("    ");

professor.totalExperience = 14;
console.log(professor);

console.log("    ");
console.log("******************************************* Object after modifying subject property ***********************************************");
console.log("    ");

professor.subject = 'Java';
console.log(professor);

console.log("    ");
console.log("************************************** Array after adding new certificate at the end of array *************************************");
console.log("    ");

professor.certificates.push("Oracle Certified");
console.log(professor.certificates);

console.log("    ");
console.log("******************************************** Last element of the array certificate ************************************************");
console.log("    ");

console.log(professor.certificates[professor.certificates.length-1]);

console.log("    ");
console.log("********************************************* Complete object after modification **************************************************");
console.log("    ");

console.log(professor);

console.log("    ");
console.log("*************************************** Traversing array certificate using for of loop ********************************************");
console.log("    ");

for (const element of professor.certificates) {
    console.log(element);
}

console.log("    ");
console.log("***********************************************************************************************************************************");


