/*

import R from "ramda";
import {updateProp, updatePropIf, updatePropIfWith, updatePropWith} from "./UpdateProp";

export const updateProps = R.curry((value, names, obj) =>
  names.reduce((acc, name) => updateProp(value, name, acc), obj));

export const updatePropsWith = R.curry((value, names, obj) =>
  names.reduce((acc, name) => updatePropWith(value, name, acc), obj));

export const updateObjectsProps = R.curry((value, names, objects) =>
  objects.map(obj => names.reduce((acc, name) => updateProp(value, name, acc), obj)));

export const updateObjectsPropsIf = R.curry((pred, value, names, objects) =>
  objects.map(obj => names.reduce((acc, name) => updatePropIf(pred, value, name, acc), obj)));

export const updateObjectsPropsWith = R.curry((value, names, objects) =>
  objects.map(obj => names.reduce((acc, name) => updatePropWith(value, name, acc), obj)));

export const updateObjectsPropsIfWith = R.curry((pred, value, names, objects) =>
  objects.map(obj => names.reduce((acc, name) => updatePropIfWith(pred, value, name, acc), obj)));
*/
