import {authMe} from "../api/api";
import {Dispatch} from "redux";

const initialState = {
  loading: 'loading' as RequestStatusType,
  initialized: false
}
export const appReducer = (state: InitialStateType = initialState, action: AppReducerAT) => {
  switch (action.type) {
    case "APP/SET-LOADING":
      return {
        ...state,
        loading: action.loading
      }
    case "APP/SET-APP-INITIAL":
      return {
        ...state,
        initialized: action.value
      }
    default:
      return state
  }
}



//ACTIONS CREATOR
export const setAppLoadingAC = (loading: RequestStatusType) => ({type: 'APP/SET-LOADING', loading} as const)
export const setAppInitialAC = (value: boolean) => ({type: 'APP/SET-APP-INITIAL', value} as const)

//THUNK
export const appInitialTC = () => (dispatch: Dispatch) => {
  authMe.me()
    .then(res => {
      dispatch(setAppInitialAC(true))
    })
}

//TYPES
type InitialStateType = typeof initialState
export type AppReducerAT = SetAppLoadingAT | SetAppInitialAT
type SetAppLoadingAT =  ReturnType<typeof setAppLoadingAC>
type SetAppInitialAT =  ReturnType<typeof setAppInitialAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'