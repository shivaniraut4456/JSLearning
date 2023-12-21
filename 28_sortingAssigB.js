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


// =================================================================================================================================

const sortedArray = arrayEmps.sort((emp1, emp2) => {
    return emp1.emp_id > emp2.emp_id ? -1 : 1;
});


console.log(" ");


console.log('Employee details in descending order of id:===>');

console.log(" ");

sortedArray.forEach(employee => {
    
    console.log('Id:',employee.emp_id, '    Name:',employee.emp_name, '    Department:',employee.emp_dept);
});


console.log("==========================================================================================================");


const sortedArray1 = arrayEmps.sort((emp1, emp2) => {
    return emp1.emp_dept > emp2.emp_dept ? 1 : -1;
});
console.log(sortedArray1);

console.log(" ");

console.log('Employee details in ascending order of department:===>');

console.log(" ");

sortedArray1.forEach((employee) => {
    console.log('Id:',employee.emp_id, '    Department:', employee.emp_dept, '    Company:',employee.emp_company);
});

console.log("==========================================================================================================");

const sortedArray2 = arrayEmps.sort((emp1, emp2) =>{
    return emp1.emp_salary > emp2.emp_salary ? -1 : 1;
});

console.log(sortedArray2);

console.log(" ");


console.log('Employee details in descending order of salary:===>');

console.log(" ");

sortedArray2.forEach(employee => {
    console.log('Salary:', employee.emp_salary, '    Name:', employee.emp_name,  '    Company:', employee.emp_company);
});

console.log("==========================================================================================================");