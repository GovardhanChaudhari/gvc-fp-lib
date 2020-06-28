import R from "ramda";
import { toEvolveFunctionParam } from "./CommonUtils";
import { createIfFunc } from "./Helpers";

const updateProp = R.curry((value, name, obj) =>
  R.evolve(toEvolveFunctionParam(name, value), obj)
);

const updatePropIf = createIfFunc(updateProp);

export { updateProp, updatePropIf };
