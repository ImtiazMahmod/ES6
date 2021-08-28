//problem 1 const let
///push pop shift unshift in array on const 

const array = [5,6,65,6];
array.push(51);
array.shift(5);
array.unshift(45);
// console.log(array[1]);
// console.log(array);

///add or change in object on const
const obj = {
    name: 'abul',
    id: 454
}
obj.name = 'laptop';
obj.price = 454656;
// console.log(obj);


///problem 2 template string
const name1 = 'kalam';
const students = {
    class: 'seven',
    subjects: 'bangla',
    gpa: '4.85'
}
const student =`Mr ${name1} is a good person.And He got GPA-${students.gpa}.He reads in class ${students.class} `
// console.log(student);

///problem 3 arrow function
const oneArrow = a=>a/5;
// console.log(oneArrow(5));

const twoArrow = (a,b)=> ((a+2)*(b+2))    
// console.log(twoArrow(5,5));

const threeArrow = (a,b,c)=> a*b*c;   
// console.log(threeArrow(2,2,2));

const twoArrows = (a,b)=>  
{
    const x= a+2;
    const y = b+2;
    return sum = x*y;
}
// console.log(twoArrows(5,5));

///prolem 5 map
const numbers = [1,2,3,4,56,7,9,12,6,6,4,35];
const newNumbers = numbers.map(n=>n*5);
// console.log(newNumbers);

//problem 6 filter
///if n is even, n%2 will return 0 and the item will be removed by the filter.

const numArray = [1,65,65,689,89,565,98,956,,4587,89,56,26,663];
const odd = numArray.filter(n=>n%2);
// const odd = numArray.filter(n=>n%2===1);
// console.log(odd);
 
//problem 7
const obj1 = [
    {name: 'laptop',price: 454666},
    {name: 'mobile',price: 5000},
    {name: 'adapter',price: 1266}
]

const price1 = obj1.find(p=>p.price==5000);
// console.log(price1);
///map iterate and return element to array
///forEach iterate but not return element to array 
// filter iterate and return element to array 
// find iterate and return only element but not to array

///problem 8 destructuring of objecT
obj2 = {
   laptop: {name: 'laptop',price: 454666},
   mobile: {name: 'mobile',price: 5000},
   adapter: {name: 'adapter',price: 1266}
}

const {name,price} = obj2.adapter;
// console.log(name);

// problem 9 destructuring of array
const nums = [989,65,86,56];
const [zero,one,two,three] =nums;
// console.log(three);

///problem 10 arrow function default
const arrowfunc= (x,y,z=7)=> x+y+z;
// console.log(arrowfunc(1,6));

///problem 11 nested object 
const products = {
    brand:{
        name:{
        n1:'hp',n2:'dell',n3:'asus',
        color:{c1:'black',c2:'silver'}
    },
        item: 'laptop',
        price:[56656,65698,546654]
    } 
    
}

// problem 12 optional chaining ?.
const {c1}= products?.brandd?.name.color;
console.log(c1);