console.log("...Welcome to Employee Wage...");
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const MAX_WORKING_DAYS = 20;

function getWorkingHrs(employeeCheck) {
    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
for (let day = 1; day <= MAX_WORKING_DAYS; day++) {
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let emphrs = getWorkingHrs(employeeCheck);
    totalEmpHrs += emphrs;

}

let totalEmpWage = totalEmpHrs * WAGE_PER_HR;
console.log(" Total Employee Wage is: " + totalEmpWage + " for Total Employee Work Hours: " + totalEmpHrs);
