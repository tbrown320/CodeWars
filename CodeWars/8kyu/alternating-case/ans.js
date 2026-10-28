// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let result = '';
    //MUST use 'this' when working with a prototype
    for (let letter of this) {
        if (letter !== letter.toUpperCase()) {
            // if letter is not uppercase then make it upper
            result += letter.toUpperCase()
            //otherwise, make it lowercase
        } else {
            result += letter.toLowerCase()
        }
    }

    return result;
};