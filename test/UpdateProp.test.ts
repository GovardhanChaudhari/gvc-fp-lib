import {
  isNot,
  isNullOrEmpty,
} from "../src";
import {
  updateProp,
  updatePropIf,
} from "../src/utils/UpdateProp";

describe("UpdateProp", () => {

  describe("updateProp", () => {

    test('should return updated object for simple value', () => {
      // @ts-ignore
      const updatePropXWith4 = updateProp(4, "x");
      const expected = {x: 4};
      const result = updatePropXWith4({x: 1});
      expect(result).toEqual(expected);
    });

    test('should return updated object for function returning value', () => {
      // @ts-ignore
      const updatePropXWith4 = updateProp(() => 4, "x");
      const expected = {x: 4};
      const result = updatePropXWith4({x: 1});
      expect(result).toEqual(expected);
    });

  });

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

    test('Should update object if condition is true for function value', () => {
      // @ts-ignore
      const updatePropX = updatePropIf(x => x > 0, () => 4, "x");
      const expected = {x: 4};
      const result = updatePropX({x: 1});
      expect(result).toEqual(expected);
    });

    test('Should not object if condition is false for function value', () => {
      // @ts-ignore
      const updatePropX = updatePropIf(isNot(isNullOrEmpty), () => 4, "x");
      const expected = {x: null};
      const result = updatePropX({x: null});
      expect(result).toEqual(expected);
    });

  });
});
