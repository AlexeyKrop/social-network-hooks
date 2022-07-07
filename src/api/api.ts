import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'e740762a-947d-4fd0-b06d-9b4eb349c99e'
  }
})
export const userAPI = {
  getUser(currentPageNumber: number, pageSize: number){
    return instance.get(`users?page=${currentPageNumber}&count=${pageSize}`)
  },
  setProfilePageUser(id: string){
    return instance.get(`/profile/${id}`)
  },
  addUSer(id: string){
    return instance.post(`/follow/${id}`)
  },
  deleteUSer(id: string){
    return instance.delete(`/follow/${id}`)
  }
}
type UserType = {
  name: string,
  id: number,
  photos: {
    small: string | null,
    large: string | null
  },
  status: string | null,
  followed: boolean
}
type ResponseUsersType = {
  items: Array<UserType>
  totalCount: number,
  error: string | null
}
type ProfileUserType = {
  aboutMe: string
  contacts: { facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null,
    github: string
    mainLink: string | null
  },
  lookingForAJob: boolean,
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: {
    small: string
    large: string
  }
}