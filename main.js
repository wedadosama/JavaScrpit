// let temperature = 30;
// if (temperature >= 35) {
//   console.log("the Weather is : Very Hot");
// } else if (temperature >= 25 && temperature < 35) {
//   console.log("the Weather is : Warn");
// } else if (temperature >= 15 && temperature < 25) {
//   console.log("the Weather is : Moderate");
// } else if (temperature >= 5 && temperature < 15) {
//   console.log("the Weather is : Cold");
// } else {
//   console.log("the Weather is :Vrery Cold");
// }

// let stageAge = 18;
// if (stageAge >= 1 && stageAge <= 5) {
//   console.log("pre-School Stage");
// } else if (stageAge >= 5 && stageAge <= 8) {
//   console.log("primary School Stage");
// } else if (stageAge >= 9 && stageAge <= 12) {
//   console.log("per-Adolescent Stage");
// } else if (stageAge >= 13 && stageAge <= 15) {
//   console.log("the Beginning of Adolesscent");
// } else if (stageAge >= 16 && stageAge <= 19) {
//   console.log("adolescerce Stage");
// } else if (stageAge >= 20 && stageAge <= 29) {
//   console.log("youth Stage");
// } else if (stageAge >= 30 && stageAge <= 39) {
//   console.log("maturity Stage");
// } else if (stageAge >= 40 && stageAge <= 59) {
//   console.log("middle Age Stage");
// } else if (stageAge >= 60 && stageAge <= 74) {
//   console.log("the Elderly");
// } else if (stageAge >= 75) {
//   console.log("aging Stage");
// } else {
//   console.log("please Enter a Stage Age");
// }

// let numberOne = 10;
// let op= "*";
// let numberTwo = 70;
// let numberThree = 80;

// if (op == "+") {
//   console.log(numberOne + numberTwo);
// } else if (op == "-") {
//   console.log(numberOne - numberTwo);
// } else if (op == "*") {
//   console.log(numberOne * numberTwo);
// } else if (op == "/") {
//   console.log(numberOne / numberTwo);
// } else if (op == "%") {
//   console.log(numberTwo % numberThree);
// } else if (op == "**") {
//   console.log(numberOne ** numberTwo);
// } else {
//   console.log("Please Try Again!");
// }

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

