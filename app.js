import { extractEnteredValues } from "./src/parser.js";
import { calculateNumber } from "./src/math.js";
import { outputResult, generateResultText } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredValues(form);

  const result = calculateNumber(numberValues);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
