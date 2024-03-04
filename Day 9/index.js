// Callback Function

function fetchDataWithCallback(callback) {
  // callback is a parameter
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 1000);
}
function processData(data) {
  console.log(data);
}
fetchDataWithCallback(processData); // processData is an argument function
console.log("Fetching data...");

let a = (callback) => {
  setTimeout(() => {
    callback("Data Fetched Successfully");
    0.1;
  });
};

let b = (data) => {
  console.log(data);
};

a(b);
console.log("Works");

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 1000);
}
