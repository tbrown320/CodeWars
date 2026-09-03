// Given an array of integers, return a new array with each value doubled.

function maps(x) {
  new_arr = []
  for(i = 0; i < x.length; i++){
    ans = x[i] * 2
    new_arr.push(ans)
  }
  return new_arr
}