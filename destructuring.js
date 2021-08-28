///destructuring of object 
///rest object destructuring
///destructuring of array
///rest array destructuring
///swapping variable by destuturing
///default values

const student = {
    id: '56',
    name: 'Md. Abul',
    subject: {
        science: ['math','physics','chemistry','biology'],
        commerce: ['bangla','english','islam shikha'],
        arts: ['economics']
    },
    college: 'Dhaka College'
};

///normally grabing of object data
// console.log(student.subject.science);

//object destructuring

// let {science,commerce,arts} = student.subject;
// const {id,...rest} = student;
///rest for rest object destucturing
 
// console.log(science);
// console.log(arts);
// console.log(college);
// console.log(id,rest);

//default values
let {General=['Phisical Exercise'],commerce,arts} = student?.subject;

// console.log(arts);

///destucturing of array
const subject = ['bangla','english','math','physics','biology'];

let [a,b,...rest]= subject;
//rest for rest of an array 
let [c,d,e,f,g,h='islam shikkha']= subject;
///h is default value
/* console.log(a);
console.log(rest);
console.log(g,h); */

///swapping variable by destructuring
let num1=5,num2=6,num3=9;
[num1,num2,num3] = [num2,num3,num1];
// console.log(num1);

///swapping variable on array
let arr = [45,26,6];
let [x,y,z] = [arr[1],arr[2],arr[0]];
// console.log(x);

const product = {
    name: 'Laptop',
    model:'Yoga 3',
    price: 49000,
    dusk: '512SSD'};
const {price} = product;

console.log(price);