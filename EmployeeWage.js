console.log("...Welcome to Employee Wage...");
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let empDailyWageArray = new Array();
let totalEmpHrs = 0;
let totalWorkigDays = 0;

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


while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkigDays < MAX_WORKING_DAYS) {
    totalWorkigDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(employeeCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateWage(empHrs));
}
function calculateWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}
let empWage = totalEmpHrs * WAGE_PER_HR;
console.log("Daily Employee Wage stored in Array:\n" + empDailyWageArray);
console.log(" Total Employee Wage is: " + empWage + "\n for Total Employee Work Hours: " + totalEmpHrs
    + "\n Total Working Days: " + totalWorkigDays);

// UC 7A For Each Method
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("\nUsing ForEach Loop, Total Wage: " + totalEmpWage);

// UC 7A using Reduce Method
let totalEmpWages = 0;
function totalWages(totalEmpWages, dailyWage) {
    return totalEmpWages + dailyWage;
}
let totalEmpWageUsingReduce = empDailyWageArray.reduce(totalWages, 0);
console.log("\nUsing Reduce Method, Total Wage: " + totalEmpWageUsingReduce);