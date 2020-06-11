import R from "ramda";
import {
  createIfFunc,
  toEvolveFunctionParam,
} from "./CommonUtils";

const updateProp = R.curry((value, name, obj) => R.evolve(toEvolveFunctionParam(name, value), obj));
const updatePropIf = createIfFunc(updateProp);

export {
  updateProp,
  updatePropIf
}
