// Parameters - how many ns in the series you're going
// Return - the sum of all the numbers to nth term in sequence
// Examples - 1 returns "1.00"  3 is 1 + 1/4 + 1/7 = 1/12
// Psuedo code - for every iteration until n
// 1/n + 1/(n+3) until n is reached
// returning the float version of the sum rounded 2 decial places and as a string


function SeriesSum(n) {
  // Happy Coding ^_^
  let new_num = 0
  for (i = 0; i < n; i++) {
    new_num += 1 / (1 + 3 * i)
  }
  new_num = new_num.toFixed(2)
  return new_num
}