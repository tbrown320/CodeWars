// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
    let x = []
    n = String(n)
    for (i = 0; i < n.length; i++) {
        x.unshift(Number(n[i]))
    }
    return x
}