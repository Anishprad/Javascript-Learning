// function checker(message) {
//     let count = 0;
//     for (let chat of message) {
//       if (
//         chat === "a" ||
//         chat === "e" ||
//         chat === "i" ||
//         chat === "0" ||
//         chat === "u"
//       ) {
//         count++;
//       }
//     }
//     return count;

//   }
//   console.log(checker("aeiou"));

// map method

// let num = [1, 2, 3, 4, 5, 6, 7];
// let cose = (a) => {
//   return a
// };
// let arr = num.map(cose);
// console.log(arr);

// practice

// pudh method

// let number = [1, 2, 3, 4, 5, 6, 7, 8];
// let a = prompt("Enter a number");
// a = Number.parseInt(a);
// number.push(a);
// console.log(number);

//do while method
// let number1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let a;
// do {
//   a = prompt("Enter a number");
//   a = Number.parseInt(a);
//   number1.push(a);
// } while (a != 0);
// console.log(number1);

//do wile mthod

// let number3 = [1, 2, 3, 4, 5, 6, 7, 8];
// let a1;
// do {
//   a1 = prompt("Enter a number");
//   a1 = Number.parseInt(a1);
//   number3.push(a1);
// } while (a1 != 0);
// console.log(number3);

//filter method

// let number4 = [45, 43, 67, 20, 90, 80, 100, 110, 800, 900];
// let cose1 = (val) => {
//   return val % 10 === 0;
// };
// let filterNum = number4.filter(cose1);
// console.log(filterNum);

// let number5 = [45, 43, 67, 20, 90, 80, 100, 110, 800, 900];
// function num(val1) {
//   return val1 % 10 === 0;
// }
// let harry = number5.filter(num);
// console.log(harry);

// maps

// let number6 = [4, 3, 7, 2, ];
// let maps = number6.map((val7)=>{
//   return val7 *val7
// })
// console.log(maps);

//reduce method

// let number7 = [4, 3, 7, 2];
// let maps1 = number7.reduce((val8, val9) => {
//   return val8 * val9;
// });
// console.log(maps1);

// let a =  Math.random() * 100 ;

// let inpt;
// let score = 100;
// while (inpt != a) {
//   score -= 1;
//   inpt = prompt("Enter a Number:");
//   inpt = parseInt(inpt)
//   if (inpt === a) {
//     console.log(`You have guessed a right number`);
//     console.log(`You guess the actual number in ${100 - score} chances `);
//   } else if (inpt > a && inpt < 100) {
//     console.log(`Your number is greater than actual number`);
//   } else if (inpt < a && inpt > 0) {
//     console.log(`Your number is smaller than actual number`);
//   }else{console.log(`Enter a number between 1 to 100.`)}
// }

// let a = 0;
// let sum = parseInt(prompt("Enter a Number"));
// while (sum != a) {
//   sum = parseInt(prompt("Enter a number again"));
// }
// console.log("You have entered a right number");

  let a = Math.floor(Math.random() * 100) + 1 
  let inp;
  let score = 100;
  while (inp != a) {
    score -= 1;
    inp = parseInt(prompt("Enter a Number"));
    if (inp === a) {
      console.log("You have entered a correct digit number");
      console.log(`You have guessed the number in ${100 - score} chance`);
    } else if (inp > a && inp < 100) {
      console.log("Your number is greater than actual number");
    } else if (inp < a && inp > 0) {
      console.log("Your number is less than actual number");
    } else {
      console.log("Enter a number from 0 to 100");
    }
  }
