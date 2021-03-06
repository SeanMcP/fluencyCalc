let aValue = 0;
let bValue = 0;

let aScreen = document.getElementById("aScr");
let bScreen = document.getElementById("bScr");
let aFraction = document.getElementById("aFrac");
let aPercent = document.getElementById("aPerc");
let bFraction = document.getElementById("bFrac");
let bPercent = document.getElementById("bPerc");

aScreen.innerHTML = aValue;
bScreen.innerHTML = bValue;

function aButton(a, b){
  aScreen.innerHTML = a;
  aFraction.innerHTML = a + "/" + (a + b);
  let aPercVal = a / (a + b) * 100;
  aPercent.innerHTML = aPercVal.toFixed(2) + "%";
}

function bButton(a, b) {
  bScreen.innerHTML = b;
  bFraction.innerHTML = b + "/" + (a + b);
  let bPercVal = b / (a + b) * 100;
  bPercent.innerHTML = bPercVal.toFixed(2) + "%";
}
function outputTable(a, b){
  aScreen.innerHTML = a;
  aFraction.innerHTML = a + "/" + (a + b);
  let aPercVal = a / (a + b) * 100;
  aPercent.innerHTML = aPercVal.toFixed(2) + "%";

  bScreen.innerHTML = b;
  bFraction.innerHTML = b + "/" + (a + b);
  let bPercVal = b / (a + b) * 100;
  bPercent.innerHTML = bPercVal.toFixed(2) + "%";
}
// function clearOutput() {
//   aFraction.innerHTML = "";
//   bFraction.innerHTML = "";
//   aPercent.innerHTML = "";
//   bPercent.innerHTML = "";
// }

aPlusOne.addEventListener('click', function(){
  aValue++;
  outputTable(aValue, bValue);
});
aMinusOne.addEventListener('click', function(){
  aValue--;
  outputTable(aValue, bValue);
});

bPlusOne.addEventListener('click', function(){
  bValue++;
  outputTable(aValue, bValue);
});
bMinusOne.addEventListener('click', function(){
  bValue--;
  outputTable(aValue, bValue);
});

clearAll.addEventListener('click', function(){
  aValue = 0;
  bValue = 0;
  aScreen.innerHTML = aValue;
  bScreen.innerHTML = bValue;
  aFraction.innerHTML = "";
  aPercent.innerHTML = "";
  bFraction.innerHTML = "";
  bPercent.innerHTML = "";
});
