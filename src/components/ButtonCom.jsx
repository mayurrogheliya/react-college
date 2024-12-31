
function ButtonCom({ btn }) {
    return (
        <>
            <div className="mt-5">
                <h2>Button Component</h2>
                <button type='button' className="bg-blue-500 mt-1 text-white px-4 py-2 rounded-md hover:bg-blue-600">{btn}</button>
            </div>
        </>
    )
}

export default ButtonCom
