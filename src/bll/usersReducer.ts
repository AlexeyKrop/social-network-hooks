import {userAPI, UserType} from "../api/api";
import {Dispatch} from "redux";
import {setAppLoadingAC} from "./state/appReducer";

const initialState = {
  users: [] as Array<UserType>,
  page: 1,
  fetching: true,
}
export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT) => {
  switch (action.type) {
    case "SET-USER":
      return {
        ...state,
        users: [...state.users, ...action.users]
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
    case "SET-FOLLOW":
      return{
        ...state,
        users: state.users.map(u=> u.id === action.id ? {...u, followed: !u.followed}: u)
      }
    case "SET-UNFOLLOW":
      return {
        ...state,
        users: state.users.map(u=> u.id === action.id ? {...u, followed: !u.followed} : u)
      }
  }
  return state
}
//Actions
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)
export const setCurrentPageAC = (page: number) => ({type: 'INC-PAGE', page} as const)
export const setFetchingPageAC = (fetching: boolean) => ({type: 'CHANGE-FETCHING', fetching} as const)
export const setFollowUserAC = (id: number) => ({type: 'SET-FOLLOW', id} as const)
export const setUnFollowUserAC = (id: number) => ({type: 'SET-UNFOLLOW', id} as const)
//Thunk
export const getUsersTC = (currentPageNumber: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    userAPI.getUser(currentPageNumber, pageSize)
      .then(res => {
          dispatch(setUsersAC(res.data.items))
          dispatch(setAppLoadingAC("idle"))
        }
      )
  }
}
export const setFollowTC = (id: number) => {
  return (dispatch: Dispatch) => {
    userAPI.addUser(id)
      .then(res => {
          dispatch(setFollowUserAC(id))
          // dispatch(setAppLoadingAC("idle"))
        }
      )
  }
}
export const setUnFollowTC = (id: number) => {
  return (dispatch: Dispatch) => {
    userAPI.removeUser(id)
      .then(res => {
          dispatch(setUnFollowUserAC(id))
          // dispatch(setAppLoadingAC("idle"))
        }
      )
  }
}
//Type
export type InitialStateType = typeof initialState
export type UsersReducerAT = SetUserAT | SetFetchingPageAT | SetCurrentPageAT | SetFollowUserAT | SetUnFollowUserAT
type SetUserAT = ReturnType<typeof setUsersAC>
type SetFetchingPageAT = ReturnType<typeof setFetchingPageAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type SetFollowUserAT = ReturnType<typeof setFollowUserAC>
type SetUnFollowUserAT = ReturnType<typeof setUnFollowUserAC>