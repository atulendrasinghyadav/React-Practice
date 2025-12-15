
import { useState } from "react";
const Counter =()=>{
    const [count, setCount] = useState(0);
    const handleCounter=()=>{
        setCount(count + 1);
    }
    const [rcount, setrcount] = useState(10);
    const handleRCounter=()=>{
        setrcount(rcount - 1);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleCounter}>Update Counter</button>
            <h2>R Counter: {rcount}</h2>
            <button onClick={handleRCounter}>Update RCounter</button>
        </div>
    )
}

export default Counter