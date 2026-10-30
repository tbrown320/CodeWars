// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
    //your code here
    let arr1 = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr1.push(arr[i])
        }
    }
    return arr1
}