
//  yeh saare array elements ko change kr deta hai 


// const number = [1 ,2,3,4,5,6];
// number.fill(0);
// console.log(number);




const fillArray = (n)=>{
    return Array(n).fill(0).map((_,index)=> index + 1);
}

console.log(fillArray(10));