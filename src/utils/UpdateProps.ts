import R from "ramda";
import {updateProp, updatePropIf} from "./UpdateProp";

// @ts-ignore
export const updateProps = R.curry((value, names, obj) =>  names.reduce((acc, name) => updateProp(value, name, acc), obj));

// @ts-ignore
export const updatePropsWith = R.curry((value, names, obj) => names.reduce((acc, name) => updateProp(value, name, acc), obj));

// @ts-ignore
export const updateObjectsProps = R.curry((value, names, objects) =>  objects.map(obj => names.reduce((acc, name) => updateProp(value, name, acc), obj)));

// @ts-ignore
export const updateObjectsPropsIf = R.curry((pred, value, names, objects) => objects.map(obj => names.reduce((acc, name) => updatePropIf(pred, value, name, acc), obj)));

// @ts-ignore
export const updateObjectsPropsWith = R.curry((value, names, objects) =>  objects.map(obj => names.reduce((acc, name) => updateProp(value, name, acc), obj)));

// @ts-ignore
export const updateObjectsPropsIfWith = R.curry((pred, value, names, objects) =>  objects.map(obj => names.reduce((acc, name) => updatePropIf(pred, value, name, acc), obj)));
