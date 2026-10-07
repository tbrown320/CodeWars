// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).


function twoSum(numbers, target) {
  //iterate through starting from i
  for (let i = 0; i < numbers.length; i++){
    //iterate through starting from i + 1
    for (let j = 1 + i; j < numbers.length; j++){
       if (numbers[i] + numbers[j] === target){
      return ([i, j]) 
      } 
    } 
  }
}