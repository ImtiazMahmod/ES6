///optional chaining operator ?.
const student = { 
    id: '56',
    name: 'Md. Abul',
    subject: {
        science: ['math','physics','chemistry','biology'],
        commerce: ['bangla','english','islam shikha'],
        arts: ['economics']
    },   
    degree: {
        ssc: {
            school: 'abul mia school',
            gpa: '5',
            year: '2010'
        },
        hsc: {
            college: 'babul mia college',
            gpa: '5',
            year: '2012'
        }
    }
}

const {id, name}= student;
const {college,gpa,year} = student?.degree?.hsc;
console.log(college);