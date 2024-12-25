let temperature = 30;
if (temperature >= 35) {
  console.log("the Weather is : Very Hot");
} else if (temperature >= 25 && temperature < 35) {
  console.log("the Weather is : Warn");
} else if (temperature >= 15 && temperature < 25) {
  console.log("the Weather is : Moderate");
} else if (temperature >= 5 && temperature < 15) {
  console.log("the Weather is : Cold");
} else {
  console.log("the Weather is :Vrery Cold");
}

let stageAge = 18;
if (stageAge >= 1 && stageAge <= 5) {
  console.log("pre-School Stage");
} else if (stageAge >= 5 && stageAge <= 8) {
  console.log("primary School Stage");
} else if (stageAge >= 9 && stageAge <= 12) {
  console.log("per-Adolescent Stage");
} else if (stageAge >= 13 && stageAge <= 15) {
  console.log("the Beginning of Adolesscent");
} else if (stageAge >= 16 && stageAge <= 19) {
  console.log("adolescerce Stage");
} else if (stageAge >= 20 && stageAge <= 29) {
  console.log("youth Stage");
} else if (stageAge >= 30 && stageAge <= 39) {
  console.log("maturity Stage");
} else if (stageAge >= 40 && stageAge <= 59) {
  console.log("middle Age Stage");
} else if (stageAge >= 60 && stageAge <= 74) {
  console.log("the Elderly");
} else if (stageAge >= 75) {
  console.log("aging Stage");
} else {
  console.log("please Enter a Stage Age");
}


let numberOne = 10;
let op = "*";
let numberTwo = 70;
let numberThree = 80;

if (op == "+") {
  console.log(numberOne + numberTwo);
} else if (op == "-") {
  console.log(numberOne - numberTwo);
} else if (op == "*") {
  console.log(numberOne * numberTwo);
} else if (op == "/") {
  console.log(numberOne / numberTwo);
} else if (op == "%") {
  console.log(numberTwo % numberThree);
} else if (op == "**") {
  console.log(numberOne ** numberTwo);
} else {
  console.log("Please Try Again!");
}



let days = "Sunday";
switch (days) {
  case "Sunday":
    console.log("Sunday");
    break;
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuseday");
    break;
  case "Wednesday":
    console.log("Wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  case "Saturday":
    console.log("Saturday");
    break;
  default:
    console.timeLog("Not Righteous");
}

let adcCompany;
let employees;

let employee1 = {
  id: 103,
  firstName: "Wedad",
  lastName: "Osama",
  age: 24,
  gender: "Fale",
  position: "Software Engineer",
  department: "IT",
  salary: 15000,
  address: "10 st cairo",
  phone: "010437878756576",
  isPermanent: true,
  isManager: false,
  email: " welkamash@abccompany.com",
  password: "password1234",
  hireDate: "2020-05-15",
  employeeID: "EMP101",
};
let employee2 = {
  id: 104,
  firstName: "Norhan",
  lastName: "Abod",
  age: 22,
  gender: "Fmale",
  position: "Software Engineer",
  department: "IT",
  salary: 20000,
  address: "20 st cairo",
  phone: "01012345678",
  isPermanent: true,
  isManager: false,
  email: " norhanabod@abccompany.com",
  password: "password1567",
  hireDate: "2023-5-15",
  employeeID: "EMP102",
};
let employee3 = {
  id: 101,
  firstName: "Dina",
  lastName: "Ahemd",
  age: 21,
  gender: "Fmale",
  position: "Software Engineer",
  department: "IT",
  salary: 25000,
  address: "10 st cairo",
  phone: "010876545445",
  isPermanent: true,
  isManager: false,
  email: " dinaahmed@abccompany.com",
  password: "password789",
  hireDate: "2020-1-1",
  employeeID: "EMP103",
};
console.log(employee1.id);
