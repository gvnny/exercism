export const score = (x, y) => {
  const distance = Math.sqrt((x) ** 2 + (y) ** 2);

  if (distance > 10) {
    return 0;
  }
  if (distance <= 10 && distance > 5) {
    return 1;
  } 
  if (distance <= 5 && distance > 1) {
    return 5;
  }
  if (distance <= 1) {
    return 10;
  } 
};
