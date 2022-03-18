// https://www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript

function symmetricPoint(p, q) {
  console.log(p, q);
  return [q[0] + q[0] - p[0], q[1] + q[1] - p[1]];
}