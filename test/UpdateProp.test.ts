import {
  not,
  updateProp,
  updatePropIf,
  isNullOrEmpty,
  toCommaSeparatedString,
} from "../src";

describe("UpdateProp", () => {

  describe("updateProp", () => {

    test('should return updated object for simple value', () => {
      const updatePropXWith4 = updateProp(4, "x");
      const expected = {x: 4};
      const result = updatePropXWith4({x: 1});
      expect(result).toEqual(expected);
    });

    test('should return same object if property is not present', () => {
      const updatePropXWith4 = updateProp(4, "x");
      const expected = {};
      const result = updatePropXWith4({});
      expect(result).toEqual(expected);
    });

    test('should return updated object for function returning value', () => {
      const updatePropXWith4 = updateProp(() => 4, "x");
      const expected = {x: 4};
      const result = updatePropXWith4({x: 1});
      expect(result).toEqual(expected);
    });
  });

  describe("updatePropIf", () => {
    test('Should update object if condition is true', () => {
      const updatePropX = updatePropIf(x => x > 0);
      const expected = {x: 4};
      const result = updatePropX(4, "x", {x: 1});
      expect(result).toEqual(expected);
    });

    test('Case iSArray predicate : Should update object if condition is true', () => {
      const updatePropX = updatePropIf(Array.isArray, toCommaSeparatedString);
      const expected = {x: "1,2"};
      const result = updatePropX("x", {x: [1, 2]});
      expect(result).toEqual(expected);
    });

    test('Case iSArray predicate : Should not update object if condition is false', () => {
      const updatePropX = updatePropIf(Array.isArray, toCommaSeparatedString);
      const expected = {x: 1};
      const result = updatePropX("x", {x: 1});
      expect(result).toEqual(expected);
    });

    test('Should not object if condition is false', () => {
      const updatePropX = updatePropIf(not(isNullOrEmpty), 4, "x");
      const expected = {x: null};
      const result = updatePropX({x: null});
      expect(result).toEqual(expected);
    });

    test('Should update object if condition is true for function value', () => {
      const updatePropX = updatePropIf(x => x > 0, () => 4, "x");
      const expected = {x: 4};
      const result = updatePropX({x: 1});
      expect(result).toEqual(expected);
    });

    test('Should not object if condition is false for function value', () => {
      const updatePropX = updatePropIf(not(isNullOrEmpty), () => 4, "x");
      const expected = {x: null};
      const result = updatePropX({x: null});
      expect(result).toEqual(expected);
    });
  });
});
