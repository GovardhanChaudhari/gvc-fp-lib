import R from "ramda";
import {log} from "util";

const name='x';
const names = [name,"y"];
const value = 4;
const obj = {x:1,y:2};
const objs = [obj,{x:3,y:4}];
const updateProp = R.curry((value, name, obj) =>
  ({...obj, ...{[name]: value}}));

// const mup = R.curry((name,objs,value)=>R.map(updateProp(value,name),objs));
const mup = R.map(updateProp(R.nthArg(0),R.nthArg(1)),R.nthArg(2));

log(mup(4,"x",objs));


// const rUpdateProp = R.curry((acc, name, value) =>{updateProp(value,name,acc)});


// const c = R.curry((a,b,c)=>[a,b,c]);
// log(c(R.__,2,3)(1,));
// const rUpdateProp = updateProp(R.__,name,obj);
//log(updateProp(R.__,name,obj)(4));

// const nUpdateProps = pipeFunc([rUpdateProp,R.reduce]);
// log(nUpdateProps(obj,names)(4));

/*const rUpdateProp = R.curry((name, obj,value) =>
  ({...obj, ...{[name]: value}}));*/



// const rUpdateProp = pipeFunc([removeOneParam,updateProp]);
// log(rUpdateProp(4,name,obj)(4));
// export const updateProps = R.curry((value, names, obj) =>  names.reduce((acc, name) => updateProp(value, name, acc), obj));
// log(updateProps(4,names,obj));

// const rdUpdateProp = (acc,name)=>updateProp();

// const r = (acc,name)=> {acc.push(name);return acc};
// const updateProps = R.reduce((acc,name)=>updateProp)
// log(R.reduce(r,[],names));
