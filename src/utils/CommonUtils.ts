// Note that following functions may mutate object var
import R from "ramda";
//TODO: Add parameter information for each function

export const isNull = R.isNil;

export const not = R.complement;

export const falseValue = R.F;

export const isString = R.is(String);

export const stringToArray = JSON.parse;

export const isBoolean = R.is(Boolean);

export const isFunction = R.is(Function);

export const isObject = R.both(R.is(Object), not(isFunction));

export const trimAndIsEmpty = R.pipe(R.trim, R.isEmpty);

export const isNullOrEmpty = R.either(isNull, R.isEmpty);

export const isUndefined = value => typeof value === 'undefined';

export const isNullOrUndefined = R.either(isNull, isUndefined);

export const isStringEmpty = R.both(isString, R.isEmpty);

export const isTrimmedStringEmpty = R.both(isString, trimAndIsEmpty);

export const toCommaSeparatedString = R.join(",");

export const boolToString = R.when(isBoolean, R.toString);

export const commaSeparated = R.when(Array.isArray, R.join(","));

const startFromFirst = 0;

export const removeOneParam = (...params) => R.remove(startFromFirst, 1, params);

export const arrayToCommaSeparatedParams = func => array => func(...array);

export const executeValueFunc = (val, name, obj) => [val(obj[name]), name, obj];

export const isPredicateTrue = (predicate, value, name, obj) => {
  let finalPredicate = isObject(predicate) ? predicate[name] : predicate;
  return finalPredicate(obj[name]);
};

export const passResToFun = (func, res) => func(...res);

export const paramToFunc = p => () => p;

export const toFunction = R.unless(isFunction, paramToFunc);

export const toEvolveFunctionParam = (key, value) => ({[key]: toFunction(value)});
