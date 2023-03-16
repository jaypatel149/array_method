//  flat remove the nested array 



const arr = [1,[2,[3, [4,[5]]]]];

const res = arr.flat(Infinity);
console.log(res);