import { useState } from "react";
const FontWeight = () => {
    const [fstyle, setFstyle] = useState({ fontStyle: "normal", fontWeight: "normal ", textDecoration: "none" });

    const handleClick = (styleType, value) => {
        setFstyle((prev) => ({
            ...prev,
            [styleType]: value,
        }))
    }

    const resetStyle = () => {
        setFstyle({ fontStyle: "normal", fontWeight: "normal ", textDecoration: "none" });
    }
    
    return (
        <>
            <h1 id="myname" style={fstyle}>My name is mayur rogheliya</h1>
            <div className="mt-5 gap-x-4">
                <div>
                    <label htmlFor="italic">Italic</label>
                    <input type="radio" name="fs" id="italic" onClick={() => handleClick("fontStyle", "italic")} />
                </div>
                <div>
                    <label htmlFor="bold">Bold</label>
                    <input type="radio" name="fs" id="bold" onClick={() => handleClick("fontWeight", "bold")} />
                </div>
                <div>
                    <label htmlFor="underline">Undrline</label>
                    <input type="radio" name="fs" id="underline" onClick={() => handleClick("textDecoration", "underline")} />
                </div>
                <div>
                    <label htmlFor="reset">Reset</label>
                    <input type="radio" name="fs" id="reset" onClick={resetStyle} />
                </div>
            </div>
        </>
    )
}

export default FontWeight;