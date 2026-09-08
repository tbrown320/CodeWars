// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses

var summation = function (num) {
  // Code here

  let total = 0
  if (num > 0) {
    //have i start at 1 bc problem said it would always be greater than 0
    //then have it to loop to it equals num bc we have to loop until we include our number
  for (let i = 1; i <= num; i++){
    total += i
  }
  } return total
}