import {validateStringNotEmpty, validateNumber} from './validation.js'

export function transformToNumber(value) {
  if(value === ""){
    return 0
  }
  return +value;
}

export function cleanNumber(numberInputs){
  const numbers = []
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}