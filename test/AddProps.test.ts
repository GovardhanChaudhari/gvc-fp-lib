import {
  addProps,
  addPropsIf,
  addPropsToObjects,
  addPropsToObjectsIf,
} from "../src";

describe("AddProps", () => {
  describe("addProps", () => {
    test("should return updated object", () => {
      const updatePropXWith4 = addProps(4, ["x", "y"]);
      const expected = { x: 4, y: 4 };
      const result = updatePropXWith4({ x: 1, y: 2 });
      expect(result).toEqual(expected);
    });

    test("should not updated other props", () => {
      const updatePropXWith4 = addProps(4, ["x", "y"]);
      const expected = { x: 4, y: 4, z: 1 };
      const result = updatePropXWith4({ x: 1, y: 2, z: 1 });
      expect(result).toEqual(expected);
    });
  });

  describe("addPropsIf", () => {
    test("should return updated object for true predicate", () => {
      const updatePropXWith4 = addPropsIf((x) => x > 0, 4, ["x", "y"]);
      const expected = { x: 4, y: 4 };
      const result = updatePropXWith4({ x: 1, y: 2 });
      expect(result).toEqual(expected);
    });

    test("should not update props of object for false predicate", () => {
      const updatePropXWith4 = addPropsIf((x) => x > 0, 4, ["x", "y"]);
      const expected = { x: 0, y: 4 };
      const result = updatePropXWith4({ x: 0, y: 2 });
      expect(result).toEqual(expected);
    });
  });

  describe("addPropsToObjects", () => {
    test("should return updated objects array", () => {
      const updatePropXWith4 = addPropsToObjects(4, ["x", "y"]);
      const expected = [{ x: 4, y: 4 }];
      const result = updatePropXWith4([{ x: 1, y: 2 }]);
      expect(result).toEqual(expected);
    });

    /*test('should return updated objects array for function value', () => {
      const updatePropXWith4 = updateObjectsProps(() => 4, ["x", "y"]);
      const expected = [{x: 4, y: 4}];
      const result = updatePropXWith4([{x: 1, y: 2}]);
      expect(result).toEqual(expected);
    });*/
  });

  describe("addPropsToObjectsIf", () => {
    test("Should update objects if condition is true", () => {
      const updatePropX = addPropsToObjectsIf((x) => x > 0, 4, ["x", "y"]);
      const expected = [{ x: 4, y: 0 }];
      const result = updatePropX([{ x: 1, y: 0 }]);
      expect(result).toEqual(expected);
    });
  });
});
