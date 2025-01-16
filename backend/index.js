import express from 'express';
const app = express();
const PORT = 3000
app.use(express.json());

const student = [
    {
        enrllNo: "22SOECE11045",
        name: "Mayur Rogheliya",
        branch: "CE",
        semester: 6,
        division: "A",
        rollNo: 40
    }
]

app.get('/', (req, res) => {
    res.json(student);
});

app.post("/", (req, res) => {
    const { enrllNo, name, branch, semester, division, rollNo } = req.body;
    const studentData = [...student, { enrllNo, name, branch, semester, division, rollNo }];
    res.json(studentData);
})

app.put("/:enrollNo", (req, res) => {
    const { enrollNo } = req.params;
    const { name, branch, semester, division, rollNo } = req.body;
    const updateData = student.map(
        (std) => std.enrllNo === enrollNo ? { name, branch, semester, division, rollNo } : std);
    res.json(updateData);
})

app.delete("/:enrollNo", (req, res) => {
    const { enrollNo } = req.params;
    const deleteData = student.filter((std) => std.enrllNo !== enrollNo);
    res.json(deleteData);
});

app.get("/enrollNo/:enrollNo", (req, res) => {
    const { enrollNo } = req.params;
    const studentData = student.filter((std) => std.enrllNo === enrollNo);
    res.json(studentData);
})

app.get("/name/:name", (req, res) => {
    const { name } = req.params;
    const studentData = student.filter((std) => std.name === name);
    res.json(studentData);
})

app.get("/branch/:branch", (req, res) => {
    const { branch } = req.params;
    const studentData = student.filter(std => std.branch === branch);
    res.json(studentData);
})

app.get("/sem/:sem", (req, res) => {
    const { sem } = req.params;
    const studentData = student.filter(std => std.semester === Number(sem));
    res.json(studentData);
})

app.get("/search", (req, res) => {
    const { enrllNo, name, branch, sem } = req.query;
    let studentData = student;
    if (enrllNo) {
        studentData = studentData.filter(std => std.enrllNo === enrllNo);
    }
    if (name) {
        studentData = studentData.filter(std => std.name === name);
    }
    if (branch) {
        studentData = studentData.filter(std => std.branch === branch);
    }
    if (sem) {
        studentData = studentData.filter(std => std.semester === Number(sem));
    }
    res.json(studentData);
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})