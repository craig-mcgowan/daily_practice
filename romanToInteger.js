//https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const symbolValues = {
      "IV": 4,
      "IX": 9,
      "XL": 40,
      "XC": 90,
      "CD": 400,
      "CM": 900,
      "I":1,
      "V": 10,
      "D": 500,
      "M": 1000,
  }
  for (let clause of subtractionCases) {
    if (s.includes(clause)) {
      console.log(clause)
    }
  }
  console.log("standard")
  s
  
};