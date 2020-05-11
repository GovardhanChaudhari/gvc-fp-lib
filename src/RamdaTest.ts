// @ts-nocheck
/*

import R from "ramda";
import {log} from "util";

const passResToFun = (func,res) => func(...res);
const removeNParams = (numberOfParamsToRemove) => R.curry((...params) => R.remove(0, numberOfParamsToRemove, params));
const removeOneParam = removeNParams(1);
const pipeWith = R.pipeWith(passResToFun);
const updateProp = R.curry((value, name, obj) =>
  ({...obj, ...{[name]: value}}));

const simpleUpdateProp = pipeWith([removeOneParam,updateProp]);

const rp1 = pipeWith([removeOneParam,removeOneParam]);
// log(rp1(1,2,3));
log(simpleUpdateProp(1,5,"x",{x:1}));
*/
