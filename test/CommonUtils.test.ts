import {
  not,
  isString,
  isObject,
  boolToString,
  isStringEmpty,
  isTrimmedStringEmpty,
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

  describe("not", () => {
    test('Should return false if input satisfies condition', () => {
      const isNotString = not(isString);
      const result = isNotString("");
      expect(result).toBe(false);
    });

    test('Should return true if input does not satisfy condition', () => {
      const isNotString = not(isString);
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

  describe('isObject', function () {
    it('should return true for object', function () {
      const result = isObject({});
      expect(result).toBeTruthy();
    });

    it('should return false for function', function () {
      const result = isObject(() => 1);
      expect(result).toBeFalsy();
    });
  });

  describe('isTrimmedStringEmpty', function () {
    it('should return true for empty string with spaces', function () {
      const result = isTrimmedStringEmpty(" ");
      expect(result).toBeTruthy();
    });

    it('should return false for non empty string', function () {
      const result = isTrimmedStringEmpty("1");
      expect(result).toBeFalsy();
    });

    it('should return false for non string value', function () {
      const result = isTrimmedStringEmpty(1);
      expect(result).toBeFalsy();
    });
  });
});
