// let name = "Md. Wazid Ahmed Razi";
// let age = 25;
// let place = "Dhaka"
// let isWorking = false
// let isPractice = "JavaScript"

// console.log("My name is " + name + " Currently living in " + place);
// console.log("currently working " + isWorking + " Learning " + isPractice);


// let fname = "Wazid";
// let lname = "Razi";
// let age = 25;
// let isStudent = true;
// let isUnemployed = true;

// if (age >= 25) {
//     console.log("He should find a job immediately");
// } else {
//     console.log("He can focus on learning");
// }

// console.log("My name is " + fname + " " + lname + ". I am " + age + " years old.");
// console.log("Is he a student? " + isStudent);
// console.log("Is he unemployed? " + isUnemployed);


// let age = 22;
// let isStudent = true;
// if (age < 23 && isStudent)
// {
//     console.log("Can continue Study")
// } else {
//     console.log("Focus on job")
// }


// let wifi = false;
// let mobileData = false;
// if (wifi || mobileData)
// {
//     console.log("Connected")
// } else {
//     console.log("No connection")
// }


// let salary = 28000;
// if (salary >= 40000)
// {
//     console.log ("Excellent salary");
// } else if (salary >= 25000)
// {
//     console.log ("Good salary");
// } else {
//     console.log ("Low salary")
// }



// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//     console.log("Login successful");
// } else if (username === "admin") {
//     console.log("Wrong password");
// } else {
//     console.log("User not found");
// }


// let marks = 35;
// let attendance = 70;

// if ( marks < 40 && attendance < 75) {
//     console.log ("Fail due to low attendance");
// } else if (marks < 40) {
//     console.log ("Fail");
// } else {
//     console.log("Pass")
// }


// for (let i=1 ; i<=5; i++) 
// {
//     console.log(i);
// }


// for (let i=1; i<=50; i+=2)
// {
//     console.log(i);
// }


// for (let marks = 35; marks <= 45; marks++) {
//     if (marks >= 40) {
//         console.log(marks + " pass");
//     } else {
//         console.log(marks + " fail");
//     }
// }


// let marks = 35;

// while (marks <= 45) {
//     if (marks >= 40) {
//         console.log(`${marks} pass`);
//     } else {
//         console.log(`${marks} fail`);
//     }
//     marks++;
// }


// let marks = 50;

// while (marks >= 30) {
//     if (marks >= 40) {
//         console.log(`${marks} pass`);
//     } else {
//         console.log(`${marks} fail`);
//     }
//     marks--;
// }


// for (let i=1; i<=10; i+=2)
// {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i=1; i<=10; i+=2)
// {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }


// let prices = [120, 75, 40, 200, 30];
// for(i=0; i<prices.length; i++)
// {
//     let price = prices[i];
//     if(price >= 120){
//         console.log(price + " - 20% discount");
//     } else if(price >=75){
//         console.log(price + " - 10% Discount");
//     } else{
//         console.log(price + "- No discount");
//     }
// }

// function checkSalary(salary){
//     if(salary >= 40000){
//         return "Excellent";
//     } else if(salary >= 25000){
//         return "Good";
//     }else{
//         return "Low";
//     }
// }

// console.log(checkSalary(28000));
// console.log(checkSalary(50000));


// function checkResult(mark) {
//     if (mark >= 40) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }

// console.log(checkResult(70));


// function checkResult(marks){
//     if(marks >= 40){
//         return "pass";
//     } else{
//         return "fail";
//     }
// }

// let markList = [35,80,25,60];
// for(let i = 0; i<markList.length; i++){
//     console.log(markList[i] + "-" + checkResult(markList[i]));
// }


// const add = (a, b) => a + b;

// console.log(add(5,3));



// const isAdult = age => age >= 18 ? "Adult" : "Minor";

// console.log(isAdult(20));

