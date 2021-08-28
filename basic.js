// const array = [12,16,65,256];
// array.indexOf(256);
// array.pop();
// let newArray = [];
// for(const value of array){ 
//     newArray.push(value);
//     // console.log(newArray);
// }

// // const ne = array.splice(0,2);
// // console.log(ne);
// console.log(array.indexOf(78));
// const student = {
//     name : 'abul',
//     roll : '31',
//     classes : '8',
//     subjects : ['physis','chemistry','biology','higher math']
// };
// for(const value of student.subjects){
//     console.log(value);
// }

// console.log(student);



///stylize index
document.getElementById('change').addEventListener('click',function(){
    const changeBg = document.getElementsByClassName('class');

for (const bg of changeBg){
    bg.style.backgroundColor = 'lightgray';
    bg.style.padding = '5px 10px';
    bg.style.margin = '7px 2px';
    bg.style.border = '2px solid yellow';
}
})
const student = document.getElementById('blog');
function addDiv(){
    const addDiv = document.createElement('div');
    addDiv.classList.add('class');
    addDiv.innerHTML = `
    <h1 class="student-name">New student</h1>
                <p class="student-details">Consequuntur impedit nisi esse veritatis?</p>
    `

   return student.appendChild(addDiv);
}
document.getElementById('add').addEventListener('click',function(){   
    addDiv();
})

document.getElementById('remove').addEventListener('click',function(){   
    //  student.removeChild(student.firstChild);
     student.removeChild(student.childNodes[0]); 
   
    // student.parentNode.removeChild(student);
    
})