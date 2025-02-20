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
        return this.salary * 12 // multiplies the monthly salary by 12, this would be useable in  later use cases since it doesnt log inside the method
    }
}

let elise = new Employee ("Elise Norman", 110, "Advertising", 4000) // Creating a new employee object using the employee class
elise.getDetails(); // Expected output: Employee: Elise Norman, ID: 110, Department: Advertising, Salary: 4000
console.log(elise.calculateAnnualSalary()); // Expected output: 48000 || I chose to do this with console.log() so that I could make calculateAnnualSalary faster to write