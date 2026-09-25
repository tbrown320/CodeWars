function longest(s1, s2) {
  // your code
  // iterate through s1 an if the letter appears once append to a new string
    let new_string = ''
    //split up the string an sort the first by alphabetical order
    let s_one = s1.split('').sort()
    let s_two = s2.split('')
    // loop through each letter, if they dont repeat then add it to the empty string
  for (let i = 0; i < s_one.length; i++){
    if (s_one[i] !== s_one[i+1]){
      new_string += s_one[i]  
    }}
  // loop through the second string, if the letter is not already in the new string then add it
  for(let i = 0; i < s_two.length; i++){
    if(new_string.includes(s_two[i]) !== true) {
        new_string += s_two[i]
        //order the new string in alphabetical order and bring it together
}} new_string = new_string.split('').sort().join('')
return(new_string)
}