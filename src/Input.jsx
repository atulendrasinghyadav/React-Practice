import {useState} from 'react'

function Input(){
    const[val,setVal] = useState("User");
    return (
        <div>
            <h1>This is Input Component</h1>
            <input type="text" value = {val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Your Name"/>
            <h2>{val}</h2>
            <button onClick={() => setVal("")}>Clear</button>
        </div>
    )
}

export default Input;