/*Math.abs(-25); ايجاد القيمه المطلقه */
console.log(Math.abs(-25));
/*Math.ceil(3.7); تقريب الرقم لي اعلي*/
console.log(Math.ceil(3.7));
/*Math.floor(9.9);  تقريب الرقم لي اسفل*/
console.log(Math.floor(9.9));
/* Math.round(6.5); تقريب الرقم لاقرب عدد صحيح*/
console.log(Math.round(6.5));
/*Math.sqrt(36); حساب الجذر التربيعي */
console.log(Math.sqrt(36));
/*Math.pow(5, 3); حساب القوه (الاس)*/
console.log(Math.pow(5, 3));
/*Math.random(); */
console.log(Math.random());
/**Math.max(15, 25);
Math.min(10, 5);
ايجاد القيمه الكبري والصغري */
console.log(Math.max(15, 25));
console.log(Math.min(10, 5));
/**Math.log(100); 9.	حساب اللوغاريتم الطبيعي */
console.log(Math.log(100));
/*Math.sin(Math.toRadians(90));
Math.cos(Math.toRadians(45));
Math.tan(Math.toRadians(60));
حساب الجا والجاتا والظا sin,cos,tan

// function convertToLowerCase(string){
//   let newString ="";
//   for (let i = 0; i < string.length; i++){
//     if (string[i] == "A"){
//       newString += string[i] = "a";
//     } else if (string[i] == "B"){
//       newString += string[i] = "b";
//     } else if (string[i] == "C"){
//       newString += string[i] = "c";
//     }else if (string[i] == "D"){
//       newString += string[i] = "d";
//     }else if (string[i] == "E"){
//       newString += string[i] = "e";
//     }else if (string[i] == "F"){
//       newString += string[i] = "f";
//     }else if (string[i] == "G"){
//       newString += string[i] = "g";
//     }else if (string[i] == "H"){
//       newString += string[i] = "h";
//     }else if (string[i] == "I"){
//       newString += string[i] = "i";
//     }else if (string[i] == "J"){
//       newString += string[i] = "j";
//     }else if (string[i] == "K"){
//       newString += string[i] = "k";
//     }else if (string[i] == "L"){
//       newString += string[i] = "l";
//     }else if (string[i] == "M"){
//       newString += string[i] = "m";
//     }else if (string[i] == "N"){
//       newString += string[i] = "n";
//     }else if (string[i] == "O"){
//       newString += string[i] = "o";
//     }else if (string[i] == "P"){
//       newString += string[i] = "p";
//     }else if (string[i] == "Q"){
//       newString += string[i] = "q";
//     }else if (string[i] == "R"){
//       newString += string[i] = "r";
//     }else if (string[i] == "S"){
//       newString += string[i] = "s";
//     }else if (string[i] == "T"){
//       newString += string[i] = "t";
//     }else if (string[i] == "U"){
//       newString += string[i] = "u";
//     }else if (string[i] == "V"){
//       newString += string[i] = "v";
//     }else if (string[i] == "W"){
//       newString += string[i] = "w";
//     }else if (string[i] == "X"){
//       newString += string[i] = "x";
//     }else if (string[i] == "Y"){
//       newString += string[i] = "y";
//     }else if (string[i] == "Z"){
//       newString += string[i] = "z";
//     }

//   }
//   console.log(newString);
// }

// convertToLowerCase("WEDAD");
// convertToLowerCase("WEDA");
// convertToLowerCase("WED");
// convertToLowerCase("WE");
// convertToLowerCase("W");

// function convertToLowerCase(string){
//   let newString ="";
//   for (let i = 0; i < string.length; i++){
//     switch(string[i]){
//       case "A":
//         newString += "a"
//         break;
//         case "A":
//           newString += "a"
//           break; case "B":
//           newString += "b"
//           break; case "C":
//           newString += "c"
//           break; case "D":
//           newString += "d"
//           break; case "E":
//           newString += "e"
//           break; case "F":
//           newString += "f"
//           break; case "G":
//           newString += "g"
//           break; case "H":
//           newString += "h"
//           break; case "I":
//           newString += "i"
//           break; case "J":
//           newString += "j"
//           break; case "K":
//           newString += "k"
//           break; case "L":
//           newString += "l"
//           break; case "M":
//           newString += "m"
//           break; case "N":
//           newString += "n"
//           break; case "O":
//           newString += "o"
//           break; case "P":
//           newString += "p"
//           break; case "Q":
//           newString += "q"
//           break; case "R":
//           newString += "r"
//           break; case "S":
//           newString += "s"
//           break; case "T":
//           newString += "t"
//           break; case "U":
//           newString += "u"
//           break; case "V":
//           newString += "v"
//           break; case "W":
//           newString += "w"
//           break; case "X":
//           newString += "x"
//           break; case "Y":
//           newString += "y"
//           break; case "Z":
//           newString += "z"
//           break;
//     }
//   }
//   console.log(newString);
//   }
//   convertToLowerCase("HAPPY NEW YEAR");
//
// let carBrands = ["toyota", "mercedes", "nissan", "lexus","chevrolet", "GMC"];

// let brandOptions = ``;
// for (let i = 0; i < carBrands.length; i++) {
//   brandOptions += `<option>${carBrands[i]}</option>`;
// }
// document.getElementById("carBrand").innerHTML = brandOptions;
// let carModels = ["2020", "2021", "2022", "2023", "2024", "2025"];

// let modelOptions = ``;
// for (let i = 0; i < carModels.length; i++) {
//   modelOptions += `<option>${carModels[i]}</option>`;
// }
// document.getElementById("carModel").innerHTML = modelOptions;
// console.log(carBrands);
// document.getElementById("switch").onclick = () => {
//   if (document.body.getAttribute("class")) {
//     document.body.classList.remove("dark-theme");
//   } else {
//     document.body.classList.add("dark-theme");
//   }
// };
// fetch("https://fakestoreapi.com/docs", {
//   method: "PUT",
//   body:JSON.stringify({
//     title:""

//   }),
// })
// .then((res)=> res.json())
// .then((json)=> console.log(json));

// fetch('https://fakestoreapi.com/products/7',{
//   method:"PUT",
//   body:JSON.stringify(
//       {
//           title: 'test product',
//           price: 13.5,
//           description: 'lorem ipsum set',
//           image: 'https://i.pravatar.cc',
//           category: 'electronic'
//       }
//   ),
// })
//   .then(res=>res.json())
//  let products ="";
// fetch('https://fakestoreapi.com/carts',{
//   method:"POST",
//   body:JSON.stringify(
//       {
//           userId:5,
//           date:"2020-02-03",
//           products:[{productId:5,quantity:1},{productId:1,quantity:5}]
//       }
//   )
// })
//   .then(res=>res.json())
//   .then(json=>console.log(json));
//   console.log(products)
// let products ="";
// fetch('https://fakestoreapi.com/products')
//             .then((res)=>res.json())
//             .then((json)=>{
//               for (let i =0; i < json.length;i++){
//                 products+= `
//                 <img src= ${json[i].image}>
//                 <span> ${json[i].title}<span>
//                 <p>${json[i].description}</p>
//                  <h4>${json[i].price}</h4>
//                  <p>${json[i].rating}</p>
//                 `;
//               }
//               document.getElementById("pro").innerHTML = products;
//               console.log(products);
//             });

// let number = 12;
// for (let i = 1; i <= 12; i++) {
//     console.log(number + " × " + i + " = " + (number * i));
// }

// for (let i = 1; i <= 144; i++) {
//   let num1 = ((i - 1) % 12) + 1;
//   let num2 = Math.floor((i - 1) / 12) + 1;
//   console.log(num1 + " × " + num2 + " = " + num1 * num2);
// }

// function convertToString(number){
//   return number.toString();
// }
// console.log(convertToString(143.88))
// let tasks = [];

// function renderTasks() {
//   const taskContainer = document.getElementById("tasks");
//   taskContainer.innerHTML = "";
//   tasks.forEach((task, index) => {
//     taskContainer.innerHTML += `
//         <div class="task">
//             <p>${task}</p>
//             <div>
//                 <button onclick="deleteTask(${index})">حذف</button>
//             </div>
//         </div>`;
//   });
// }

// document.getElementById("add-task-btn").onclick = () => {
//   let taskInput = document.getElementById("task-input").value;
//   if (taskInput.trim() === "") return;

//   tasks.push(taskInput);
//   document.getElementById("task-input").value = "";
//   renderTasks();
// };

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   renderTasks();
// }
// //**Number()بتحول القيمه اللي رقم */
// function numberOne(value) {
//   let num = parseFloat(value);
//   return isNaN(num) ? NaN : num;
// }
// console.log(numberOne("145"));
// console.log(numberOne("wedad"));

