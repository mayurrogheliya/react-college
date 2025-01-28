import { useState } from "react";

function Pagination() {
    const myData = [
        { id: 1, name: "Mayur Rogheliya", age: 20, },
        { id: 2, name: "Brijesh Sakhiya", age: 22, },
        { id: 3, name: "Meet Pitroda", age: 21, },
        { id: 4, name: "Ramesh Pandya", age: 23, },
        { id: 5, name: "Suresh Kumar", age: 24, },
        { id: 6, name: "Rajesh Kumar", age: 25, },
        { id: 7, name: "Priyanka Kapoor", age: 26, },
        { id: 8, name: "Deepak Chopra", age: 27, },
        { id: 9, name: "Priyanka Chopra", age: 28, },
        { id: 10, name: "Sachin Tendulkar", age: 29, },
        { id: 11, name: "Virat Kohli", age: 30, },
        { id: 12, name: "Rohit Sharma", age: 31, },
        { id: 13, name: "Rahul Dravid", age: 32, },
        { id: 14, name: "Karthik Rohit", age: 33, },
        { id: 15, name: "Suresh Raina", age: 34, },
        { id: 16, name: "Sachin Tiwary", age: 35, },
        { id: 17, name: "Karan Johar", age: 36, },
        { id: 18, name: "Shikhar Dhoni", age: 37, },
        { id: 19, name: "Shweta Bose", age: 38, },
        { id: 20, name: "Rahul Gandhi", age: 39, },
        { id: 21, name: "Jasprit Bumrah", age: 40, },
        { id: 22, name: "Suresh Kumar Rahul", age: 41, },
        { id: 23, name: "Suresh Rajput", age: 42, },
        { id: 24, name: "Karan Chopra", age: 25, },
        { id: 25, name: "Kartik", age: 25, },
    ];

    const recordPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(myData.length / recordPerPage);
    const currentRecords = myData.slice(
        (currentPage - 1) * recordPerPage,
        currentPage * recordPerPage
    )
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div>
            <table style={{ width: "50%", margin: "20px auto", textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRecords.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        style={{
                            padding: "10px",
                            margin: "5px",
                            cursor: "pointer",
                            backgroundColor: currentPage === index + 1 ? "#007BFF" : "#FFF",
                            color: currentPage === index + 1 ? "#FFF" : "#000",
                            border: "1px solid #007BFF",
                            borderRadius: "5px",
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* <div>
                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPage}</span>
                <button disabled={currentPage === totalPage} onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
            </div> */}
        </div>
    );
}

export default Pagination;
