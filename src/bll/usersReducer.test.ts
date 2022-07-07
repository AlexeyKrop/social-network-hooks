import {addUserAC, removeUserAC, setUsersAC, usersReducer} from "./usersReducer";
import {UserType} from "../api/api";

type StateType = {
  users: UserType[]
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
        id: 3,
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
  let endState = usersReducer(startState, setUsersAC(startState.users))
  expect(endState.users.length).toBe(3)
})
test('check add user', () => {
  let endState = usersReducer(startState, addUserAC(1))
  expect(endState.users[0].followed).toBe(false)
})
test('check remove user', () => {
  let endState = usersReducer(startState, removeUserAC(1))
  expect(endState.users.length).toBe(2)
})