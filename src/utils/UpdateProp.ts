import R from "ramda";
import {
  pipeFunc,
  isFunction,
  executeValueFunc,
  isPredicateTrue,
  removeOneParam,
} from "./CommonUtils";

const inputObject = R.nthArg(3);

const updateProp = R.curry((value, name, obj) =>
  ({...obj, ...{[name]: value}}));

const funcUpdatePropWith = pipeFunc(executeValueFunc, updateProp);

const updatePropWith = R.ifElse(isFunction, funcUpdatePropWith, updateProp);

const updatePropWith3Params = pipeFunc(removeOneParam, updatePropWith);

const updatePropIfWith = R.ifElse(isPredicateTrue, updatePropWith3Params, inputObject);

export {
  updatePropWith as updateProp,
  updatePropIfWith as updatePropIf
}