// const checkResult = marks => marks >= 40 ? "Pass" : "Fail";
// console.log(checkResult(35));
// console.log(checkResult(80));


// const checkSalary = salary => salary >= 40000 ? "Excellent" : salary >= 25000 ? "Good" : "Low";
// console.log (checkSalary(33000));
// console.log (checkSalary(58000));



// let ages = [12, 18, 25, 15];
// let ageLevel = ages.map(age => age >= 18 ? "Adult" : "Minor" );
// console.log (ageLevel);

// let marks = [35, 80, 25, 60];
// let result = marks.map(mark => mark >= 40? "✅ Pass" : "❌ Fail")
// console.log(result);


// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.forEach(fruit => {
//     console.log("I Love" + fruit);
// })


// let salaries = [20000, 30000, 50000];
// salaries.forEach(salary => 
//     console.log(
//         salary + " - " + (salary >= 40000 ? "Excellent" : salary >= 25000 ? "Good" : "Low")
//     )
// );

// let users = [
//     { name: "Rafi", age: 17, salary: 20000 },
//     { name: "Tariq", age: 25, salary: 30000 },
//     { name: "Nabil", age: 30, salary: 50000 },
//     { name: "Sami", age: 22, salary: 18000 }
// ];

// const getSalaryLevel = salary => salary >=40000 ? "Excellent" : salary >=30000 ? "Good" : "Low";

// let userStatus = users.map(user => 
//     `${user.name} - ${user.age >= 18 ? "Adult" : "Minor"} - ${getSalaryLevel(user.salary)}`
// );
// userStatus.forEach(status => {
//     console.log(status);
// });


// let numbers = [1,2,3,4,5,6,7];
// let evenNumber = numbers.filter(number => number % 2 === 0);
// let oddNumber = numbers.filter(number => number % 2 ==! 0)
// console.log(evenNumber);
// console.log(oddNumber);

// let ages =[12,18,25,15,30];
// let newAge = ages.filter(age => age >= 18 );

// newAge.forEach(age => {
//     console.log(age + "- Adult");
// });



// let prices = [120,75,40];
// let totalPrice = prices.reduce((total,price) => total + price, 0 );
// console.log(totalPrice);



// let student = {
//     name : "Wazid Ahmed",
//     marks : 69,
//     isPassed : true
// };
// console.log(`${student.name} scored ${student.marks}. Passed : ${student.isPassed} `);



// let employee = {
//     name : "Sami", salary : 28000, isPermanent : true

// };

// console.log(employee.name + " earns " +  employee.salary);



// let users = [
//     { name : "Razi", age : 25, isUnemployed : true },
//     { name : "Sayan", age : 26, isUnemployed : false },
//     { name : "Naim", age : 24, isUnemployed : true }
// ];

// users.forEach(user => {
//     console.log(`${user.name} is Unemployed : ${user.isUnemployed}`);
// });



// let product = {
//     title : "Laptop",
//     price : 65000,
//     inStock : true
// };
// let {title,price} = product;
// console.log(`${title} costs ${price}`);



// let users = [
//     { name: "Rafi", age: 17, salary: 20000 },
//     { name: "Tariq", age: 25, salary: 30000 },
//     { name: "Nabil", age: 30, salary: 50000 },
//     { name: "Sami", age: 22, salary: 18000 }
// ];

// let filteredUser = users.filter(user => user.salary >= 25000);

// let finalResult = filteredUser.map(user => `${user.name} earns ${user.salary}`)
// finalResult.forEach(text => console.log(text));



// let users = [
//     { name: "Rafi", age: 17, salary: 20000 },
//     { name: "Tariq", age: 25, salary: 30000 },
//     { name: "Nabil", age: 30, salary: 50000 },
//     { name: "Sami", age: 22, salary: 18000 }
// ];

// users
//   .filter(user => user.salary >= 25000)
//   .map(user => `${user.name} earns ${user.salary}`)
//   .forEach(text => console.log(text));


