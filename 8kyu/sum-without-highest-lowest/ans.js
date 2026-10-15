// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.



function sumArray(array) {
    // return 0 if it's not an array or there aren't enough numbers to sum
    if (!array || array.length < 3) {
        return 0;
    }

    let sum = 0
    //make the min and max numbers the first number in the array for the first comparison
    let min = array[0]
    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        // add all the number together then find the max and min and subtract it
        sum += array[i];
        //if the number is less than the smallest number then that is the new min
        if (array[i] < min) {
            min = array[i]
        }
        //if the number is greater than the largest number then that is the new max
        if (array[i] > max) {
            max = array[i]
        }
    }
    return sum - min - max;
}