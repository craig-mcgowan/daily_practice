// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((l) => !vowels.includes(l.toLowerCase()))
    .join("");
}