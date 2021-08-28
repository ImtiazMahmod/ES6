//default parameter and arrow function and template string 

const name = (first= '',last= 'chawdhory')=>{
    return `${first} ${last}`
};
// console.log(name('anam'));

//spread operator

const array = [12,54,6,15];
array.unshift(25);
// console.log(...array);
const obj = {...array};
// console.log(obj);
const y = x => x*x; const x = y(5);
console.log(x);


