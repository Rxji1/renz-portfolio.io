
function convertTemp(){
  
const inputEl = document.getElementById('inputNum');
const cToF = document.getElementById('celciusToFahreinheit');
const fToC = document.getElementById('fahrenheitToCelcius');
let result = document.getElementById("result");
 let inputVal = inputEl.value;
 
if (cToF.checked) {
  result.innerHTML = (inputVal * 1.8) + 32 + '°F';
} else {
  result.innerHTML = (inputVal - 32) / 1.8 + '°C';
}

}