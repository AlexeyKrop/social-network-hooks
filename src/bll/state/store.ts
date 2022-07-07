import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer, UsersReducerAT} from "../usersReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer
})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
//Type
export type RootState = ReturnType<typeof store.getState>
export type AppActionsType = UsersReducerAT
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>
export type StoreType = typeof store
export default store
// @ts-ignore
window.store = store