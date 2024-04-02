import { INC, DEC } from "./actions";
export function incrementReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case INC:
      return { counter: state.counter + 1 };
    case DEC:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

