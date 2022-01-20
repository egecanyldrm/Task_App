import { createStore, combineReducers } from 'redux';
import taskReducer from './Reducers/taskReducers';

export default () => {
    const store = createStore(combineReducers({ 
        task: taskReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}