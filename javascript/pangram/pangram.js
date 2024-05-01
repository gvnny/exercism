export const isPangram = (phrase) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const phraseLowerCase = phrase.toLowerCase();

  return alphabet.every((letter) => phraseLowerCase.includes(letter));
};