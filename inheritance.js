//inheritance 
///subclas using extends
///superclass called by super()

class Class {
    constructor(name,id,subject){
        this.name = name ;
        this.id = id ;
        this.subject = subject ;
    }
    classWorks(name){
        this.name = name;
        console.log(this.name + 'go to school');
    }
}

class Student extends Class{
    //to call super class within constructor
    // call super class constructor and pass parameter
    constructor(name,id,subject){
        super(name,id,subject);
       
    }
    ///super() method in constructor method,call parent constructor method and get access to parent properties and method

    studentWorks(name){
        // access to super class function
        this.classWorks(name);
    }
}

const abul  = new Student('anam',56,'bangla');
// console.log(abul);
// abul.studentWorks();
abul.studentWorks('abul');