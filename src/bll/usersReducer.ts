import {userAPI, UserType} from "../api/api";
import {Dispatch} from "redux";

const initialState = {
  users: [] as Array<UserType>
}


export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT) => {
  switch (action.type){
    case "SET-USER":
    return {
      ...state,
      users: [...action.users]

    }
  }
  return state
}
//Type
export type InitialStateType = typeof initialState
export type UsersReducerAT = getUserAT
type getUserAT = ReturnType<typeof getUsersAC>
//Actions
export const getUsersAC = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)
//Thunk
export const getUserTC = (currentPageNumber: number = 10, pageSize: number = 10) => {
  return (dispatch: Dispatch) => {
    userAPI.getUser(currentPageNumber, pageSize)
      .then(res => dispatch(getUsersAC(res.data.items)))
  }
}