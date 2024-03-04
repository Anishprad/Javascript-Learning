// let numbers = [1, 2, 3, 4, 5, 6];
// let path = (a, b, c) => {
//   return a + b + c;
// };
// console.log(path(...numbers));

//map

// let person = new Map()

// person.set("name", "Anish")
// console.log(person);

// let person = new Map();

// person.set("name", {
//   Name1: "Anish",
//   Name2: "Pradhan",
// });
// console.log(person);

// person.get();
// console.log(person.get());

// Sort
// let harry = [92, 99, 42, 89, 78, 90, 98];
// let compare = (a, b) => a - b;

// harry.sort(compare);
// console.log(harry);

// let sum = function(a, b){
//   return a*b
// };

// console.log(sum(3, 4));

// numbers in ascending order

// let numbers1 = [94, 97, 92, 93, 90, 95, 96, 91, 98];
// let cose = (a, b) => a- b
// console.log(numbers1.sort(cose));

// function cose1(a,b) {
//  return a- b
// }
// console.log(numbers1.sort(cose1));

// function add(a, b) {
//   let sums = a + b;
//   return sums;
// }
// console.log(add(1,3));

function check(msg) {
  let count = 0;
  for (const che of msg) {
    if (
      che === "a" ||
      che === "e" ||
      che === "i" ||
      che === "0" ||
      che === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(check("aeiou"));
