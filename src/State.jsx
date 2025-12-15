import { useState } from "react";
import Counter from "./Counter";

function State() { //State is used as the container for data but it is different from variable because when state changes it re-renders the component. We have to import useState from react to use state in functional component. It is mutable and dynamic in nature.

    //Test without State

    // let fruit = "Banana";
    // let count = 10;

    // const handleFruit=() => {
    //     fruit = "Mango";
    //     count = 20;
    //     alert(fruit);
    // }
    // return (
    //     <div>
    //         <h1>State Component </h1>
    //         <h2>Fruit Name: {fruit} </h2>
    //         <h2>Count: {count} </h2>
    //         <button onClick={handleFruit} > Change the fruit name </button>
    //     </div>
    // )


    //Test with State

    const [fruit, setFruit] = useState("Banana");
    const handleFruit =()=>{
        setFruit("Mango");
        alert("The new Fruit is "+ fruit);
    }
    return(
        <div>
            <h1>State Component </h1>
            <h2>Fruit Name: {fruit} </h2>
            <button onClick ={handleFruit}> Change Fruit name</button>
            <Counter />
        </div>
    )
}

export default State