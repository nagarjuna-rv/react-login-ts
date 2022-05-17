import { LoginActionType } from "../action-types";

interface EmployeeLoginAction {
  type: LoginActionType.EMPLOYEE_LOGIN;
}

interface EmployeeLoginSuccessAction {
  type: LoginActionType.EMPLOYEE_LOGIN_SUCCESS;
  payload: string[];
}

interface EmployeeLoginErrorAction {
  type: LoginActionType.EMPLOYEE_LOGIN_ERROR;
  payload: string;
}

export type Action =
  | EmployeeLoginAction
  | EmployeeLoginSuccessAction
  | EmployeeLoginErrorAction;
