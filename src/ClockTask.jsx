import { useState } from "react";
import Clock from "./Clock";

function ClockTask() {
    const [color, setColor] = useState("red");
    return (
        <div>
            <h1>Clock task</h1>
            <select onChange={(event) => setColor(event.target.value)}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
            <Clock color = {color}/>
        </div>
    )
}

export default ClockTask;