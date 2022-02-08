//www.codewars.com/kata/55e6f5e58f7817808e00002e/train/javascript
https: function seven(m) {
  // your code
  //create a loop that is active while m is three digits or more
  let count = 0;
  while (m >= 100) {
    count += 1;
    m = (m - (m % 10)) / 10 - (m % 10) * 2;
  }
  //return an array with the first number being the two digit result and the second the number of steps
  return [m, count];
}
