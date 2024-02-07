/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const limesToValue = { 'small': 6, 'medium': 8, 'large': 10 };
  let limeIndex = 0;
  while (wedgesNeeded > 0 && limeIndex < limes.length) {
    wedgesNeeded -= limesToValue[limes[limeIndex]];
    limeIndex += 1;
  }
  return limeIndex;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let result = orders;

  while (timeLeft > 0 && 0 < orders.length) {
    timeLeft -= timeToMixJuice(orders[0]);
    result.splice(0, 1);
  }
  return result;
}