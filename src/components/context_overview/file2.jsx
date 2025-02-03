import { useContext } from "react";
import { userContext } from "./context/UserContext";

function ContextSecond() {
    const userData = useContext(userContext);
    return (
        <div>
            <hr />
            <h2>File 2</h2>
            <p><strong>User Id: </strong>{userData.id}</p>
            <p><strong>User Name: </strong>{userData.name}</p>
        </div>
    )
}

export default ContextSecond;