import {
  isNot,
  isString,
  boolToString,
  isStringEmpty,
} from "../src";
import {
  BOOLEAN_TRUE,
  BOOLEAN_FALSE,
  nonStringValues,
  STRING_BOOLEAN_TRUE,
  STRING_BOOLEAN_FALSE,
} from "./fixtures/CommonUtilsFiture";

describe("CommonUtils", () => {
  describe("isStringEmpty", () => {
    test('return true form empty string', () => {
      const result = isStringEmpty("");
      expect(result).toBe(true);
    });

    test('return false form " " string', () => {
      const result = isStringEmpty(" ");
      expect(result).toBe(false);
    });

    test('return false non string value', () => {
      nonStringValues.forEach(value => {
        const result = isStringEmpty(value);
        expect(result).toBe(false);
      });
    });
  });

  describe("isNot", () => {
    test('Should return false if input satisfies condition', () => {
      const isNotString = isNot(isString);
      const result = isNotString("");
      expect(result).toBe(false);
    });

    test('Should return true if input does not satisfy condition', () => {
      const isNotString = isNot(isString);
      const result = isNotString(1);
      expect(result).toBe(true);
    });
  });

  describe('boolToString', () => {
    test("should convert false value to 'false'", () => {
      const result = boolToString(BOOLEAN_FALSE);
      expect(result).toEqual(STRING_BOOLEAN_FALSE);
    });

    test("should convert true value to 'true'", () => {
      const result = boolToString(BOOLEAN_TRUE);
      expect(result).toEqual(STRING_BOOLEAN_TRUE);
    });

    test("should return original value for non boolean, here 'true'", () => {
      const result = boolToString(STRING_BOOLEAN_TRUE);
      expect(result).toEqual(STRING_BOOLEAN_TRUE);
    });
  });
});
