export const isArmstrongNumber = (number) => {
  const sum = 
    [...number.toString()]
    .reduce((acc, digit) => acc + digit ** number
    .toString().length, 0);
  
  return sum === number;

};
