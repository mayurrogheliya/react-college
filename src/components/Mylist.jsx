
function Mylist({ list }) {
    return (
        <>
            <div className="mt-5">
                <h2>MyList Component</h2>
                <div className="mt-1">
                    <ol className="list-decimal pl-5">
                        {list.map((data) => (
                            <li key={data.id}>{data.name}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Mylist