import R from "ramda";
import {updateProp, updatePropIf} from "./UpdateProp";
import {
  createObjectsMapFunc,
  createNamesReduceFunc,
  createObjectsMapFuncIf,
  createNamesReduceFuncIf
} from "./CommonUtils";

export const updateProps = createNamesReduceFunc(updateProp);

export const updatePropsIf = R.curry((pred,value,names,obj)=>
  createNamesReduceFuncIf(pred,updatePropIf,value,names,obj));

export const updateObjectsProps = R.curry((value, names, objects) =>
  createObjectsMapFunc(updateProp,value,names,objects));

export const updateObjectsPropsIf = R.curry((pred,value, names, objects) =>
  createObjectsMapFuncIf(pred,updatePropIf,value,names,objects));
