const taskState = [];

const taskReducer = (state = taskState, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ]
        case 'UPDATE_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.update
                    }
                }
                else {
                    return task;
                }
            })
        
        case 'REMOVE_TASK':
            return state.filter(({ id }) => {
                return id !== action.id;
            })
        default:
            return state
    }

}
export default taskReducer
