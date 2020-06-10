import R from "ramda";
import {
  isPredicateTrue,
} from "./CommonUtils";

const addProp = R.curry((value, name, obj) => R.assoc(name, value, obj));
const addPropIf = R.curry((pred, value, name, obj) => isPredicateTrue(pred, value, name, obj)
  ? addProp(value, name, obj)
  : obj);

export {
  addProp,
  addPropIf
}
