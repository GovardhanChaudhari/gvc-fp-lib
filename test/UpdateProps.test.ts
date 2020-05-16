import {updateObjectsProps, updateObjectsPropsIf, updateProps, updatePropsIf} from "../src";

describe("UpdateProps", () => {
  describe("updateProps", () => {
    test('should return updated object', () => {
      const updatePropXWith4 = updateProps(4, ["x", "y"]);
      const expected = {x: 4, y: 4};
      const result = updatePropXWith4({x: 1, y: 2});
      expect(result).toEqual(expected);
    });

    test('should not updated other props', () => {
      const updatePropXWith4 = updateProps(4, ["x", "y"]);
      const expected = {x: 4, y: 4, z: 1};
      const result = updatePropXWith4({x: 1, y: 2, z: 1});
      expect(result).toEqual(expected);
    });
  });

  describe("updatePropsIf", () => {
    test('should return updated object for true predicate', () => {
      const updatePropXWith4 = updatePropsIf(x=>x>0,4, ["x", "y"]);
      const expected = {x: 4, y: 4};
      const result = updatePropXWith4({x: 1, y: 2});
      expect(result).toEqual(expected);
    });

    test('should not update props of object for false predicate', () => {
      const updatePropXWith4 = updatePropsIf(x=>x>0,4, ["x", "y"]);
      const expected = {x: 0, y: 4};
      const result = updatePropXWith4({x: 0, y: 2});
      expect(result).toEqual(expected);
    });
  });

  describe("updateObjectsProps", () => {
    test('should return updated objects array', () => {
      const updatePropXWith4 = updateObjectsProps(4, ["x", "y"]);
      const expected = [{x: 4, y: 4}];
      const result = updatePropXWith4([{x: 1, y: 2}]);
      expect(result).toEqual(expected);
    });

    test('should return updated objects array for function value', () => {
      const updatePropXWith4 = updateObjectsProps(()=>4, ["x", "y"]);
      const expected = [{x: 4, y: 4}];
      const result = updatePropXWith4([{x: 1, y: 2}]);
      expect(result).toEqual(expected);
    });
  });

  describe("updateObjectsPropsIf", () => {
    test('Should update objects if condition is true', () => {
      const updatePropX = updateObjectsPropsIf(x => x > 0, 4, ["x", "y"]);
      const expected = [{x: 4, y: 0}];
      const result = updatePropX([{x: 1, y: 0}]);
      expect(result).toEqual(expected);
    });
  });
});

