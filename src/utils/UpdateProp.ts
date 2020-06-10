import R from "ramda";
import {
  isPredicateTrue,
  toEvolveFunctionParam,
} from "./CommonUtils";

const updateProp = R.curry((value, name, obj) => R.evolve(toEvolveFunctionParam(name, value), obj));
const updatePropIf = R.curry((pred, value, name, obj) => isPredicateTrue(pred, value, name, obj) ? updateProp(value, name, obj) : obj);

export {
  updateProp,
  updatePropIf
}
