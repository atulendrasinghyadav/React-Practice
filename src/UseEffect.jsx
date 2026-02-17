import { useState , useEffect } from "react";

function UseEffect() {
    const  [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    function callback(){
        console.log("Calling call back function")
    }
    
    useEffect(()=>{
        callback();
    }, [])
    
    function counterFunction(){
        console.log("Calling counter function")
    }
    useEffect(()=>{
        counterFunction();
    }, [count])

    return(
        <div>
            <h1>UseEffect in React</h1>
            <button onClick={() => setCount(count+1)}>Counter: {count}</button>
            <button onClick={() => setData(data+1)}>Data: {data}</button>
        </div>
    )
}

export default UseEffect;