export const score = (x, y) => {
  const distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

  if (distance > 10) {
    return 0;
  }
  if (distance > 5) {
    return 1;
  }
  if (distance > 1) {
    return 5;
  }
  return 10;
};