import {useEffect} from "react";

const CounterProps = ({count, data}) => {
    const handleCounter = () => {
        console.log("Counter is clicked");
    }
    useEffect(() => {
        handleCounter();
    }, [])
    const handleData = () => {
        console.log("Data is clicked");
    }
    useEffect(() => {
        handleData();
    }, [data])
    return(
        <div>
            <h4>This is CounterProps component: {count}</h4>
            <h4>Data: {data}</h4>
        </div>
    )
}

export default CounterProps;