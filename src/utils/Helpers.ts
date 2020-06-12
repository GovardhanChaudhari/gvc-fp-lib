import R from "ramda";

import {createIteratorIfFunc} from "./FactoryFuncUtils";
import {isObject, isPredicateTrue, isUndefined} from "./CommonUtils";

export const createIfFunc = R.curry((func, pred, value, name, obj) => {
  if (isObject(pred) && isUndefined(pred[name])) return obj;

  return isPredicateTrue(pred, value, name, obj)
    ? func(value, name, obj)
    : obj;
});

export const createNamesReduceFunc = R.curry((func, value, names, obj) =>
  R.reduce((acc, name) => func(value, name, acc), obj, names));

export const createNamesReduceFuncIf = createIteratorIfFunc(createNamesReduceFunc);

export const createObjectsMapFunc = R.curry((func, value, names, objects) =>
  R.map(createNamesReduceFunc(func, value, names), objects));

export const createObjectsMapFuncIf = createIteratorIfFunc(createObjectsMapFunc);
