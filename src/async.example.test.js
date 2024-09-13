import { it, expect, describe } from "vitest";

import { generateToken, generateTokenPromise } from "./async.example";

describe("generateToken()", () => {
  // below func will test with call back function we pass in test as done
  it("should generate token from given user email", (done) => {
    // Arrange
    const userEmail = "test@test.com";

    // Act
    // Assert
    generateToken(userEmail, (error, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should generate a token value", () => {
    const userEmail = "dummy@dummy.com";

    return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
  });
});
