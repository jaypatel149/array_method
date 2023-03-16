// number count ---------------->

// const numbers = [1,2,3,4,5];

// // const sum = numbers.reduce((a, b) => a + b);
// // console.log(sum)

// let sum = 0
// numbers.forEach((item,index,arr)=>{
//     // console.log(item)
//     // console.log(index)
//     // console.log(arr)

//     sum += item;
// })
// console.log(sum)




// letter count -------------->

const letter = ["a","b","c","a","d","b","c","a","b"];

// const count = letter.reduce((a, b) => a + b.length, 0);
// console.log(count)

let count = {};

letter.forEach((item)=>{
    if(count[item]){
        count[item] += 1;
    }else{
        count[item] = 1;
    }
})
console.log(count)      // output { a: 3, b: 3, c: 2, d: 1 }