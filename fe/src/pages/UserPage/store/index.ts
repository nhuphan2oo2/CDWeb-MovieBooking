import { UserType } from "../../../type/type";

export const initUser: UserType = {
  name: "Phan Thi Quynh Nhu",
  birth: "2002-12-31",
  email: "qinhu@gmail.com",
  phone: "0819555888",
};

export const SAVE_CHANGE = "save_change";

export interface ActionType {
  type: string;
  payload: UserType;
}
export const userReducer = (state: UserType, action: ActionType) => {
  switch (action.type) {
    case SAVE_CHANGE:
      return action.payload;
    default:
      throw new Error();
  }
};

export const save_change = (payload: UserType) => {
  return {
    type: SAVE_CHANGE,
    payload,
  };
};
