// duplicate array number ko alag alag array me dalna like this output // [ [ 5, 5, 5, 5, 5, 5 ], [ 3, 3 ], [ 1, 1, 1 ], [ 2, 2 ], [ 6, 6 ] ]

const array = [5,3,5,7,5,1,2,5,6,5,1,2,4,5,3,6,1];


const arr = [...new Set(array)] //remove duplicate number
// console.log(arr)

const dup = arr.filter(a => array.filter(b => b === a).length >1).map(num => array.filter(c => c === num))
console.log(dup)
