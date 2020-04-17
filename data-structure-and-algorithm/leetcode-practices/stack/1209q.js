/**
 * 删除字符串中的所有相邻重复项II
 * @param {string} s 给定的字符串
 * @param {number} k 要删除相邻重复的个数
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  if (s.length === 1) return s;
  let stack = [], res = '';
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push([s[i], 1]);
    } else if (stack[stack.length - 1][0] === s[i]) {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([s[i], 1]);
    } 
  }
  for (let i = 0; i < stack.length; i++) {
    res += stack[i][0].repeat(stack[i][1]);
  }
  return res;
};
console.log(removeDuplicates('deeedbbcccbdaa', 3))
