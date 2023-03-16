

// const number = [1,2,3,4,5,6];

// const even = number.filter((item)=> item % 2 ==0);

// console.log(even);




// =======================================


// const obj = [
//     {
//         name: 'John',
//         age: 20
//     },{
//         name: 'Jane',
//         age: 18
//     },{
//         name: 'Mary',
//         age: 22
//     },{
//         name: 'Mike',
//         age: 23
//     }
// ]

// const obj2 = obj.filter((item)=> item.age > 18);
// console.log(obj2)




// =======================================

const number = [1,2,4,6,5,4,3,2,3,4,5,6,6,5,4,7];
const num = number.filter((item, index, arr)=>{
    return arr.indexOf(item) ===index;
})
console.log(num.sort());