//www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  A.sort((a, b) => a - b);
  console.log(A);
  let oddInt = 0;
  A.forEach((num, i) => {
    if (num !== A[i - 1]) {
      console.log("num: ", num);
      let x = i;
      let count = 0;
      while (num === A[x]) {
        count++;
        x++;
      }
      console.log("count: ", count);
      if (count % 2 !== 0) {
        oddInt = num;
      }
    }
  });
  return oddInt;
}