export const initState: StateType = {
  selectedSeats: [],
};
export const ADD_ACTION = "add_selected_seats";
export const REMOVE_ACTION = "remove_selected_seats";

export interface StateType {
  selectedSeats: string[];
}
export interface ActionType {
  type: string;
  payload: string;
}

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ADD_ACTION:
      return { selectedSeats: [...state.selectedSeats, action.payload] };
    case REMOVE_ACTION:
      const newSelectedSeats = [...state.selectedSeats];
      return {
        selectedSeats: newSelectedSeats.filter(
          (seat) => seat !== action.payload
        ),
      };
    default:
      throw state;
  }
};

export const add = (payload: string) => {
  return {
    type: ADD_ACTION,
    payload,
  };
};
export const remove = (payload: string) => {
  return {
    type: REMOVE_ACTION,
    payload,
  };
};
