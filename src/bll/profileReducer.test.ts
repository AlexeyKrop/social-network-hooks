import {ProfileUserType} from "../api/api";
import {profileReducer, setStatusAC, setUserAC, updateProfileAC} from "./profileReducer";

type StateTypeProfile = {
  profile: ProfileUserType
  status: string
}
let startState: StateTypeProfile
beforeEach(() => {
  startState = {
    profile: {},
    status: 'hello'
  } as StateTypeProfile

})
test('set user page profile', () => {
  const model = {
    profile: {
      aboutMe: "я круто чувак 1001%",
      contacts: {
        facebook: "facebook.com",
        website: null,
        vk: "vk.com/dimych",
        twitter: "https://twitter.com/@sdf",
        instagram: "instagra.com/sds",
        youtube: null,
        github: "github.com",
        mainLink: null
      },
      lookingForAJob: true,
      lookingForAJobDescription: "не ищу, а дурачусь",
      fullName: "samurai dimych",
      userId: 2,
      photos: {
        small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
      }
    }
  }
  const endState = profileReducer(startState, setUserAC(model.profile))
  expect(endState.profile).toBeDefined()
})
test('set status in profile', () => {
  const endState = profileReducer(startState, setStatusAC('HI'))
  expect(endState.status).toBe('HI')
})
test('update profile', () => {
  const model = {
    profile: {
      aboutMe: "HELLO",
      contacts: {
        facebook: "facebook.com",
        website: null,
        vk: "vk.com/dimych",
        twitter: "https://twitter.com/@sdf",
        instagram: "instagra.com/sds",
        youtube: null,
        github: "github.com",
        mainLink: null
      },
      lookingForAJob: true,
      lookingForAJobDescription: "не ищу, а дурачусь",
      fullName: "samurai dimych",
      userId: 2,
      photos: {
        small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
      }
    }
  }
  const endState = profileReducer(startState, updateProfileAC(model.profile))
  expect(endState.profile.aboutMe).toBe('HELLO')
})
