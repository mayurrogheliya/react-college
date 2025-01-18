import { useEffect, useRef } from "react";
import { useState } from "react";

function userData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 118, name: "Mayur Rogheliya" });
        }, 2000);
    })
}

const ApiSimulation = () => {
    const [id, setId] = useState("Loading...");
    const [name, setName] = useState("Loading...");
    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current === false) {
            console.log(1);
            userData()
                .then(
                    (data) => {
                        setId(data.id);
                        setName(data.name);
                    }
                );
        }
        effectRan.current = true;
    }, []);
    return (
        <>
            <p><strong>Id</strong> : {id}</p>
            <p><strong>Name</strong> : {name}</p>
        </>
    )
}

export default ApiSimulation;