// Note that following functions may mutate object var
import R from "ramda";
import {addProp} from "./AddProp";
import {updateProp, updatePropIf} from "./UpdateProp";

//TODO: Add parameter information for each function
export const isNull = R.isNil;

export const falseValue = R.F;

export const isString = R.is(String);

export const stringToArray = JSON.parse;

export const isBoolean = R.is(Boolean);

export const isFunction = R.is(Function);

export const isObject = R.both(R.is(Object),R.complement(isFunction));

export const trimAndIsEmpty = R.pipe(R.trim, R.isEmpty);

export const isNot = func => (...args) => !func(...args);

export const isNullOrEmpty = R.either(isNull, R.isEmpty);

export const isUndefined = value => typeof value === 'undefined';

export const isNullOrUndefined = R.either(isNull, isUndefined);

export const isStringEmpty = R.allPass([isString, R.isEmpty]);

export const isTrimmedStringEmpty = R.ifElse(isString, trimAndIsEmpty, falseValue);

export const commaSeparatedString = R.join(",");

export const boolToString = R.ifElse(isBoolean, R.toString, R.identity);

export const commaSeparated = R.ifElse(Array.isArray, R.join(","), R.identity);

const startFromFirst = 0;

// Return array
// export const removeNParams = (numberOfParamsToRemove) => R.curry((...params) => R.remove(startFromFirst, numberOfParamsToRemove, params));
// const removeOneParam = removeNParams(1);
export const removeOneParam = (...params) => R.remove(startFromFirst, 1, params);

export const arrayToCommaSeparatedParams = func => array => func(...array);

export const executeValueFunc = (val, name, obj) => [val(obj[name]), name, obj];

export const isPredicateTrue = (predicate, value, name, obj) => {
  let finalPredicate = isObject(predicate) ? predicate[name] : predicate;
  return finalPredicate(obj[name]);
};

export const passResToFun = (func, res) => func(...res);

export const pipeFunc = (...params) => R.pipeWith(passResToFun, params);

export const paramToFunc = p => () => p;

export const toFunction = R.unless(isFunction, paramToFunc);

export const toEvolveFunctionParam = (key, value) => ({[key]: toFunction(value)});

export const createIfFunc = R.curry((func, pred, value, name, obj) => {
  if(isObject(pred) && isUndefined(pred[name])) return obj;

  return isPredicateTrue(pred, value, name, obj)
    ? func(value, name, obj)
    : obj;
});

export const createNamesReduceFunc = R.curry((func, value, names, obj) =>
  R.reduce((acc, name) => func(value, name, acc), obj, names));

const createIteratorIfFunc = R.curry((itrCreateFunc, pred, func, value, names, objects) =>
  itrCreateFunc(func(pred), value, names, objects));

export const createNamesReduceFuncIf = createIteratorIfFunc(createNamesReduceFunc);

export const createObjectsMapFunc = R.curry((func, value, names, objects) =>
  R.map(createNamesReduceFunc(func, value, names), objects));

export const createObjectsMapFuncIf = createIteratorIfFunc(createObjectsMapFunc);
