import { v4 as uuidv4 } from 'uuid';

export const AddTask = ({ title = '', description = '' }) => ({
    type: 'ADD_TASK',
    task: {
        id: uuidv4(),
        title: title,
        description: description
    }
});

export const UpdateTask = (id, update) => ({
    type: 'UPDATE_TASK',
    id,
    update
});

export const RemoveTask = ({ id }) => (
    {
        type: 'REMOVE_TASK',
        id: id
    }
);