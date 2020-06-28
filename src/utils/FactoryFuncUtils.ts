import R from "ramda";

// create function from other create function
export const createIteratorIfFunc = R.curry(
  (itrCreateFunc, pred, func, value, names, objects) =>
    itrCreateFunc(func(pred), value, names, objects)
);
