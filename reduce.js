

const number = [10,2,3,4,5,6];

// const sum = number.reduce((a, b) => a + b);
// console.log(sum)


// find max number =======================================


// const max = number.reduce((a,b) => a > b ? a : b);
// console.log(max)










const obj = [
    {
        name: 'teblet',
        quantity: 3,
        price: 2000
    }, {
        name: 'mixer',
        quantity: 2,
        price: 1500
    }, {
        name: 'leptop',
        quantity: 3,
        price: 3000
    }, {
        name: 'mobile',
        quantity: 5,
        price: 5000
    }
]


const totalCount = obj.reduce((a,b) => a + (b.price * b.quantity),0);
console.log(totalCount)