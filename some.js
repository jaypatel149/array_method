
// const num = [1,2,3,4,5,6];
// const b = num.some((item)=> item > 5 )

// console.log(b) ///true

// -------------------------------

// const num = [1,2,3,4,5];
// const b = num.some((item)=> item > 5 )

// console.log(b) ///fasle


// ---------------------


const obj = [
    {
        name:"jay",
        age: 12
    },{
        name:"anand",
        age: 15
    },{
        name:"pratik",
        age:18
    },{
        name:"bhopu",
        age: 19
    }
]

const a = obj.some((item)=>{
    return item.age >=15 ;
})

console.log(a)