// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts a non-negative integer and returns an integer.

function squareDigits(num) {
  let newlist = []
  //turn the list into a string and split it up
  let num_list = num.toString().split('')
  //iterate between each element and square the number
  for (let i = 0; i < num_list.length; i++){
    let square = num_list[i] * num_list[i]
    //PUSH the squared number to the newlist
    newlist.push(square)
  }
  //combine the list into one string and then turn it into a number
  return Number(newlist.join(''))
}