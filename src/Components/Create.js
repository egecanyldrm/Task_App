import React from 'react'
import { connect } from 'react-redux'
import { AddTask } from '../Store/Actions/TaskAction'
import TaskForm from './TaskForm'

const Create = (props) => {
    return (
        <div className='container px-4 mt-4 d-flex align-items-center flex-column'>
            <h2>Create Task Page</h2>
            <TaskForm onSubmit={(task) => {
                props.dispatch(AddTask(task));
                props.history.push('/');
            }} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        task : state.task
    }

}

export default connect(mapStateToProps)(Create)