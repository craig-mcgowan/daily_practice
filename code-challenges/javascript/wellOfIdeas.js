//www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
https: function well(x) {
  //your code here
  return x.every((idea) => idea === "bad")
    ? "Fail!"
    : x.filter((idea) => idea === "good").length > 2
    ? "I smell a series!"
    : "Publish!";
}
