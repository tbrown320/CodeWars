// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  // Return a new array with the strings filtered out
  let new_list = []
  for (let i = 0; i < l.length; i++){
    if (typeof l[i] !== "string"){
      new_list.push(l[i])
    }
  }return new_list
}