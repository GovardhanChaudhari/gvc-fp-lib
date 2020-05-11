import R from "ramda";
import {
  pipeFunc,
  fourthArg,
  isFunction,
  executeValFunc,
  isPredicateTrue,
  removeOneParam,
} from "./CommonUtils";

export const updateProp = R.curry((value, name, obj) =>
  ({...obj, ...{[name]: value}}));

export const funcUpdatePropWith = pipeFunc([executeValFunc, updateProp]);

export const simpleUpdateProp = pipeFunc([removeOneParam, updateProp]);

export const updatePropWith = R.ifElse(isFunction, funcUpdatePropWith, updateProp);

export const updatePropWith3Params = pipeFunc([removeOneParam, updatePropWith]);

export const updatePropIf = R.ifElse(isPredicateTrue, simpleUpdateProp, fourthArg);

export const updatePropIfWith = R.ifElse(isPredicateTrue, updatePropWith3Params, fourthArg);
