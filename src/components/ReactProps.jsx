import { useState } from "react";
import { useEffect } from "react";

function ReactProps() {

    const [dataitems, setDataitems] = useState({
        name: 'Mayur Rogheliya',
        city: 'Rajkot',
        collage: 'RKU',
        display: true,
        number: 1,
    });

    useEffect(() => {
        // const interval = setTimeout(() => {
        const interval = setInterval(() => {
            setDataitems((prev) => ({ ...prev, number: prev.number + 1 }))
        }, 3000)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                <h3>My name is {dataitems.name}</h3>
                <h3>I am from {dataitems.city}</h3>
                <h3>My college name is {dataitems.collage}</h3>
                <button type="button" disabled={dataitems.display} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Connect With Me</button>
                <h3>My number is {dataitems.number}</h3>
            </div>
        </>
    )
}

export default ReactProps
