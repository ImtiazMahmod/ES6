///spread operator ...
///grab value from array or string
///spread the array or string

const array = [12,54,6,56,98,989,65,66];
// console.log(...array);

///max value and min value from array

const max =Math.max(...array);
const min =Math.min(...array);
// console.log(max);
// console.log(min);

///copy spread arrays
const array2 = [2,3,5,...array]
let array3 = [2,3,6];
///concat array 
// array3 = array3.concat(array2);
//merge two array to another array
array3 = [...array3, ...array2]
// console.log(array3);

const string = 'my name is boy';
const newString = ' and i have a good book';
// console.log(newString);

///spread object 
const obj = { name: 'mr',
    age: 52
};
////copy spread object 
const objNew = { 
    ...obj,
    class: 'four'
};
// console.log(objNew);

///pass spread array as parameter through function
const add = (num1,num2)=> num1 + num2;
const numbers= [5,10];
// console.log(add(...numbers));

///array value spread to as a object
const obj2 = {...array2};

console.log(obj2);