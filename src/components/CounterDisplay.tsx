import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CounterDisplay = () => {
  const value = useSelector((state: RootState) => state.count);

  return <div className="display-panel">Поточне значення лічильника: {value}</div>;
};

export default CounterDisplay;