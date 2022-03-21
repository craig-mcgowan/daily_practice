// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  // ...
  console.log(n);
  while (n > 9) {
    n = String(n)
      .split("")
      .reduce(
        (previousValue, currentValue) => previousValue + Number(currentValue),
        0
      );
  }
  return n;
}
