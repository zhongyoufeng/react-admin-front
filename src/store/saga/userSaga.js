import {call, put, takeLeading } from 'redux-saga/effects';
import Api from '../../server/api';

function* fetchToDoList() {
    try{
        const result = yield call(Api.getToDo);
        yield put({
            type:"TODOLIST_FINSH",
            data:result.data.data
        });
    }catch (e) {
        yield put({
            type:"LIST_UPDATA_ERROR"
        })
    }
}

function* addToDoList(action) {
    try{
        yield call(Api.addToDo, action.payload);
        const result = yield call(Api.getToDo);
        yield put({
            type:"TODOLIST_FINSH",
            data:result.data.data
        });
    }catch (e) {
        yield put({
            type:"LIST_UPDATA_ERROR"
        })
    }
}

function* deleteToDoList(action) {
    try{
        yield call(Api.deleteToDo,action.payload);
        const result = yield call(Api.getToDo);
        yield put({
            type:"TODOLIST_FINSH",
            data:result.data.data
        });
    }catch (e) {
        yield put({
            type:"LIST_UPDATA_ERROR"
        })
    }
}

function* updateToDoList(action) {
    try{
        yield call(Api.updateToDo,action.payload);
        const result = yield call(Api.getToDo);
        yield put({
            type:"TODOLIST_FINSH",
            data:result.data.data
        });
    }catch (e) {
        yield put({
            type:"LIST_UPDATA_ERROR"
        })
    }
}

function *mySaga() {
    yield takeLeading("TODOLIST_GET_UPDATE", fetchToDoList);
    yield takeLeading("TODOLIST_ADD_UPDATE", addToDoList);
    yield takeLeading("TODOLIST_DELETE_UPDATE", deleteToDoList);
    yield takeLeading("TODOLIST_UPDATE", updateToDoList);
}
export default mySaga;
