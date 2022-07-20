import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'e740762a-947d-4fd0-b06d-9b4eb349c99e'
  }
})
export const userAPI = {
  getUser(currentPageNumber: number = 10, pageSize: number = 10) {
    return instance.get<ResponseUsersType<Array<UserType>>>(`users?page=${currentPageNumber}&count=${pageSize}`)
  },
  getProfilePageUser(id: number) {
    return instance.get<ProfileUserType>(`/profile/${id}`)
  },
  addUser(id: number) {
    return instance.post<ResponseType>(`/follow/${id}`)
  },
  removeUser(id: number) {
    return instance.delete<ResponseType>(`/follow/${id}`)
  }
}

export const profileAPI = {
  getUser(id: number) {
    return instance.get<ProfileUserType>(`profile/${id}`)
  },
  getStatus(id: number) {
    return instance.get<string>(`profile/status/${id}`)
  },
  updateStatus(status: string){
    return instance.put(`profile/status`, {status})
  },
  updatePhoto(photo: File) {
    const formData = new FormData();
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
  },
  updateProfile(model: ProfileUserType){
    return instance.put<ProfileUserType>(`profile`, model)
  }

}
export const authMe = {
  me(){
    return instance.get('auth/me')
  },
  login(email: string, password: string){
    return instance.post(`auth/login`, {email, password})
  }
}
//TYPE
export type UserType = {
  name: string,
  id: number,
  photos: {
    small: string | null,
    large: string | null
  },
  status: string | null,
  followed: boolean
}
type ResponseUsersType<D = {}> = {
  items: D
  totalCount: number,
  error: string | null
}
export type ProfileUserType = {
  aboutMe: string
  contacts: {
    facebook: string
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
type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>,
  data: D
}
