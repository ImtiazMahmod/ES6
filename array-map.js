////array map
///arr.map(function(element, index, array){  }, this);
    //iterate an array
    ///push to an array 
const array = [12,5,65,65,64];

// const arrayNew = array.map(function(element){
//     return element * 2;
// });

// const arrayNew  = array.map(element => element * 2);
const arrayNew  = array.map(function(element ,index,array){
    // console.log(element,index,array);
});
// console.log(arrayNew);

///map array of objects
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];

  const userName = users.map(element => `${element.firstName} ${element.lastName}`);
//   console.log(userName);

///map on string array

const names = ['asif','alim','abdullah','shams'];
const namesLength = names.map(e=>e.length);
// console.log(namesLength);



