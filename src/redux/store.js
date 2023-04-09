import Reducer from "./reducer"
import ReducerTwo from "./reducertwo"
import { legacy_createStore, combineReducers } from "redux"

const rootReducer = combineReducers({
    reducer: Reducer,
    reducertwo: ReducerTwo
})

const store = legacy_createStore(rootReducer, {})

export default store