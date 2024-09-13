import { describe, it, expect } from "vitest";

import { transformToNumber, cleanNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should convert string number to number value", () => {
    // Arrange
    const num = "2";

    // Act
    const isNumber = transformToNumber(num);

    // Assert
    expect(isNumber).toBeTypeOf("number");
  });

  it("should check if transformToNumber function is not returning NaN", () => {
    // Arrange
    const num = "2";

    // Act
    const isNumber = transformToNumber(num);

    // Assert
    expect(isNumber).toBe(+num);
  });

  it("should return NaN if provided value is alphabetic string or one character", () => {
    // Arrange
    const num = "test";

    // Act
    const isNumber = transformToNumber(num);

    // Assert
    expect(isNumber).toBeNaN();
  });

  it("should not accept invalid arguments", () => {
    const value = "";
    const value2 = {};

    const isNumber = transformToNumber(value);
    const isNumber2 = transformToNumber(value2);

    expect(isNumber).toBe(0);
    expect(isNumber2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    // Arrange
    const numberInputs = ["1", "2"];

    // Act
    const result = cleanNumber(numberInputs);

    // Assert
    expect(result[0]).toBeTypeOf("number");
    expect(result).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is passed", () => {
    const inputArray = ["", "1"];
    const cleanFn = () => cleanNumber(inputArray);
    expect(cleanFn).toThrow();
  });
});
