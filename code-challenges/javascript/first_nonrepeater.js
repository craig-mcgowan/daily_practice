// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript

function firstNonRepeatingLetter(s) {
  // Add your code here
  const mapS = new Map()

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i].toLowerCase(),i)

  }
  for (char in mapS) {
    if (char.length = 1) return char
  }
}