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
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();
let empDailyHrsAndWageArray = new Array();

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

let day = 0;
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkigDays < MAX_WORKING_DAYS) {
    totalWorkigDays++;
    day++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(employeeCheck);
    totalEmpHrs += empHrs;
    let dailyWage = calculateWage(empHrs)
    empDailyWageArray.push(dailyWage);
    empDailyWageMap.set(totalWorkigDays, dailyWage);
    empDailyHoursMap.set(totalWorkigDays, empHrs);
    //UC10 creating object and passing the values
    let empWageObject = {
        dayNumber: day,
        dailyHrs: empHrs,
        dailyWage: dailyWage
    }
    empDailyHrsAndWageArray.push(empWageObject);
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

// UC 7B Showing Day and DailyWage Using MAP helper function

let counter = 0;


function dayAndDailyWageMap(dailyWage) {
    counter++;
    return "Day" + counter + " -> " + dailyWage;
}


let dayAndDailyWageMapArray = new Array();
dayAndDailyWageMapArray = empDailyWageArray.map(dayAndDailyWageMap);
console.log("\nUsing Map Printing Day with DailyWage.\n");
console.log(dayAndDailyWageMapArray);

/* UC 7C Showing/Storing  Only Full Time Wage =160 Earned Days in Array 
* using Filter function/Method
*/

function fullTimeWageDay(dailyWage) {
    return dailyWage.includes("160");
}


let fullTimeWageArray = dayAndDailyWageMapArray.filter(fullTimeWageDay);
console.log("\nUsing Filter Storing Only FullTimewage into Array\n");
console.log(fullTimeWageArray);

//UC 7D  Finding first of Full Time Wage in Array using Find function

let fullTimeWageFirstOccurance = dayAndDailyWageMapArray.find(fullTimeWageDay);
// let fullTimeWageFirstOccurance = fullTimeWageArry.find(fullTimeWageDay);
console.log("\nfirst Occurence of Full Time Wage(160) 0n :\n");
console.log(fullTimeWageFirstOccurance);

// UC 7E Checking UC7C result Array Full time Wage Array , truly Holds Full timewage
// Using Every function

console.log("Is fulltimeWageArray truely holds fulltime Wage: " + fullTimeWageArray.every(fullTimeWageDay));



/*
 UC 7F Check for PartTime Wage in empWageDaily Array and Performing All other opertions too
 */

function partTimeWageDay(dailyWage) {
    return dailyWage.includes("80");
}


console.log("Checking for parttimeWage(80) in map Array Present or not:\n" + dayAndDailyWageMapArray.some(partTimeWageDay));

// Storing only partTimeWage days in parttimeWagearray using Filter
let partTimeWageArray = dayAndDailyWageMapArray.filter(partTimeWageDay);
console.log("Part timeWage Days:\n" + partTimeWageArray);

// checking parttimeWageArray truly holds Parttime totalWages
console.log("Is parttimeWageArray truely holds Parttime Wage: " + partTimeWageArray.every(partTimeWageDay));
let partTimeWageFirstOccurance = dayAndDailyWageMapArray.find(partTimeWageDay);

// let partTimeWageFirstOccurance = partTimeWageArry.find(fullTimeWageDay);
console.log("\nfirst Occurence of Part Time Wage(80) 0n :");
console.log(partTimeWageFirstOccurance);

/* 
* UC 7GFinding the Number of Days Employee Worked out Of 20Days
*/


function totalFullTimeWorked(numOfFullTimeDays, dailyWage) {
    if (dailyWage == 160)
        return numOfFullTimeDays + 1;
    return numOfFullTimeDays;
}


function totalPartTimesWorked(numOfPartTimeDays, dailyWage) {
    if (dailyWage == 80)
        return numOfPartTimeDays + 1;
    return numOfPartTimeDays;
}


let partTimeWorkedDays = empDailyWageArray.reduce(totalFullTimeWorked, 0);
console.log("Employee Worked Part time for " + partTimeWorkedDays + " Days");
let fullTimeWorkedDays = empDailyWageArray.reduce(totalPartTimesWorked, 0);
console.log("Employee Worked Full time for " + fullTimeWorkedDays + " Days");
let totalDaysWorked = fullTimeWorkedDays + partTimeWorkedDays;
console.log("Employee Total Worked  for " + totalDaysWorked + " Days\n");

/*
* UC8 storing Day , DailyWage along With Total Wage in a Map
*/

console.log("Employee Wage Map Contains:" + empDailyWageMap);
let totalSum = 0;
for (let [key, value] of empDailyWageMap) {
    console.log(key + " = " + value);
    totalSum += value;
}
console.log(totalSum);

/* 
* UC9_A calculate totalWage and total hours worked using arraow function 
*/

let findTotal = (totalVal, currentVal) => {
    return totalVal + currentVal;
}

console.log("Employee Daily Hours map")
console.log(empDailyHoursMap);
console.log(Array.from(empDailyHoursMap.values()).reduce(findTotal, 0));

console.log("Employee Daily Wage map")
console.log(empDailyWageMap);
console.log(Array.from(empDailyWageMap.values()).reduce(findTotal, 0));

/* 
* UC9_B Showing FullWorking days , Part working days and No working Days
*/

let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();

empDailyHoursMap.forEach((value, key) => {
    if (value == 8)
        fullTimeWorkingDays.push(key);
    else if (value == 4) {
        partTimeWorkingDays.push(key);
    }
    else
        nonWorkingDays.push(key);
});

console.log("Full Working Days : " + fullTimeWorkingDays);
console.log("Total Full Time Workig Days: " + fullTimeWorkingDays.length)
console.log("Part Working Days : " + partTimeWorkingDays);
console.log("Total Part Time Workig Days: " + partTimeWorkingDays.length)
console.log("Non Working Days : " + nonWorkingDays);
console.log("Total Non Workig Days: " + nonWorkingDays.length)

/*
* UC10 Storing Day,Hours Worked and Wage Earned in object
* object Create in while loop and storing into Array 
*/
console.log("creating, Displaying The Object Stored in Array")
console.log( empDailyHrsAndWageArray);