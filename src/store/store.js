import createLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "connected-react-router";
import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./reducer";
import mySaga from "./saga/userSaga";
import history from "../utils/history";

const logger = createLogger;
const sagaMiddleware = createSagaMiddleware();
const initialState = {};
let middleware = [sagaMiddleware, routerMiddleware(history)];
middleware.push(logger);

function toApplyMiddleware(middleware){
    return applyMiddleware(...middleware);
}

const store = createStore(
    createRootReducer(history),
    initialState,
    toApplyMiddleware(middleware)
);

sagaMiddleware.run(mySaga,store);

export default store;
