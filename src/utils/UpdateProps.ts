import R from "ramda";
import {updateProp, updatePropIf} from "./UpdateProp";

export const updateProps = R.curry((value, names, obj) =>  names.reduce((acc, name) => updateProp(value, name, acc), obj));

export const updatePropsIf = R.curry((pred,value, names, obj) =>  names.reduce((acc, name) => updatePropIf(pred, value, name, acc), obj));

export const updateObjectsProps = R.curry((value, names, objects) =>  objects.map(obj => names.reduce((acc, name) => updateProp(value, name, acc), obj)));

export const updateObjectsPropsIf = R.curry((pred, value, names, objects) => objects.map(obj => names.reduce((acc, name) => updatePropIf(pred, value, name, acc), obj)));
