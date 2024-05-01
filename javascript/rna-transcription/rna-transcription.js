export const toRna = (dna) => {
  let rna = '';
  const dnaToRna = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  if (dna.length === 1) {
    return dnaToRna[dna];
  } else {
    for (let i = 0; i < dna.length; i++) {
      rna += dnaToRna[dna[i]];
    }
  }
  return rna;
};