import { useSelector } from "react-redux";

const CounterDisplay = () => {
    const value = useSelector(state => state.count)

    return <div className="display-panel">Поточне значення лічильника: {value}</div>;
}

export default CounterDisplay;