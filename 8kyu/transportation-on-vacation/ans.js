// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).




function rentalCarCost(d) {
  // Your solution here
  let daily_rent = 40;
  let total = 0;
//   let days = Number(d);
   if (d >= 7) {
    total = (d * daily_rent) - 50;
    return total;
  } else if (d >= 3) { // Checked if d >= 7 already, so this covers 3, 4, 5, and 6
    total = (d * daily_rent) - 20;
    return total;
  } else { // Covers anything 3 or fewer
    total = (d * daily_rent);
    return total;
  }
}