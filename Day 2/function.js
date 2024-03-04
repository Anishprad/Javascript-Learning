// function convertToNepali(dollarAmount){
//     let rate = 133.59;
//     return dollarAmount * rate
// }
// console.log(convertToNepali(5));

function calculateValue(){
    let a = document.getElementById('result');
    let b = document.getElementById('num').value;

    let result = b * 133.59;
    a.innerText = result
}
