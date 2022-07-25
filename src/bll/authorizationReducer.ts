import {Dispatch} from "redux";
import {authMe} from "../api/api";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: AuthATypes) => {
  switch (action.type) {
    case "AUTH/SET-PROFILE-DATA":
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth
      }
  }
  return state
}

//ActionsCreator
const setProfileDataAC = (id: number, email: string, login: string, isAuth: boolean) => ({
  type: 'AUTH/SET-PROFILE-DATA',
  data: {id,email, login, isAuth}
} as const)

//Thunks
export const authMeTC = () => {
  return (dispatch: Dispatch) => {
    authMe.me()
      .then(res => {
        let {id, email, login} = res.data.data
        dispatch(setProfileDataAC(id, email, login, true))})
  }
}
export const loginTC = (email: string, password: string) => {
  return (dispatch: any) => {
    authMe.login(email, password)
      .then(res => {
        dispatch(authMeTC())
      })
  }
}

//Type
type InitialStateType = {
  id: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean
}
type AuthATypes = SetProfileDataAT
type SetProfileDataAT = ReturnType<typeof setProfileDataAC>