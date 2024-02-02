export const score = (x, y) => {
  const centerOfCircle = { x: 0, y: 0 };
  const distance = Math.sqrt((x - centerOfCircle.x) ** 2 + (y - centerOfCircle.y) ** 2);

  if(distance <= 10 && distance > 5) {
    return 1;
  } else if(distance <= 5 && distance > 1) {
    return 5;
  } else if(distance <= 1) {
    return 10;
  } else {
    return 0;
  }
};
