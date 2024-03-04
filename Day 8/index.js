//set array

// let mySet = new Set(["a", "b", "c"]);
// console.log(mySet);

// mySet.add("d");
// console.log(mySet.size);

// console.log(mySet.values());
// console.log(mySet.keys());
// let str = "";
// for (let value of mySet.values()) {
//   str = str + value + "<br>";
// }
// console.log(...mySet);

// entries method
// let myset = new Set();

// Today's Class Topic
// Set Array
// Weakset
// Destrucuring Assignment Array
// Swaping Values

// Destrucuring Assignment Array
// let person = {
//   name: "Anish",
//   age: 26,
//   address: "Kirtipur",
// };
// let { name, age, address } = person;
// console.log(name, age, address);

// let person = {
//   name: "Anish",
//   age: 26,
//   address: "Kirtipur",
// };

// let { name: a, age: b, address: c } = person;
// console.log(a, b, c);

// Swaping Values
// let x = 10;
// let y = 20;

// [x, y] = [y, x];
// console.log("value of x = ", x);
// console.log("value of y = ", y);

// let values = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// };
// let { a, ...rest } = values;
// console.log(a, rest);

// // Nested

// let person = {
//   name: "Anish",
//   age: 26,
//   address: {
//     city: "Kirtipur",
//     country: "Nepal",
//   },
// };

// let {
//   name,
//   age,
//   address: { city, country },
// } = person;

// console.log(city);

// Constructor Function

// Classes
// function person(){
//     this.name= name
//     this.age = age
// }

// let num = [98, 99, 94, 96, 97, 92, 94];
// let rate = num.sort((a, b) => {
//   return a - b;
// });
// console.log(rate);

function checker(message) {
  let count = 0;
  for (const chat of message) {
    if (
      chat === "a" ||
      chat === "e" ||
      chat === "i" ||
      chat === "0" ||
      chat === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(checker("aeiou"));
