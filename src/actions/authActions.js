import { DO_LOGIN, DO_LOGIN_SUCCESS } from "./actionTypes";

export const doLogin=(payload)=>({
    type:DO_LOGIN,
    payload:payload
})
export const doLoginSuccess=(payload)=>({
    type:DO_LOGIN_SUCCESS,
    payload:payload
})