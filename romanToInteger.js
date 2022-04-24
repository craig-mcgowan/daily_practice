//https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const symbolValues = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let acc = 0;
  for (let sym in symbolValues) {
    arr = s.split(sym);
    acc += (arr.length - 1) * symbolValues[sym];
    s = arr.join("");
  }
  return acc;
};
