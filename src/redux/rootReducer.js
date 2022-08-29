import todoReducer from "./Todos/todoReducer";
import filterReducer from "./Filter/filterReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})

export default rootReducer;