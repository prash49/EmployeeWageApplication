console.log("...Welcome to Employee Wage...");
const IS_PRESENT = 1;
let employeeCheck = Math.floor(Math.random() * 10 % 2);
if (employeeCheck == IS_PRESENT) {
    console.log("Employee Is Present");
} else
    console.log("Employee Is Absent");