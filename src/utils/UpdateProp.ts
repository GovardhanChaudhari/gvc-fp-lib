import R from "ramda";
import {
  pipeFunc,
  isFunction,
  executeValFunc,
  isPredicateTrue,
  removeOneParam,
} from "./CommonUtils";

const inputObject = R.nthArg(3);

export const updateProp = R.curry((value, name, obj) =>
  ({...obj, ...{[name]: value}}));

export const funcUpdatePropWith = pipeFunc([executeValFunc, updateProp]);

export const simpleUpdateProp = pipeFunc([removeOneParam, updateProp]);

export const updatePropWith = R.ifElse(isFunction, funcUpdatePropWith, updateProp);

export const updatePropWith3Params = pipeFunc([removeOneParam, updatePropWith]);

export const updatePropIf = R.ifElse(isPredicateTrue, simpleUpdateProp, inputObject);

export const updatePropIfWith = R.ifElse(isPredicateTrue, updatePropWith3Params, inputObject);
