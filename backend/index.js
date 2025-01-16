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

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})