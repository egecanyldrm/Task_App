import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TaskItem from './TaskItem'
import { connect } from 'react-redux'
import { RemoveTask } from '../Store/Actions/TaskAction'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    removeTask = (task_Id) => {
        this.props.dispatch(RemoveTask({ id: task_Id }));
    }
    render() {
        return (
            <main>
                <div className="container px-4 mt-5">
                    <div className="row align-items-center mb-4">
                        <h2 className='text-secondary col-10' >Task List</h2>
                        <div className="col-2 d-flex justify-content-end"> <Link to="/create"> <i className="bi bi-plus-lg " style={{ fontSize: 40 }} ></i></Link></div>
                    </div>
                    <div className="row ">
                        {this.props.task.map((item) => {
                            return <TaskItem removeTask={this.removeTask} key={item.id} {...item} />
                        })}
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        task: state.task
    }
}
export default connect(mapStateToProps)(Home);


