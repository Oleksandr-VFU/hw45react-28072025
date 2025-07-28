import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from "../redux/actions";
import CounterDisplay from "./CounterDisplay";
import type { AppDispatch } from "../redux/store";

const CounterManager = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <CounterDisplay />
      <div className="managment-panel">
        <button onClick={() => dispatch(increment())}>Збільшити Значення</button>
        <button onClick={() => dispatch(decrement())}>Зменшити Значення</button>
        <button onClick={() => dispatch(reset())}>Скинути Значення</button>
      </div>
    </>
  );
};

export default CounterManager;