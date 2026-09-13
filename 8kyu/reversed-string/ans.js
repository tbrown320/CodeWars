// Complete the solution so that it reverses the string passed into it.


function solution(str) {
  let ans = ''
  for (let letter of str){
    ans = letter + ans
  }
  return ans
}