///function expresion (anonymous)
const add2 = function (num1,num2){
    console.log(num1 + num2);
}
//arrow function
 const add1 = (num1,num2)=> num1+ num2;

const sum1 = add1(5,6);
// console.log(sum1);
const sum2= add2(5,6);

const mul = (x,y,z) => x*y*z;

const getMul = mul(4,5,6)
// console.log(getMul);

const fiveTimes = num => num * 5;

const getValue = fiveTimes(5);
// console.log(getValue);

const name = ()=>'Mr. Abul';
console.log(name());

