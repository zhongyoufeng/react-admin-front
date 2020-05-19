function toDoList(state={
    data: [],
}, action) {
    switch (action.type) {
        case "TODOLIST_UPDATE":
            return {
                data: state.data
            };
        case "TODOLIST_GET_UPDATE":
            return {
                data: state.data
            };
        case "TODOLIST_ADD_UPDATE":
            return {
                data: state.data
            };
        case "TODOLIST_DELETE_UPDATE":
            return {
                data: state.data
            };
        case "TODOLIST_FINSH":
            return {
                data: action.data
            };
        case "TODOLIST_ERROR":
            return {
                data: []
            }
        default:
            return state;
    }
}
export default toDoList;
