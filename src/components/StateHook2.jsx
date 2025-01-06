import { useState } from 'react';
const ColorChange = () => {
    const [color, setColor] = useState(null);
    return (
        <>
            <div style={{ backgroundColor: color, height: "100vh", width: "100%" }}>
                <input type="radio" name="clr" value="green" id="green" onClick={(e) => setColor(e.target.value)} />{"Green"}
                <input type="radio" name="clr" value="red" id="red" onClick={(e) => setColor(e.target.value)} />{"Red"}
                <input type="radio" name="clr" value="blue" id="blue" onClick={(e) => setColor(e.target.value)} />{"Blue"}
                <input type="radio" name="clr" value="yellow" id="yellow" onClick={(e) => setColor(e.target.value)} />{"Yellow"}
            </div >
        </>
    )
}

export default ColorChange;