import {get} from './server';
import {post} from './server';

class Api{
    getToDo(){
       return get('http://localhost:3000/toDoList/list/all');
    }
    deleteToDo(params){
        return post('http://localhost:3000/toDoList/destroy',params)
    }
    addToDo(params){
        return post('http://localhost:3000/toDoList/create',params)
    }
    updateToDo(params){
        return post('http://localhost:3000/toDoList/update',params)
    }
}
export default new Api();
