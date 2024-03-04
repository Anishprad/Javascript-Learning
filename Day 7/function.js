// function harry(msg) {
//   let count = 0;
//   for (const mat of msg) {
//     if (
//       mat === "a" ||
//       mat === "e" ||
//       mat === "i" ||
//       mat === "o" ||
//       mat === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// filter array

// let num1= [90, 92, 98 , 91, 94, 97, 99]

// let food = num1.filter((val)=> {
//   return val % 2 === 0
// })
// console.log(food);

// reduce array

// let num2 = [1, 2, 3, 4, 5, 6, 7];
// let add = num2.reduce((res, cur) => {
//   return res + cur;
// });
// console.log(add);

// let num2 = [1, 2, 3, 4, 5, 6, 7];
// let add = num2.reduce((res, cur) => {
//   return res > cur ? res : cur;
// });
// console.log(add);

//practice
//filter method

// let arr = [91, 92, 89, 86, 99, 93, 98];
// let filt = arr.filter((val7) => {
//   return val7 >= 90;
// });
// console.log(filt);

//reduce method

let num3 = [1, 2, 3, 4, 5, 6, 7];
let numbers = num3.reduce((res, cur) => {
  return res * cur
});
console.log(numbers);

// let n = prompt("Enter a number");
// let arr = [];
// for (let i = 0; i <= n; i++) {
//   arr[i - 1]= i
// }
// console.log(arr)

//filter method
let num7= [90, 92, 98 , 91, 94, 97, 99]
let harry = num7.filter((value)=>{
  return value >= 95
})
console.log(harry);