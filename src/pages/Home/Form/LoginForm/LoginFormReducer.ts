import {LOGIN_FORM_CONSTANTS} from "./LoginFormConstants";
import {validateEmail, validatePassword} from "./LoginFormValidator";

interface LoginFormReducerStateInterface {
    type: string;
    value: string;
    valid: boolean;
    touched: boolean;
}

interface LoginFormReducerActionInterface {
    type: string;
    value: string;
    touched?: boolean;
    valid?: boolean
}

export const loginFormReducer = (state: LoginFormReducerStateInterface, action: LoginFormReducerActionInterface): LoginFormReducerStateInterface => {
    switch (action.type) {
        case LOGIN_FORM_CONSTANTS.EMAIL:
            return {
                ...action,
                touched: true,
                valid: validateEmail(action.value)
            }
        case LOGIN_FORM_CONSTANTS.PASSWORD:
            return {
                ...action,
                touched: true,
                valid: validatePassword(action.value)
            }
        default: {
            return {
                ...action,
                touched: true,
                valid: false
            }
        }
    }
}