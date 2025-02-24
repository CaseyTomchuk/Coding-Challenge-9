// Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) { // using the constrctor keyword to show that this is how all objects of the employee class will be structured
    this.name = name;
    this.id = id;
    this.department = department;
    this.salary = salary;
    };

    hasBonus() { // checks to see if this class has a bonus(it doesn't, this is needed for the calculateAnnualSalary function)
        return false;
    }

     getDetails() { // logging the properties of the employee class
        console.log(`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`); // Using the this keyword since it is written inside the class being referenced
    }
    calculateAnnualSalary() {
        let annualSalary = this.salary * 12;
        if (this.hasBonus()) {
            annualSalary += (annualSalary * 0.1)
        }
        return annualSalary;
    }
}

let elise = new Employee ("Elise Norman", 110, "Advertising", 4000) // Creating a new employee object using the employee class
elise.getDetails(); // Expected output: Employee: Elise Norman, ID: 110, Department: Advertising, Salary: 4000
console.log(elise.calculateAnnualSalary()); // Expected output: 48000 || I chose to do this with console.log() so that I could make calculateAnnualSalary faster to write

// Task 2: Creating a Manager Class (Inheritence and method overriding)

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // accesses the properties of the parent
        this.teamSize = teamSize;
    }

    hasBonus() { // managers do get bonuses, which is needed for logic in our other functions
        return true;
    }
    
    getDetails() {
        console.log(`Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`);
    } // same as before but I added Team Size 

   
    calculateBonus() {
        return this.calculateAnnualSalary() / 11; // I am able to use this. because its a part of the super class
    }
}
let casey = new Manager ("Casey Tomchuk", 101, "Manager", 5000, 10) 
casey.getDetails(); // Expected Output: Manager: Casey Tomchuk, ID: 101, Department: Manager, Salary: 5000, Team Size: 10
console.log(casey.calculateBonus()); // Expected Output: 6000

// Task 3: Creating a Company Class

class Company {
    constructor(name, employees) {
        this.name = name;
        this.employees = []
    }
    addEmployee(employee) {
        this.employees.push(employee) // takes in an employee parameter and assigns/pushes it to employees
    }
    listEmployees() {
        this.employees.forEach(employee => employee.getDetails()) // for each employee under the company class we call employee.getDetails() from earlier in the code
    }

// Task 4*:

    payrollFunction (currentTotal, employee) { 
        return currentTotal + employee.salary; //creates a running total and adds the employee salary to it for each instance
    }

    calculateTotalPayroll() {
        return this.employees.reduce(this.payrollFunction, 0) * 12; //reduce runs through each item in the employees array (made up of employee objects) and combines their salaries. 0 is set as the initial value for currentTotal
    }

};

let company = new Company("Company Name");
company.addEmployee(elise); 
company.addEmployee(casey); 
company.listEmployees(); // Expected Output: Employee: Elise Norman, ID: 110, Department: Advertising, Salary: 4000
// Expected Output: Manager: Casey Tomchuk, ID: 101, Department: Manager, Salary: 5000, Team Size: 10

// Task 4: Implementing a Payroll System *
console.log(company.calculateTotalPayroll()); // Expected Output: 108,0000 annual