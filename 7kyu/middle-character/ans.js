// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

function getMiddle(s) {
    //Code goes here!
    let new_s = ''
    let num = s.length
    if (num % 2 === 0) {
        new_s += (s[(num / 2) - 1]) + (s[(num / 2)])
    } else {
        new_s += s[Math.floor(num / 2)]
    }
    return new_s;
}