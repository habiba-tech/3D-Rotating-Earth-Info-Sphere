const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Habiba" },
    { id: 2, name: "Anam"}
];

app.get("/students", (req, res) => {
    res.send(students);
});

app.get("/students/:id", (req, res) => {
    const id  = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.send(student);
});
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(newStudent);
    res.status(201).send(newStudent);
});

app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    student.name = req.body.name;
    res.send(student);

});

app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    students = students.filter(s => s.id !== id);
    res.send("Student deleted");
});

app.listen(4000, () => {
    console.log("Server is running at http://localhost:4000");
});