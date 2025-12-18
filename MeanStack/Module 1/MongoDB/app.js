const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB') //DATABASE NAME
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    roll : Number,
    name : String,
    course: String,
    age : Number

});

const Student = mongoose.model('Student', studentSchema);

// Create a new student
const student1 = new Student({
    roll: 1,
    name: "Habiba",
    course: "Computer Science",
    age: 18
});

student1.save().then(() => {
    console.log('Student record inserted');    
    mongoose.connection.close();});
