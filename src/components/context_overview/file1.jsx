import { useContext } from 'react'
import { userContext } from './context/UserContext';

function ContextFirst() {
    const userData = useContext(userContext);
    return (
        <div>
            <p><strong>Id: </strong>{userData.id}</p>
            <p><strong>Name: </strong>{userData.name}</p>
        </div>
    )
}

export default ContextFirst;