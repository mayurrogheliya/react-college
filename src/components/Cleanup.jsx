import { Promise } from "bluebird";
import { useEffect } from "react";
import { useState } from "react"

function UserComponent() {
    const [id, setId] = useState("Loading...");
    const [name, setName] = useState("Loading...");

    function UserData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: 118, name: "Mayur Rogheliya" });
            }, 2000);
        })
    }

    useEffect(() => {
        const promise = UserData().then((data) => {
            setId(data.id);
            setName(data.name);
        })
        return () => {
            promise.cancel();
        }
    })

    return (
        <div>
            <p><span className="font-bold">Id</span>: {id}</p>
            <p><span className="font-bold">Name</span>: {name}</p>
        </div>
    )
}

export default UserComponent;
