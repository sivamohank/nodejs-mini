const fs = require('fs');
const { json } = require('stream/consumers');
let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
}; 

// Writing data Data
let data = JSON.stringify(student);
fs.writeFileSync('student-2.json', data);

//Reading Data
fs.readFile('student-2.json', () => {
    console.log('file readed');
});
let rawdata = fs.readFileSync('student-2.json');
console.log(rawdata);
console.log(student);
//Delecting Data
let okey = JSON.parse(rawdata);

