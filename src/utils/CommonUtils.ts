// @ts-nocheck
// Note that following functions may mutate object var
import R from "ramda";

//TODO: Add parameter information for each function
export const isNull = R.isNil;

export const falseValue = R.F;

export const isString = R.is(String);

export const stringToArray = JSON.parse;

export const isBoolean = R.is(Boolean);

export const isFunction = R.is(Function);

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
export const removeOneParam = (...params) => R.remove(startFromFirst, 1 , params);

export const arrayToCommaSeparatedParams = func => array => func(...array);

export const executeValFunc = (val, name, obj) => [val(obj[name]), name, obj];

export const isPredicateTrue = (predicate, value, name, obj) => predicate(obj[name]);

export const passResToFun = (func,res) => func(...res);

// @ts-ignore
export const pipeFunc = R.pipeWith(passResToFun);


