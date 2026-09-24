//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna) {
  let helix = dna.split('')
  let other_side = []
  for (i = 0; i < helix.length; i++){
    if (helix[i] === "A"){
      other_side.push("T")
    } else if (helix[i] === "T"){
      other_side.push("A")
     } else if (helix[i] === "G"){
      other_side.push("C")
       } else if (helix[i] === "C"){
      other_side.push("G")
    }
  }
  return other_side.join('')
}