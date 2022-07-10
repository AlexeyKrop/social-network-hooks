import {profileAPI, ProfileUserType, userAPI} from "../api/api";
import {Dispatch} from "redux";
import {setAppLoadingAC} from "./state/appReducer";

const initialState = {
  profile: {} as ProfileUserType,
  status: '' ,
}
export const profileReducer = (state: InitialState = initialState, action: ProfileReducerAT) => {
  switch (action.type) {
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile
      }
    case "SET-STATUS":
      return {
        ...state,
        status: action.status
      }
    case "UPDATE-PROFILE":
      return {
        ...state,
        profile: action.profile
      }

  }
  return state
}

//ACTIONS CREATOR
export const setUserAC = (profile: ProfileUserType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)
export const updateProfileAC = (profile: ProfileUserType) => ({type: 'UPDATE-PROFILE', profile} as const)

//THUNKS CREATOR
export const fetchProfileTC = (id: number) => {
  return (dispatch: Dispatch) => {
    userAPI.getProfilePageUser(id)
      .then(res => {
        dispatch(setUserAC(res.data))
        dispatch(setAppLoadingAC("idle"))
      })

  }
}
export const getProfileStatusTC = (id: number) => {
  return (dispatch: Dispatch) => {
    profileAPI.getStatus(id)
      .then(res => dispatch(setStatusAC(res.data)))
  }
}
export const updateStatusTC = (status: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
      .then(() => dispatch(setStatusAC(status)))
  }
}
//TYPES
type InitialState = typeof initialState
export type ProfileReducerAT = SetUserAT | SetStatusAT | UpdateProfileAT
export type SetUserAT = ReturnType<typeof setUserAC>
export type SetStatusAT = ReturnType<typeof setStatusAC>
export type UpdateProfileAT = ReturnType<typeof updateProfileAC>
