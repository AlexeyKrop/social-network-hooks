const initialState = {
  loading: 'loading' as RequestStatusType
}
export const appReducer = (state: InitialStateType = initialState, action: AppReducerAT) => {
  switch (action.type) {
    case "APP/SET-LOADING":
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}



//ACTIONS CREATOR
export const setAppLoadingAC = (loading: RequestStatusType) => ({type: 'APP/SET-LOADING', loading} as const)



//TYPES
type InitialStateType = typeof initialState
export type AppReducerAT = SetAppLoadingAT
type SetAppLoadingAT =  ReturnType<typeof setAppLoadingAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'