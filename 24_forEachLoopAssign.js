console.log(" ");
console.log("============================================================ Assignment 1 ====================================================================");
console.log(" ");


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

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];


arrayEmployees.forEach((employee) => {

    if (employee.emp_company == "TCS") {
        console.log("Company Name:===> ", employee.emp_company, "    Employee Name:===> ", employee.emp_name );
    }
    
});


console.log(" ");
console.log("==============================================================================================================================================");
console.log(" ");

 arrayEmployees.forEach((employee) => {
    if (employee.emp_dept == "Finance") {
        console.log("Department Name:===> ", employee.emp_dept, "    Employee Name:===> ", employee.emp_name);
    }
});

console.log(" ");
console.log("==============================================================================================================================================");
console.log(" ");

arrayEmployees.forEach((employee) => {
    if (employee.emp_name.startsWith("R")) {
        console.log("Employee Details whose name starts with R :===> ", employee);
    }
});

console.log(" ");
console.log("==============================================================================================================================================");
console.log(" ");

arrayEmployees.forEach((employee) => {
    if(employee.emp_salary > 75000){
        console.log("Employee whose salary is greater than 75000 : ", "    Employee Name:===> ", employee.emp_name, "   Company Name:===> ", employee.emp_company, "   Salary:===> ", employee.emp_salary);
    }
});

console.log(" ");
console.log("==============================================================================================================================================");
console.log(" ");

arrayEmployees.forEach((employee) => {
    if((employee.emp_salary >= 50000) && (employee.emp_dept == "IT")){
        console.log("Employee whose salary is greater than equal to 50000 and from IT department: ", "    Employee Name:===> ", employee.emp_name, "   Company Name:===> ", employee.emp_company, "   Salary:===> ", employee.emp_salary);
    }
});

console.log(" ");
console.log("==============================================================================================================================================");
console.log(" ");

arrayEmployees.forEach((employee) => {
    if (employee.emp_company == "Infy") {
        console.log("Employee details:===> ", employee);
    }
});

console.log(" ");
console.log("==============================================================================================================================================");
console.log(" ");