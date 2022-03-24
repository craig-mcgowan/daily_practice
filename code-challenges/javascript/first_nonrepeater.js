// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript

function firstNonRepeatingLetter(s) {
  // Add your code here
  console.log(s);
  const mapS = new Map();

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i].toLowerCase(), i);
  }
  console.log(mapS);
  for (char of mapS) {
    if ((char.length = 1)) return char[0];
  }
}