// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.


function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let new_sequence = []
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === 'T'){
      //if the element in dna[i] is 'T' then we are pushing a 'U' in its place.
      new_sequence.push("U")
    } else {
      //otherwise we are pushing that element into new_sequence
      new_sequence.push(dna[i])
    }
  }
    //use .join to bring the strings together with no spaces.
     return new_sequence.join('')
}