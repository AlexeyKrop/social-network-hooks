import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer, UsersReducerAT} from "../usersReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {profileReducer} from "../profileReducer";
import {appReducer} from "../appReducer";
import {authReducer} from "../authorizationReducer";

const rootReducers = combineReducers({
  users: usersReducer,
  profile: profileReducer,
  app: appReducer,
  auth: authReducer,
})
const store = createStore(rootReducers,applyMiddleware(thunkMiddleware))
//Type
export type AppRootStateType = ReturnType<typeof rootReducers>
export type AppActionsType = UsersReducerAT
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
export type StoreType = typeof store
export default store
// @ts-ignore
window.store = store