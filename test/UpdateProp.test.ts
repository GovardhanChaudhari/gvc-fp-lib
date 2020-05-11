import {
  isNot,
  isNullOrEmpty,
} from "../src";
import {
  updateProp,
  updatePropIf,
  updatePropWith,
  updatePropIfWith
} from "../src/utils/UpdateProp";

describe("UpdateProp", () => {
  describe("updatePropIf", () => {
    test('Should update object if condition is true', () => {
      // @ts-ignore
      const updatePropX = updatePropIf(x => x > 0, 4, "x");
      const expected = {x: 4};
      const result = updatePropX({x: 1});
      expect(result).toEqual(expected);
    });

    test('Should not object if condition is false', () => {
      // @ts-ignore
      const updatePropX = updatePropIf(isNot(isNullOrEmpty), 4, "x");
      const expected = {x: null};
      const result = updatePropX({x: null});
      expect(result).toEqual(expected);
    });
  });

  describe("updatePropIfWith", () => {
    test('Should update object if condition is true', () => {
      // @ts-ignore
      const updatePropX = updatePropIfWith(x => x > 0, () => 4, "x");
      const expected = {x: 4};
      const result = updatePropX({x: 1});
      expect(result).toEqual(expected);
    });

    test('Should not object if condition is false', () => {
      // @ts-ignore
      const updatePropX = updatePropIfWith(isNot(isNullOrEmpty), () => 4, "x");
      const expected = {x: null};
      const result = updatePropX({x: null});
      expect(result).toEqual(expected);
    });
  });

  describe("updateProp", () => {
    test('should return updated object', () => {
      const updatePropXWith4 = updateProp(4, "x");
      const expected = {x: 4};
      const result = updatePropXWith4({x: 1});
      expect(result).toEqual(expected);
    });
  });

  describe("updatePropWith", () => {
    test('should return updated object', () => {
      // @ts-ignore
      const updatePropXWith4 = updatePropWith(() => 4, "x");
      const expected = {x: 4};
      const result = updatePropXWith4({x: 1});
      expect(result).toEqual(expected);
    });

    test('should return updated object for simple value', () => {
      // @ts-ignore
      const updatePropXWith4 = updatePropWith(4, "x");
      const expected = {x: 4};
      const result = updatePropXWith4({x: 1});
      expect(result).toEqual(expected);
    });
  });
});
