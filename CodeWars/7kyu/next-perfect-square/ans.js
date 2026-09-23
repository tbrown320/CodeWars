function findNextSquare(sq) {
    //if the square root of sq modulo 1 gives no remainder then it is a whole number. Then take that number add 1 to it an square it to get the next perfect square.
  if (Math.sqrt(sq) % 1 === 0){
    return (Math.sqrt(sq)+1) ** 2
  } else {
    return -1;
  }
  // Return the next square if sq is a perfect square, -1 otherwise
}