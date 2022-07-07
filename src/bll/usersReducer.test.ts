import {getUsersAC, usersReducer} from "./usersReducer";
import {UserType} from "../api/api";

type StateType = {
  users:UserType[]
}

let startState: StateType


beforeEach(() => {
  startState = {
    users: [
      {
        name: 'Alex',
        id: 1,
        photos: {
          small: null,
          large: null
        },
        status: 'work',
        followed: true,
      },
      {
        name: 'Bob',
        id: 2,
        photos: {
          small: null,
          large: null
        },
        status: 'student',
        followed: true,
      },
      {
        name: 'Hanna',
        id: 2,
        photos: {
          small: null,
          large: null
        },
        status: 'student',
        followed: true,
      },
    ]
  }
})
test('check get users', () => {
  let endState = usersReducer(startState, getUsersAC(startState.users))
  expect(endState.users.length).toBe(3)
})