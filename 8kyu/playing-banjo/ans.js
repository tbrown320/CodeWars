// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
  // Implement me
  let firstName = name.split("")
  let first_initial = firstName[0]
  if ((first_initial === 'R') || (first_initial === "r")) {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}