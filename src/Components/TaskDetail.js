import React from 'react'
import { connect } from 'react-redux';
import { RemoveTask, UpdateTask } from '../Store/Actions/TaskAction';
import TaskForm from './TaskForm';



const TaskDetail = (props) => {
    return (
        <div className='container mt-4 d-flex flex-column align-items-center ' >
            <h2>Task Detail & Update</h2>
            <TaskForm onSubmit={(task) => {
                props.dispatch(UpdateTask(props.task.id, task));
                props.history.push('/');
            }
            }
                task={props.task}
                update={true}
            />
            <div className="d-grid gap-2 col-6 mx-auto mt-2">
                <button onClick={() => {
                    props.dispatch(RemoveTask({ id: props.task.id }));
                    props.history.push('/');
                }} className='btn btn-danger' >Remove</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        task: state.task.find((item) => {
            return item.id === props.match.params.id;
        })
    }

}
export default connect(mapStateToProps)(TaskDetail);
