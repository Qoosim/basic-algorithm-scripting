const DNAtoRNA = (dna) => {
    // create a function which returns an RNA sequence from the given DNA sequence

  return dna.split("").map((item) => {
    if (item === "T") {
      item = "U"
    }
    return item
  })

  // Or this approach
  return dna.replace(/T/g, 'U')
  // Or this approach
  return dna.replaceAll('T', 'U')
}

console.log(DNAtoRNA("TTTT"))
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("GACCGCCGCC"))

