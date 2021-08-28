///javascript class
class Student{
    name;
    id;
    class;
    constructor(n,i,c){
        this.name = n;
        this.id = i;
        this.class = c;        
    }; 
    detail(){
        console.log(this.name,this.id,this.class);
    }
}
const abul = new Student('abul',56,7);
// console.log(abul);
// abul.detail();
const babul = new Student('babul',10,7);
// console.log(babul);
// babul.detail();




