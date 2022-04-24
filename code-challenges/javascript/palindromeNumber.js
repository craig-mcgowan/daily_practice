//https://leetcode.com/problems/palindrome-number/


/*
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if (x<0) {false}
    x = x.toString()
    return x=== x.split("").reverse().join("")
    
};