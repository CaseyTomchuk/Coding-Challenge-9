// Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) { // using the constrctor keyword to show that this is how all objects of the employee class will be structured
    this.name = name;
    this.id = id;
    this.department = department;
    this.salary = salary;
    };

     getDetails() { // logging the properties of the employee class
        console.log(`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`); // Using the this keyword since it is written inside the class being referenced
    }
    calculateAnnualSalary() {
        return this.salary * 12;
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
    
    getDetails() {
        console.log(`Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`);
    } // same as before but I added Team Size 

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1; // I am able to use this. because its a part of the super class
    }
}
let casey = new Manager ("Casey Tomchuk", 101, "Manager", 5000, 10) 
casey.getDetails(); // Expected Output: Manager: Casey Tomchuk, ID: 101, Department: Manager, Salary: 5000, Team Size: 10
console.log(casey.calculateBonus()); // Expected Output: 6000