import { useState } from 'react'
import UserComponent from './Cleanup';

const ShowHideUser = ({ show }) => (show ? <UserComponent /> : null);
function CleanupMaster() {
    const [show, setShow] = useState(false);
    return (
        <div className='m-5'>
            <button type="button" className='py-3 px-6 bg-slate-900 text-white rounded-md mb-3' onClick={() => setShow(!show)}>{show ? "Hide Details" : "Show Details"}</button>
            <ShowHideUser show={show} />
        </div>
    )
}

export default CleanupMaster
