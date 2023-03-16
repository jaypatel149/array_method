
// find elements name  in array 

// const names = ["jaypatel","anand","pratik","bhopu"];

// const res = names.find((item)=> item === "anand");
// console.log(res)

// --------------------------------------------



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

const res = obj.find((item)=> item.name === "pratik")
console.log(res);