// let users = [
//     { name: "Rafi", age: 17, salary: 20000 },
//     { name: "Tariq", age: 25, salary: 30000 },
//     { name: "Nabil", age: 30, salary: 50000 },
//     { name: "Sami", age: 22, salary: 18000 }
// ];

// let salaryLevel = salary => salary >= 40000 ? "Excellent" : salary >= 25000 ? "Good" : "Low";

// let filteredUser =users.filter(user => user.age >=18);
// let result = filteredUser.map(user => {
//     return `${user.name} - Adult - ${salaryLevel(user.salary)}`;
// });
// result.forEach(text => console.log(text));


// let users = [
//     { name: "Rafi", age: 17, salary: 20000 },
//     { name: "Tariq", age: 25, salary: 30000 },
//     { name: "Nabil", age: 30, salary: 50000 },
//     { name: "Sami", age: 22, salary: 18000 }
// ];

// const salaryLevel = salary => salary >= 40000 ? "Excellent" : salary >= 25000 ? "Good" : "Low";

// users
//     .filter(user => user.age >= 18)
//     .map(user => `${user.name} - Adult - ${salaryLevel(user.salary)}`)
//     .forEach(result => console.log(result));



// let products = [
//     { name: "Laptop", price: 65000, inStock: true },
//     { name: "Mouse", price: 800, inStock: true },
//     { name: "Keyboard", price: 1500, inStock: false },
//     { name: "Monitor", price: 12000, inStock: true }
// ];

// products
//     .filter(product => product.inStock)
//     .filter(product => product.price >= 1000)
//     .map (product => `${product.name} costs ${product.price}`)
//     .forEach(result => console.log(result));



// let employees = [
//     { name: "Rafi", age: 17, salary: 20000 },
//     { name: "Tariq", age: 25, salary: 30000 },
//     { name: "Nabil", age: 30, salary: 50000 },
//     { name: "Sami", age: 22, salary: 18000 }
// ];

// employees
//     .filter(employee => employee.age >= 18)
//     .filter(employee => employee.salary >= 25000)
//     .map(employee => `${employee.name} is ${employee.age} years old earns ${employee.salary}`)
//     .forEach(result => console.log(result));



// let employees = [
//     { name: "Rafi", age: 17, salary: 20000 },
//     { name: "Tariq", age: 25, salary: 30000 },
//     { name: "Nabil", age: 30, salary: 50000 },
//     { name: "Sami", age: 22, salary: 18000 }
// ];

// let salaryLevel = salary => salary >= 40000 ? "Excellent" : salary >= 25000 ? "Good" : "Low";
// employees
//     .filter(employee => employee.age >= 18)
//     .map(employee => `${employee.name} is ${employee.age} years old - ${salaryLevel(employee.salary)}`)
//     .forEach(result => console.log(result));

/*

Spread operator:

*/


// let numbers = [1, 2, 3, 4];
// let copy = [...numbers];
// copy.push(5);
// console.log(numbers);
// console.log(copy);

// let users = ["rahim", "karim", "jodu", "kodu"];
// let newUser = [...users, "modhu"];
// console.log(users);
// console.log(newUser);


// let user = {name : 'wazid', age : 25};
// let updateUser = {...user, age : 26};

// console.log(updateUser);


// let cart = [
//     { name: "Laptop", price: 65000 },
//     { name: "Mouse", price: 800 }
// ];

// let newCart = [...cart,{name : "keyboard", price : 1500}

// ];
// console.log(cart);
// console.log(newCart);

/*

REST Parameter:

*/

// function add(...numbers){
//     let total = 0;
//     for(let num of numbers){
//         total += num;
//     }
//     return total;
// }

// console.log(add(1, 2, 3, 4));
// console.log(add(7, 8, 9));


// function totalSalary(...salaries){
//     let total = 0;
//     for (let salary of salaries){
//         total += salary
//     }
//     return total;
// }
// console.log(totalSalary(25000, 35000, 46000));


