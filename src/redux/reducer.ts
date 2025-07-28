import { CounterActionTypes } from "./actionTypes";
import { CounterActions } from "./actions";
import { CounterState } from "../types";

const initialState: CounterState = {
  count: 0
};

const counterReducer = (
  state = initialState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { count: state.count + 1 };
    case CounterActionTypes.DECREMENT:
      return { count: state.count - 1 };
    case CounterActionTypes.RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default counterReducer;