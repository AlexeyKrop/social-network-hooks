import {userAPI, UserType} from "../api/api";
import {Dispatch} from "redux";

const initialState = {
  users: [] as Array<UserType>,
}


export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT) => {
  switch (action.type){
    case "SET-USER":
    return {
      ...state,
      users: [...action.users]
    }
    case "ADD-USER":
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed } : u)
      }
  }
  return state
}
//Actions
export const getUsersAC = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)
export const addUserAC = (id: number) => ({type: 'ADD-USER', id} as const)
//Thunk
export const getUserTC = (currentPageNumber: number = 10, pageSize: number = 10) => {
  return (dispatch: Dispatch) => {
    userAPI.getUser(currentPageNumber, pageSize)
      .then(res => dispatch(getUsersAC(res.data.items)))
  }
}
//Type
export type InitialStateType = typeof initialState
export type UsersReducerAT = getUserAT | addUserAT
type getUserAT = ReturnType<typeof getUsersAC>
type addUserAT = ReturnType<typeof addUserAC>