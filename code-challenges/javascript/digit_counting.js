//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
  // your code
  console.log(n, d);
  let resultString = "";
  let result = 0;
  for (let i = 0; i <= n; i++) {
    resultString += String(i ** 2);
  }
  for (char of resultString) {
    //console.log(char)
    if (char === String(d)) {
      //console.log(char)
      result++;
    }
  }

  return result;
}