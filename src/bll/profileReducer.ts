import {ProfileUserType} from "../api/api";

const initialState = {
  profile: {} as ProfileUserType
}
export const profileReducer = (state: InitialState, action: ProfileReducerAT) => {
  switch (action.type){
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile
      }
  }
  return state
}

//ACTIONS
export const setUser = (profile: ProfileUserType) => ({type: 'SET-USER-PROFILE', profile} as const)
//TYPES
type InitialState = typeof initialState
export type ProfileReducerAT = SetUserAT
export type SetUserAT = ReturnType<typeof setUser>
