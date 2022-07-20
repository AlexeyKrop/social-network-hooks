import {Dispatch} from "redux";
import {authMe} from "../api/api";

const initialState = {
  id: null,
  email: null,
  password: null,
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


//Type
type InitialStateType = {
  id: null | number,
  email: null | string,
  password: null | string,
  isAuth: boolean
}
type AuthATypes = SetProfileDataAT
type SetProfileDataAT = ReturnType<typeof setProfileDataAC>