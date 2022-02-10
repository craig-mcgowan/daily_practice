//john = x ann = y
//day 0 y(0)=1 and x(0)=0
// day 1 ann: y(1)= 1-x(t)  t = y(0) = 1   y(1)=1-x(1) y(1)= 1-(1-)
// day 1 john: x(1)=1-y(t)      t = x(0) = 0 
// day 1 john: x(1)=1-y(1)= 1-1 
// x(1) = 0
// y(1) = 1- x(1) = 1

//with n 
// y(n) = n - x(y(n-1))     x(n)= n- y(x(n-1))
// y(1) = 1- x(1)           x(1)= 1- y(0) = 0
// y(1) = 1- 0 = 1

//y(2) = 2 - x(y(2-1))

function john(n) {
  let j = 0 
  let res = [0] 
  for (i = 0; i < n, i++) {
    i - ann(i)
  }
  // return array of length n
}
function ann(n) {
    // your code
  let y = 1
  let res = [1]
  for (i = 0; i < n, i++) {
    
  }
      
  //return array of length n
}

function sumJohn(n) {
    // your code
  return john(n).reduce((sum, num=> sum+num)
}

function sumAnn(n) {
    // your code
    return ann(n).reduce((sum, num=> sum+num)

}
