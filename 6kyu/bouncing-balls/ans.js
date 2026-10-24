// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

function bouncingBall(h, bounce, window) {
    // your code here
    let count = 1
    //height * bounce then compare it to see if its higher than the window height
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1
    }

    h = h * bounce

    while (h > window) {
        //count goes up by 2 bc the ball is falling and bouncing past the window
        count += 2
        h = h * bounce
    }
    return count
}