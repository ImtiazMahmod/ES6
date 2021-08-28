///filter from array
///check condition and return element and push to array
const products = [
    {name: 'laptop',price: 105666,color:'silver'},
    {name: 'mobile',price: 15000,color:'navyblue'},
    {name: 'powerbank',price: 5666,color:'red'},
    {name: 'adapter',price: 1666,color:'black'}
]

const expensive = products.filter(product =>product.price > 10000 );
// console.log(expensive);

///find from array
/// check condition and return element
const silver = products.find(product=> product.color =='silver');
console.log(silver);

const nums = [1,2,3,4,5];
 let output = nums.filter(n => n>2);
//   console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const fiveLength = friends.find(friend =>friend.length>= 5);
console.log(fiveLength);