// //** to string*/
// function numberToString(number) {
//   return number + "";
// }
// console.log(numberToString(400));
// //**to fixed  */
// function myFixedTO(num, afterPoint) {
//   return num.toFixed(afterPoint);
// }
// console.log(myFixedTO(55.7677, 3));
// //**math.max*/
// function myMax(a, w) {
//   return a > w ? a : w;
// }
// console.log(myMax(16, 89));
// //**Math.min() */
// function myMin(s, t) {
//   return s < t ? s : t;
// }
// console.log(myMin(15, 5));
// //**push */
// let numbers = [1, 2, 3, 4];
// numbers[numbers.length] = 5;
// console.log(numbers);

// // let number = [1, 2, 3, 4];
// // number [number.length=number.length]-1 ;
// // console.log(number);
// // let num =[1,2,3,4,5,6]
// // function removeNumber(array,index){
// // for (let i = 0; i < array.length; i++) {
// //   if(array[i]===index)

// // }

// /**
//  *
//  * @param {...string} strings
//  * @returns {string}
//  */

//  function concat ( ...Strings){
//   let result ="";
//   for( let i =0; i < Strings.length;i++){
//     result+=Strings[i];
//   }
//   return result;
//  }

//  console.log(concat ("wedad" ,"osama", "elkammash"));

// /**

//  * @param {string} String
//  * @returns {string}
//  *
//  * @example
// //   النتيجة: "wedad"
//  * console.log(trimString("     wedad     "));
//  */

// function trimString(string) {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== " ") {
//       newString += string[i];
//     }
//   }
//   return newString;
// }
// console.log(trimString("wedad      "));

// function stringTrimStart(string) {
//   let newString = "";
//   let isTrue = false;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === " " && isTrue === false) {
//       continue;
//     } else {
//       newString += string[i];
//     }
//   }
//   return newString;
// }
// console.log(stringTrimStart("         Hello        "));

// function stringTrimEnd(string) {
//   let lastIndex = string.length - 1;
//   while (lastIndex >= 0 && string[lastIndex] === " ") {
//     lastIndex--;
//   }
//   let newString = "";
//   for (let i = 0; i <= lastIndex; i++) {
//     newString += string[i];
//   }
//   return newString;
// }
// console.log(stringTrimEnd("      Dina      "));