// function totalSalary(...salaries){
//     return salaries.reduce((sum, salary) => sum + salary,0 );
// }
// console.log(totalSalary(14000, 26000, 55500));


// function calculateTotal(...prices){
//     return prices.reduce((sum, price) => sum + price,0);
// };
// console.log((calculateTotal(130, 480, 910)));


// function showEmployees(company, ...employees){
//     console.log("Company:",company);
//     employees.forEach(employee => console.log(employee));
// }
// showEmployees("TOTO", "Wazid", "Rahim", "Karim");


// let numbers = [1, 2, 3];
// let copy = [...numbers];
// console.log(numbers);
// console.log(copy);


// let arr1 = [1, 2];
// let arr2 = [3,4];
// let merge = [...arr1,...arr2];
// console.log(merge);


// let user = {name : "Razi", age : 25};
// let newUser = {...user,age : 26};
// console.log(newUser);


// let cart = [
//     { name: "Laptop", price: 65000 },
//     { name: "Mouse", price: 800 }
// ];

// let addCart = [...cart, {name : 'keyboard', price : 1500}];

// console.log (addCart);


// function add(...numbers){
//     return numbers.reduce((sum,n) => sum + n,0);
// }

// console.log(add(3, 5, 7, 9));


// function showEmployees(company,...employees){
//     console.log(company);
//     employees.forEach(employee => console.log(employee));
// }

// showEmployees("techMania" , "Wazid" , "Rahim", "Karim");


// console.log("Start");

// setTimeout(() => {
//     console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");



// console.log("kire");
// setInterval(() => {
//     console.log ("Valo asos?");
// }, 6000);


// console.log("Loading...");
// setTimeout(() => {
//     console.log("Done!");
// }, 3000);



// function getData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 2000);
// }

// getData(result => {
//     console.log(result);
// });



// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Success!");
//     } else {
//         reject("Failed!");
//     }
// });
// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// let promise = new Promise((resolve,reject) =>{
//     let isLoggedIn = true;
//     if(isLoggedIn){
//         resolve("Login Successful");
//     }else{
//         reject("Login failed");
//     }

// });

// async function loginStatus(){
//   try{
//     let data = await promise;
//     console.log(data);
// } catch(error) {
//     console.log(error);
//   }
// }

// loginStatus();

// function fetchData(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve([
//                 {name : "Wazid", age : 25, salary : 45000},
//                 {name : "Karim", age : 23, salary : 23000},
//                 {name : "Rahim", age : 26, salary : 55000},
//             ]);
//         },3000);
//     });
// }

// async function userStatus(){
//     let users = await fetchData();
//     console.log(users);
// }
// userStatus();



// function fetchUsers() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([
//                 { name: "Rafi", age: 17, salary: 20000 },
//                 { name: "Tariq", age: 25, salary: 30000 },
//                 { name: "Nabil", age: 30, salary: 50000 }
//             ]);
//         }, 2000);
//     });
// }

// let salaryLevel = salary =>
//     salary >= 40000 ?  "Excellent" : salary >= 25000? "Good" : "Low";

// async function showUserSummary(){
//     let users = await fetchUsers();

//     users
//         .filter(user => user.age > 18)
//         .map(user =>`${user.name} - ${salaryLevel(user.salary)}`)
//         .forEach(text => console.log(text));
// }

// showUserSummary();




// function fetchUsers() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([
//                 { name: "Rafi", age: 17, salary: 20000 },
//                 { name: "Tariq", age: 25, salary: 30000 },
//                 { name: "Nabil", age: 30, salary: 50000 }
//             ]);
//         }, 2000);
//     });
// }



// async function userStatus(){
//     let users = await fetchUsers();

//     users
//         .filter(user => user.salary >= 30000)
//         .map(user => `${user.name} - ${user.salary}`)
//         .forEach(text => console.log(text));
// }
// userStatus();



