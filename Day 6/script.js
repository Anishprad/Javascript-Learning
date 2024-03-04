let item = [250, 645, 300, 900, 50];
let i = 0;
for (let val of item) {
  let offer = val / 10;
  item[i] = item[i] - offer;
  console.log(item[i]);
  i++;
}


// Splice Array

// let companies = ["Bloomerg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let remove = companies.splice(0, 1);
// console.log(companies);
// console.log(remove);

// let removes = companies.splice(2, 1, "Ola");

// let removals = companies.splice(6, 0, "Amazon");
// console.log(companies);

// let numbers = (78, 34, 98, 99, 89, 75, 76);


//   numbers.sort(function (a, b) {
//     return a - b;
//   })

// console.log(numbers[numbers.length]);
