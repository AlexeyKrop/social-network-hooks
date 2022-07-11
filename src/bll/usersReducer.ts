import {userAPI, UserType} from "../api/api";
import {Dispatch} from "redux";
import {setAppLoadingAC} from "./state/appReducer";

const initialState = {
  users: [] as Array<UserType>,
  page: 1,
  fetching: true
}
export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT) => {
  switch (action.type) {
    case "SET-USER":
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    case "ADD-USER":
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
      }
    case "REMOVE-USER":
      return {
        ...state,
        users: state.users.filter(u => u.id !== action.id)
      }
    case "INC-PAGE":
      return {
        ...state,
        page: action.page + 1
      }
    case "CHANGE-FETCHING":
      return {
        ...state,
        fetching: action.fetching
      }
  }
  return state
}
//Actions
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)
export const addUserAC = (id: number) => ({type: 'ADD-USER', id} as const)
export const removeUserAC = (id: number) => ({type: 'REMOVE-USER', id} as const)
export const setCurrentPageAC = (page: number) => ({type: 'INC-PAGE', page} as const)
export const setFetchingPageAC = (fetching: boolean) => ({type: 'CHANGE-FETCHING', fetching} as const)
//Thunk
export const getUserTC = (currentPageNumber: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    userAPI.getUser(currentPageNumber, pageSize)
      .then(res => {
          dispatch(setUsersAC(res.data.items))
          dispatch(setAppLoadingAC("idle"))
        }
      )
  }
}
//Type
export type InitialStateType = typeof initialState
export type UsersReducerAT = SetUserAT | AddUserAT | RemoveUserAT | SetFetchingPageAT | SetCurrentPageAT
type SetUserAT = ReturnType<typeof setUsersAC>
type AddUserAT = ReturnType<typeof addUserAC>
type RemoveUserAT = ReturnType<typeof removeUserAC>
type SetFetchingPageAT = ReturnType<typeof setFetchingPageAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>