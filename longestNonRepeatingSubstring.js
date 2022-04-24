/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0,
    current = "";
  for (let i = 0; i < s.length; i++) {
    if (!current.includes(s[i])) {
      current += s[i];
      if (longest < current.length) {
        longest = current.length;
      }
    } else {
      i -= current.length;
      current = "";
    }
  }
  return longest;
};
