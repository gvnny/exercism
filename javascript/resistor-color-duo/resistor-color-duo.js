export const decodedValue = (colors) => {
  const colorMap = {
    'black': '0',
    'brown': '1',
    'red': '2',
    'orange': '3',
    'yellow': '4',
    'green': '5',
    'blue': '6',
    'violet': '7',
    'grey': '8',
    'white': '9'
  };

  const firstColor = colorMap[colors[0]];
  const secoundColor = colorMap[colors[1]];

  return parseInt(firstColor + secoundColor);
};