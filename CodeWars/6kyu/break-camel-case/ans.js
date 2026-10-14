// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
    let new_string = ''
    for (let i = 0; i < string.length; i++) {
        if (string === '') {
            return '';
        } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
            new_string += ` ${string.charAt(i)}`
        } else {
            new_string += `${string.charAt(i)}`
        }
    } return new_string
}