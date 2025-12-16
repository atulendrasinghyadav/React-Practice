import {useState} from 'react';
import ToggleHTMLComponent from './ToggleHTMLComponent';
function ToggleHTML() {
    //Type 1
    // const[show, setShow] = useState(false);

    //Type 2
    // const[display,setDisplay] = useState(true);

    //Multiple Condition
    const [count, setcount] = useState(0);
    return (
        <div>
            Toggle in React Js
            {/* {
                show ? <div> Hello </div> : null
            } */}

            {/* {
                // display ? <div> Welcome my Boy </div> : null
                display ? <ToggleHTMLComponent /> : null
            } */}

            {/* Multiple Condition */}
            <h1>{count} </h1>
            {
                count == 0 ? <div>Zero</div> 
                : count  == 1 ? <div>One</div>
                : count == 2 ? <div> Two </div>
                : <div> Greater than 2 </div>
            }

            {/* <button onClick={() => setDisplay(!display)}>Toggle</button> */}

            <button onClick={() => setcount(count + 1)}>Update Count</button>
        </div>
    )
}

export default ToggleHTML;