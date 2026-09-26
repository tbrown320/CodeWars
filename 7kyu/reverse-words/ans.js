// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  // Go for it
  //split the str up into smaller strings based on where the ' ' is
  //create a new array with the split words and reverse each letter in the word
  let new_string = str.split(" ")
      .map(word => word.split("").reverse().join(""))
      .join(" ")
  // bring the string back together with join but with spaces between each word
  return new_string
}