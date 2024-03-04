// function  Person(p_name, p_age){
//     this.name = p_name
//     this.age = p_age
// this.greet =function (){
//     console.log("Hi " + this.name);
// }
// }

// let person1 = new Person("Ramesh", 34)
// let person2 = new Person("Suresh", 34)
// let person3 = new Person("Bikash", 34)
// person1.greet()

//getter method
// let student = {
//     name: "Ramesh",
//     age: 23,

//     get result(){
//         return this.name
//     },

//     set setName(value){
//         this.name = value
//     }
// }
// console.log(student.result);
// student.setName = "Bikram"
// console.log(student)

//Define properties

// let person  = {
//     name: "Shyam",
//     address: "Ktm"
// }
// Object.defineProperty(person,"netName",){
//     get: function(){
//         return this.name
//     }
// }
// console.log(person.netName);

//Prototype Inheritance

// function Student() {
// name: "Ramesh";
// age: 34 ;
// }Student.prototype.greet = function(){

// console.log((`Hi! ${this.name}`));
// let num =15
// if (num % 2 === 0){
//     console.log("Even Number");

// }
// else{
//     console.log("Odd Number");
// }

// let age = 25
// let result = age >= 18 ? "adult" : "not adult"
//     console.log(result);

// let num = prompt("Enter a number");

// if (num % 5 === 0) {
//   console.log(num, "Divisible by 5");
// } else {
//   console.log(num, "Not Divisible by 5");
// }

// let a =prompt("Enter a number");
// a = Number.parseInt(a)
// console.log(typeof a);
// if(marks >= 90 && marks<= 100){
//     console.log(marks, "is A");
// }
// else if(marks >= 70 && marks<= 89){
//     console.log(marks, "is B");
// }
// else if(marks >= 60 && marks<= 69){
//     console.log(marks, "is C");
// }
// else if(marks >= 50 && marks<= 59){
//     console.log(marks, "is D");}
//     else{
//         console.log(marks, "is F");
//     }

// let cn = 90;

// let gameNum = prompt("Enter a number");
// gameNum = Number.parseInt(gameNum);
// console.log(typeof gameNum)

// while (gameNum != cn) {
//   gameNum = prompt("Enter a number here");
// }
// console.log("You have entered a correct Number");

// let fullName = prompt("Enter your name")
// let userName = "@"
// console.log(userName.concat(fullName, fullName.length));

// let items = [250, 645, 300, 900, 50]
// let i = 0
// for(let val of items){
// let offer = val / 10
// items[i] = items[i] -offer
// console.log(`value after offer = ${items[i]}`);
// i++
// }

let item = [250, 645, 300, 900, 50];
let i = 0;
for (let pet of item) {
  let offers = pet / 10;
  item[i] = item[i] - offers;
  i++;
  console.log(`value after offer  ${item[i]}`);
}
