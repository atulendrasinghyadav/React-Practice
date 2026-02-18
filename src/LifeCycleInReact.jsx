import { useEffect, useState } from "react";

function LifeCycleInReact() {

    const [display, setDisplay] = useState(true);

    useEffect(()=>{
        console.log("Component Mounted");
        return ()=>{
            console.log("Component Unmounted");
        }
    },[display])

  return (
    <div>
      <h1>Life Cycle In React</h1>
    <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
    </div>
  );
}

export default LifeCycleInReact;