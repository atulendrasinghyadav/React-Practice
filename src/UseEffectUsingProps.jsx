import CounterProps from "./CounterProps";
import { useState } from "react";
function UseEffectUsingProps(){
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    return(
        <div>
            <h1>This is UseEffectUsingProps component</h1>
            <CounterProps count = {count} data = {data}/>
            <button onClick={() => setCount(count+1)}>Counter: {count}</button>
            <button onClick={() => setData(data+1)}>Set Data: {data}</button>
        </div>
    )
}

export default UseEffectUsingProps;