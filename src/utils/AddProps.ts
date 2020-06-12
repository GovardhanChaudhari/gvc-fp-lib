import R from "ramda";
import {addProp, addPropIf} from "./AddProp";

export const addProps = R.curry((value, names, obj) =>
  names.reduce((acc, name) => addProp(value, name, acc), obj));

export const addPropsIf = R.curry((pred, value, names, obj) =>
  names.reduce((acc, name) => addPropIf(pred, value, name, acc), obj));

export const addPropsToObjects = R.curry((value, names, objects) =>
  objects.map(obj => names.reduce((acc, name) => addProp(value, name, acc), obj)));

export const addPropsToObjectsIf = R.curry((pred, value, names, objects) =>
  objects.map(obj => names.reduce((acc, name) => addPropIf(pred, value, name, acc), obj)));
