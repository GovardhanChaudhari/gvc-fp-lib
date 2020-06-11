import R from "ramda";
import {updateProp, updatePropIf} from "./UpdateProp";
import {
  createObjectsMapFunc,
  createNamesReduceFunc,
  createObjectsMapFuncIf,
  createNamesReduceFuncIf
} from "./CommonUtils";

const createUpdateObjectIf = R.curry((createFuc, pred, value, names, objects) =>
  createFuc(pred, updatePropIf, value, names, objects));

export const updateProps = createNamesReduceFunc(updateProp);

export const updatePropsIf = createUpdateObjectIf(createNamesReduceFuncIf);

export const updateObjectsProps = createObjectsMapFunc(updateProp);

export const updateObjectsPropsIf = createUpdateObjectIf(createObjectsMapFuncIf);

