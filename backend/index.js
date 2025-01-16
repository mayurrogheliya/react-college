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
    res.status(200).json({
        status: 200,
        message: "All students data",
        data: student
    });
});

app.post("/", (req, res) => {
    const { enrllNo, name, branch, semester, division, rollNo } = req.body;
    const studentData = [...student, { enrllNo, name, branch, semester, division, rollNo }];
    res.status(201).json({
        status: 201,
        message: "Student created successfully",
        data: studentData
    });
})

app.put("/:enrollNo", (req, res) => {
    const { enrollNo } = req.params;

    const studentExist = student.find(std => std.enrllNo === enrollNo);
    if (!studentExist) {
        return res.status(404).json({
            status: 404,
            message: "Student not found"
        })
    }

    const { name, branch, semester, division, rollNo } = req.body;
    const updateData = student.map(
        (std) => std.enrllNo === enrollNo ? { ...std, name, branch, semester, division, rollNo } : std);

    res.status(200).json({
        status: 200,
        message: "Student updated successfully",
        data: updateData
    });
})

app.delete("delete/:enrollNo", (req, res) => {
    const { enrollNo } = req.params;

    const studentExist = student.find(std => std.enrllNo === enrollNo);
    if (!studentExist) {
        return res.status(404).json({
            status: 404,
            message: "Student not found"
        })
    }

    const deleteData = student.filter((std) => std.enrllNo !== enrollNo);

    res.status(200).json({
        status: 200,
        message: "Student deleted successfully",
        data: deleteData
    });
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

    if (!studentData || studentData.length === 0) {
        return res.status(404).json({
            status: 404,
            message: "No student found with given criteria"
        })
    }
    res.status(200).json({
        status: 200,
        message: "Students found",
        data: studentData
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})