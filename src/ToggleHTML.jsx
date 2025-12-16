import {useState} from 'react';
function ToggleHTML() {
    //Type 1
    // const[show, setShow] = useState(false);

    //Type 2
    const[display,setDisplay] = useState(true);
    return (
        <div>
            Toggle in React Js
            {/* {
                show ? <div> Hello </div> : null
            } */}

            {
                display ? <div> Welcome my Boy </div> : null
            }

            <button onClick={() => setDisplay(!display)}>Toggle</button>
        </div>
    )
}

export default ToggleHTML;