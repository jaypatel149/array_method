
// string elements convert to Array  and take a callback funtion return number 

// const str = "1234567";

// const res = Array.from(str ,(x) => Number(x));

// console.log(res); // [1,2,3,4,5,6,7]






// -----------------------------------

// remove the duplicate number in array 

const num = [1,2,3,3,4,4,2,1,4,3,2,1,5];

const res =  Array.from(new Set(num))
console.log(res);





