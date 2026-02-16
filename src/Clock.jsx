import { useEffect, useState } from "react";
const Clock = ({color}) => {
    const[time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    })
    return(
        <div>
            <h1 style={{color: color, backgroundColor: 'black', width: "220px"}}>{time}</h1>
        </div>
    )
}
export default Clock;