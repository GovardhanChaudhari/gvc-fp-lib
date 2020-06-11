import R from "ramda";
import {
  createIfFunc,
} from "./CommonUtils";

const addProp = R.curry((value, name, obj) => R.assoc(name, value, obj));
const addPropIf = createIfFunc(addProp);

export {
  addProp,
  addPropIf
}
