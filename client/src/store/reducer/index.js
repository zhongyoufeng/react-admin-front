import {combineReducers} from "redux";
import toDoList from "./toDoList";
import {connectRouter} from "connected-react-router";

const createRootReducer = (history) => {
    return combineReducers({
            router: connectRouter(history),
            toDoList
        }
    )
};
export default createRootReducer;
