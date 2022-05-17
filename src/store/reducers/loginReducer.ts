import { LoginActionType } from "../action-types";
import { Action } from "../actions";

interface loginState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: loginState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: loginState = initialState,
  action: Action
): loginState => {
  switch (action.type) {
    case LoginActionType.EMPLOYEE_LOGIN:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case LoginActionType.EMPLOYEE_LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case LoginActionType.EMPLOYEE_LOGIN_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
