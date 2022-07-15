import {setFollowUserAC, setUnFollowUserAC, setUsersAC, usersReducer} from "./usersReducer";
import {UserType} from "../api/api";

type StateType = {
  users: UserType[]
  page: number
  fetching: boolean,
  setId: Array<number>
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
    ],
    page: 0,
    fetching: false,
    setId: [1]

  }
})
test('check get users', () => {
  let endState = usersReducer(startState, setUsersAC(startState.users))
  expect(endState.users.length).toBe(3)
})
test('check add user', () => {
  let endState = usersReducer(startState, setFollowUserAC(1))
  expect(endState.users[0].followed).toBe(false)
})
test('check remove user', () => {
  let endState = usersReducer(startState, setUnFollowUserAC(1))
  expect(endState.users.length).toBe(2)
})