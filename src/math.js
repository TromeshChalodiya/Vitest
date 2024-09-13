import { cleanNumber } from "./util/numbers.js";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateNumber(numValues) {
  let result = "";
  try {
    const numbers = cleanNumber(numValues);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
