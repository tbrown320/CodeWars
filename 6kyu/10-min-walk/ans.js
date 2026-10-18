// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    //insert brilliant code here
    //if walk is less than 10 or greater than 10, return false
    if (walk.length !== 10) {
        return false
    }
    //let the directions start at 0
    let NorthSouth = 0
    let WestEast = 0

    //each direction you walk we will either +1 block or -1 block
    walk.forEach(direction => {
        if (direction === 'n') NorthSouth++;
        else if (direction === 's') NorthSouth--;
        else if (direction === 'e') WestEast++;
        else if (direction === 'w') WestEast--;
    });

    // Returns true only if both coordinates are back at 0
    return NorthSouth === 0 && WestEast === 0;
}
