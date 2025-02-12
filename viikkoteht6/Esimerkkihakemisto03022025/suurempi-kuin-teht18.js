//tee ohjelma, joka kysyy käyttäjältä kaksi lukua ja ilmoittaa niistä suuremman
const prompt = require("prompt-sync")();

function numComp() {
  let num1 = prompt("Enter first value: ");
  let num2 = prompt("Enter second value: ");
  if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

console.log("The larger number is ", numComp());
