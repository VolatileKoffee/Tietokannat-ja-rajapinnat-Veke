/*Tee Javascriptilla ohjelma, joka tutkii, onko annettu sana palindromi. 
Palindromi on sana, joka on sama etu- ja takaperin. Esimerkiksi saippuakauppias. 
Välilyöntejä ei tarvitse käsitellä, eli syötteenä vain yksi sana.*/

const prompt = require("prompt-sync")();

function palindComp(toBeChecked) {
  let reversedWord = toBeChecked.split("").reverse().join("");

  if (reversedWord == toBeChecked) {
    return true; // jos palindromi, palautetaan TOSI
  }
  // if-vertailu tai "return false;"
  if (reversedWord != toBeChecked) {
    // EPÄTOSI
    return false;
  }
}
let word1 = "saippuakauppias";
let word2 = "kauppiassaippua";
let word3 = "racecar";

console.log("The word", word1, " is palindrome: ", palindComp(word1));
console.log("The word ", word2, " is palindrome: ", palindComp(word2));
console.log("The word ", word3, " is palindrome: ", palindComp(word3));
