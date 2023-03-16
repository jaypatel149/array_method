

const num = [1,2,3,4,5,6];
// const n = num.splice(2,3);
// console.log(n);   //output [3,4,5]

const deleted = num.splice(2,0,6,7);
console.log(deleted); //output []
