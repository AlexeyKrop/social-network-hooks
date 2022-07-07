import {ProfileUserType} from "../api/api";

const initialState = {
  profile: {} as ProfileUserType,
  status: ''
}
export const profileReducer = (state: InitialState, action: ProfileReducerAT) => {
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

//ACTIONS
export const setUserAC = (profile: ProfileUserType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)
export const updateProfileAC = (profile: ProfileUserType) => ({type: 'UPDATE-PROFILE', profile} as const)
//TYPES
type InitialState = typeof initialState
export type ProfileReducerAT = SetUserAT | SetStatusAT  | UpdateProfileAT
export type SetUserAT = ReturnType<typeof setUserAC>
export type SetStatusAT = ReturnType<typeof setStatusAC>
export type UpdateProfileAT = ReturnType<typeof updateProfileAC>
