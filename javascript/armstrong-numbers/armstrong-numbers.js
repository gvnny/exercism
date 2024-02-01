export const isArmstrongNumber = (number) => {
  let result = 0;
  
  for (let i = 0; i <= number.toString().length ; i++) {
    result += Math.pow(number.toString().charAt(i), number.toString().length)
  }

  return number === result
};
