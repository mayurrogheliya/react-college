import { useState } from "react";

const StateHook = () => {
    const [name, setName] = useState("Mayur");
    return (
        <>
            <div>{name}</div>
            <input className="border-2" type="text" name="nm" id="nm" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}

export default StateHook;