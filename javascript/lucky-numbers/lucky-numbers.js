/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = "";
  let sum2 = "";

  return (
    Number(array1.reduce((acc, cur) => sum1 += String(cur), 0)) +
    Number(array2.reduce((acc, cur) => sum2 += String(cur), 0))
  );
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueToString = String(value);
  let invertedValue = "";

  for (let i = valueToString.length - 1; i >= 0; i--) {
    invertedValue += valueToString[i];
  }

  return valueToString === invertedValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return "Required field";
  } else if (isNaN(input) || +input === 0) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
