//https://www.codewars.com/kata/573d498eb90ccf20a000002a/solutions/javascript
function decode(string) {
  //your code here
  return string
    .split("")
    .map((num) => {
      if (num == 5) return 0;
      if (num == 0) return 5;
      return 5 - (num - 5);
    })
    .join("");
}
