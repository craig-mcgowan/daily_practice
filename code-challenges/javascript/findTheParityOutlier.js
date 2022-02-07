//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  //your code here
  const sortedArr = integers.sort(
    (num1, num2) => (Math.abs(num1) % 2) - (Math.abs(num2) % 2)
  );
  console.log(sortedArr);

  const [first, second, ...rest] = sortedArr;

  return (first + second) % 2 === 0 ? rest[rest.length - 1] : first;
}