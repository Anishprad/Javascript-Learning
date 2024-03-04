// let a = Math.random() * 100;
// a = Number.parseInt(a);
// let inp;
// let score = 100;
// while (a != inp) {
//     inp = Number.parseInt(prompt("Enter a Number"));
//     score -= 1;
//   if (inp == a) {
//     console.log("Congratulations, You have guessed a right number.");
//     console.log(`You have entered a number in ${100 - score} chance.`);
//   } else if (inp > a && inp < 100) {
//     console.log("Your number is greater than actual number");
//   } else if (inp < a && inp > 0) {
//     console.log("Your number is less than actual number");
//   } else {
//     console.log("Enter a number between 0 to 100");
//   }
// }

// let a = Math.floor(Math.random() * 100); // Generate random integer between 0 and 99
// let inp;
// let score = 100;

// while (a !== inp) {
//   inp = parseInt(prompt("Enter a Number"));

//   if (isNaN(inp) || inp < 0 || inp >= 100) {
//     console.log("Enter a number between 0 to 99");
//     continue; // Restart the loop
//   }

//   score -= 1;

//   if (inp === a) {
//     console.log("Congratulations, You have guessed the right number.");
//     console.log(`You have entered the correct number in ${100 - score} attempts.`);
//   } else if (inp > a) {
//     console.log("Your number is greater than the actual number.");
//   } else if (inp < a) {
//     console.log("Your number is less than the actual number.");
//   }
// }


// alert("You are in a main page")
// let a = prompt("Enter a number you want to add in screen")
// document.write(a)

// let a = Number.parseInt(prompt("Enter a number"))
// let age = 18
// if( a >= age){
//     alert("You can drive a vehicle")
// }else{
//     alert("You are underage")
// }

let sum = (a, b) => {
return a+b
}
console.log(sum(7,8));