// function fetchUsers() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([
//                 { name: "Rafi", age: 17, salary: 20000 },
//                 { name: "Tariq", age: 25, salary: 30000 },
//                 { name: "Nabil", age: 30, salary: 50000 }
//             ]);
//         }, 2000);
//     });
// }

// async function totalSalaryWithChain() {
//     let totalSalary = (await fetchUsers())
//         .filter(user => user.age >= 18 && user.salary >= 25000)
//         .reduce((sum, user) => sum + user.salary, 0);

//     console.log("Total Salary:", totalSalary);
// }

// totalSalaryWithChain();


// function fetchEmployee(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//         resolve([
//             {name : "Wazid", age : 17, salary : 20000},
//             {name : "Tariq", age : 25, salary : 30000},
//             {name : "Wazid", age : 30, salary : 50000}
//         ]);
//        }, 3000); 
//     });
// }

// async function calclulateTotalSalary(){
//     let total = (await fetchEmployee())
//         .filter(emp => emp.age >= 18)
//         .reduce((sum,emp) => sum + emp.salary,0)

//     console.log("Total Salary :", total);
// }

// calclulateTotalSalary();




// function fetchEmployee(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//         resolve([
//             {name : "Wazid", age : 17, salary : 20000},
//             {name : "Tariq", age : 25, salary : 30000},
//             {name : "Wazid", age : 30, salary : 50000}
//         ]);
//        }, 3000); 
//     });
// }

// async function employeeStatus(){
//     let users = await fetchEmployee()
//     users
//         .filter(emp => emp.salary >= 30000)
//         .map(emp => `${emp.name} (${emp.age}) - ${emp.salary}`)
//         .forEach(text => console.log(text));
// }

// employeeStatus();



// function fetchEmployees() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([
//                 { name: "Rafi", age: 19, salary: 22000 },
//                 { name: "Tariq", age: 26, salary: 42000 },
//                 { name: "Nabil", age: 31, salary: 55000 },
//                 { name: "Sami", age: 20, salary: 18000 }
//             ]);
//         }, 2000);
//     });
// }

// let salaryLevel =
//     salary => salary >= 40000? "Bonus Eligible" : "No Bonus";

// async function employeeStatus() {
//     (await fetchEmployees())
//         .filter(emp => emp.age >= 21)
//         .map(emp => `${emp.name} (${emp.age}) - ${emp.salary} - ${salaryLevel(emp.salary)}`)
//         .forEach(text => console.log(text));
// }

// employeeStatus();



// function getMessage(){
//     return new Promise((resolve, reject) => {
//         reject("Something went wrong");
//     });
// }

// async function showMessage(){
//     try {
//         let result = await getMessage();
//         console.log(result);
//     } catch (error) {
//         console.log("Handled:", error);
//     }
// }

// showMessage();



// function fetchData(){
//     return new Promise((resolve,reject)=> {
//        let isSuccess = false;
//         if (isSuccess){
//             resolve("Data Loaded");
//         }else{
//             reject("Failed to load data");
//         }
//     });
// }

// async function loadData(){
//     try{
//         let result = await fetchData();
//         console.log(result);
//     } catch(error){
//         console.log("Handled:",error);
//     }
// }

// loadData();



// function fetchNumbers(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([10,20,30,40]);
//         }, 2000);
//     });
// }

// async function showNumbers(){
//     try{
//         let numbers = await fetchNumbers();
//             numbers
//                 .filter(num => num >= 20)
//                 .forEach(num => console.log(num));
//     }catch(error) {
//         console.log("Error Handled", error);
//     }
// }
// showNumbers();


function orderFood() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Food delivered 🍔");
        }, 2000);
    });
}

async function eatFood() {
    console.log("Ordering food...");
    let food = await orderFood();
    console.log(food);
    console.log("Eating food 😋");
}

eatFood();
