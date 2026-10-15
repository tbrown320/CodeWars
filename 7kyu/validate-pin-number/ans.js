// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    // a PIN must be exactly 4 or 6 characters long
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    // check every character, and if any isn't a digit the PIN is invalid
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }
    // made it through the loop, so every character is a digit
    return true;
}
//return true or false