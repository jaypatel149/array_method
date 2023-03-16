
// all elements testing in array then return boolean value if positive to return true if nagative to return false


// const num = [1,2,3,4,5,6];

// const res = num.every((item)=> item > 0);

// console.log(res);  /// true




// const num = [-1,1,2,3,4,5,6];

// const res = num.every((item)=> item > 0);

// console.log(res);  /// false








// const obj = [
//     {
//         name: 'John',
//     },
//     {
//         name: 'Jane',
//     },{
//         name: 'Mike',
//     },{
//         surname: 'Mary',
//     }
// ]

// const res = obj.every((item)=> item.name !== undefined);

// console.log(res); // false




const arr = [
   [1,2,3],
   [3,4,5],
   [6,7,8]
]

const res = arr.every((item)=> Array.isArray(item));

console.log(res); // ture