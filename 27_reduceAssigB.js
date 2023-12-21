console.log("==========================================================================================================");


class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];





const empsWipro = arrayEmps.filter((employee) => {
    return employee.emp_company == 'Wipro';
});

console.log(empsWipro);

let str=" ";
empsWipro.forEach(employee => {
     str = str + employee.emp_name +"  ";
     return str;
});
console.log('Employee names of Wipro company:===>', str)




console.log("==========================================================================================================");



const empsHrITDept = arrayEmps.filter((employee) => {
    return (employee.emp_dept == "HR" || "IT");
});

console.log(empsHrITDept);

let str1 = " ";
empsHrITDept.forEach(employee => {
    str1 = str1 + employee.emp_name + "  ";
});
console.log("Employee Names from HR or IT Department:===>",str1 );



console.log("==========================================================================================================");



const idGreaterThan50 = arrayEmps.filter((employee) => {
    return employee.emp_id > 50;
});
 console.log(idGreaterThan50 );


 let str2 = " ";
idGreaterThan50.forEach(employee => {
    str2 = str2 + employee.emp_name + "  ";
});
console.log('Employees whose ids are greater than 50 :===>', str2);



console.log("==========================================================================================================");



const names = arrayEmps.filter((employee) => {
    return (employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M"));
});
console.log(names);

let str3 = " ";
names.forEach(employee => {
    str3 = str3 + employee.emp_name + "  ";
});
console.log('Employee names start with A or V or M :===>',str3 );




console.log("==========================================================================================================");



const avgSalary = arrayEmps.filter((employee) => {
    return employee.emp_salary;
});
console.log(avgSalary);

let sum = 0;
let avg ;
avgSalary.forEach(employee => {
    
    sum = sum + employee.emp_salary;
   
});
avg = sum / avgSalary.length;
console.log("Avg Salary of employee for all the departments is :===>", avg);



console.log("==========================================================================================================");


let sumSalary = arrayEmps.reduce((runningTotal, value) => {
    return runningTotal + value.emp_salary
}, 0);

console.log('Average salary using reduce() method:===>', (sumSalary/arrayEmps.length));




console.log("==========================================================================================================");

const avgSalary1 = arrayEmps.filter((employee) => {
    return employee.emp_dept == "IT";
});
console.log(avgSalary1);


const avgSalaryIT = avgSalary1.reduce((runningTotal, value) => {
    return runningTotal + value.emp_salary;
},0);

console.log('Avg salary of IT department employee :===>', avgSalaryIT/avgSalary1.length);

console.log("==========================================================================================================");
