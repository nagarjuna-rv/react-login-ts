import axios from "axios";
import { LoginActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const seachRepositories = (term: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({
    type: LoginActionType.EMPLOYEE_LOGIN,
  });

  try {
    const { data } = await axios.get(
      "http://registry.npmjs.com/-/v1/search?text=" + term
    );

    const names = data.objects.map((result: any) => result.package.name);

    dispatch({
      type: LoginActionType.EMPLOYEE_LOGIN_SUCCESS,
      payload: names,
    });
  } catch (error: any) {
    dispatch({
      type: LoginActionType.EMPLOYEE_LOGIN_ERROR,
      payload: error.message,
    });
  }
};