// function convertToLowerCase(string){
//   let newString ="";
//   for (let i = 0; i < string.length; i++){
//     if (string[i] == "A"){
//       newString += string[i] = "a";
//     } else if (string[i] == "B"){
//       newString += string[i] = "b";
//     } else if (string[i] == "C"){
//       newString += string[i] = "c";
//     }else if (string[i] == "D"){
//       newString += string[i] = "d";
//     }else if (string[i] == "E"){
//       newString += string[i] = "e";
//     }else if (string[i] == "F"){
//       newString += string[i] = "f";
//     }else if (string[i] == "G"){
//       newString += string[i] = "g";
//     }else if (string[i] == "H"){
//       newString += string[i] = "h";
//     }else if (string[i] == "I"){
//       newString += string[i] = "i";
//     }else if (string[i] == "J"){
//       newString += string[i] = "j";
//     }else if (string[i] == "K"){
//       newString += string[i] = "k";
//     }else if (string[i] == "L"){
//       newString += string[i] = "l";
//     }else if (string[i] == "M"){
//       newString += string[i] = "m";
//     }else if (string[i] == "N"){
//       newString += string[i] = "n";
//     }else if (string[i] == "O"){
//       newString += string[i] = "o";
//     }else if (string[i] == "P"){
//       newString += string[i] = "p";
//     }else if (string[i] == "Q"){
//       newString += string[i] = "q";
//     }else if (string[i] == "R"){
//       newString += string[i] = "r";
//     }else if (string[i] == "S"){
//       newString += string[i] = "s";
//     }else if (string[i] == "T"){
//       newString += string[i] = "t";
//     }else if (string[i] == "U"){
//       newString += string[i] = "u";
//     }else if (string[i] == "V"){
//       newString += string[i] = "v";
//     }else if (string[i] == "W"){
//       newString += string[i] = "w";
//     }else if (string[i] == "X"){
//       newString += string[i] = "x";
//     }else if (string[i] == "Y"){
//       newString += string[i] = "y";
//     }else if (string[i] == "Z"){
//       newString += string[i] = "z";
//     }

//   }
//   console.log(newString);
// }

// convertToLowerCase("WEDAD");

// function convertToUpperCase(string) {
//   let newString = "";

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == "a") {
//       newString += "A";
//     } else if (string[i] == "b") {
//       newString += "B";
//     } else if (string[i] == "c") {
//       newString += "C";
//     } else if (string[i] == "d") {
//       newString += "D";
//     } else if (string[i] == "e") {
//       newString += "E";
//     } else if (string[i] == "f") {
//       newString += "F";
//     } else if (string[i] == "g") {
//       newString += "G";
//     } else if (string[i] == "h") {
//       newString += "H";
//     } else if (string[i] == "i") {
//       newString += "I";
//     } else if (string[i] == "j") {
//       newString += "J";
//     } else if (string[i] == "k") {
//       newString += "K";
//     } else if (string[i] == "l") {
//       newString += "L";
//     } else if (string[i] == "m") {
//       newString += "M";
//     } else if (string[i] == "n") {
//       newString += "N";
//     } else if (string[i] == "o") {
//       newString += "O";
//     } else if (string[i] == "p") {
//       newString += "P";
//     } else if (string[i] == "q") {
//       newString += "Q";
//     } else if (string[i] == "r") {
//       newString += "R";
//     } else if (string[i] == "s") {
//       newString += "S";
//     } else if (string[i] == "t") {
//       newString += "T";
//     } else if (string[i] == "u") {
//       newString += "U";
//     } else if (string[i] == "v") {
//       newString += "V";
//     } else if (string[i] == "w") {
//       newString += "W";
//     } else if (string[i] == "x") {
//       newString += "X";
//     } else if (string[i] == "y") {
//       newString += "Y";
//     } else if (string[i] == "z") {
//       newString += "Z";
//     } else {
//     } else {
//       newString += string[i];
//     }
//   }

//   console.log(newString);
// }

// convertToUpperCase("wedad");

// //** pop() */

// let arr = [10, 20, 30, 40];
// let lastString = arr[arr.length - 1];
// arr.length--;
// console.log(arr);

// 1. document.getElementById
console.log(document.getElementById("title"));
// 2. document.getElementsByTagName
console.log(document.getElementsByTagName("p"));
// 3. document.getElementsByClassName
console.log(document.getElementsByClassName("paragraph"));
// 4. document.querySelector
console.log(document.querySelector("paragraph"));

// 5. document.querySelectorAll
console.log(document.querySelectorAll("paragraph"));
// 6. document.createElement
let newDiv = document.createElement("div");
newDiv.innerText = "wedad osama elkammash";
document.body.appendChild(newDiv);
// 7. document.createAttribute
let Attribute = document.createAttribute("title");
Attribute.value = "main-title";
newDiv.setAttributeNode(Attribute);

// 8. document.createTextNode
let textNode = document.createTextNode("This is a text node");
newDiv.appendChild(textNode);

 // 9. document.createComment
 let comment = document.createComment("This is a comment");
 document.body.appendChild(comment);
 
 // 10. document.links
 console.log(document.links);
 