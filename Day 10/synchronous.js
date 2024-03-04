let number = Math.floor(Math.random() * 100);
let inp;
let score = 100;
while (inp != number) {
  inp = parseInt(prompt("Enter a number"));
  score -= 1;
  if (inp === number) {
    console.log("You have guessed the actual number");
    console.log(`You have guessed the number in ${100 - score} chances.`);
  } else if (inp > number && inp < 100) {
    console.log("Your number is greater than actual number");
  } else if (inp < number && inp > 0) {
    console.log("Your number is smaller than actual number");
  } else {
    console.log("Enter a number between 1 to 100");
  }
}
