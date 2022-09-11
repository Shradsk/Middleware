// function greetTheStudent(studentName){// parameter //named function
//     return `Hello there ${studentName}`;
// }
//fat arrow function
const greetTheStudent = studentName => `Hello there ${studentName}`;

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`;


// const student = ' Mary Jane';
// const greet = greetTheStudent(student);//argument
// console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);


