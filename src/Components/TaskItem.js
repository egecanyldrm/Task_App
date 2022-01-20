import React from 'react'
import { Link } from 'react-router-dom'

const TaskItem = (props) => {
    return (
        <div className=" shadow-sm fade show rounded-3 px-4 py-4 bg-light mb-4 d-flex justify-content-between align-items-center">
            <div >
                {props.title}
            </div>
            <div className="d-flex">
                <Link to={`/tasks/${props.id}`} >
                    <i className="bi bi-box-arrow-in-down" style={{ fontSize: 30 }}></i>
                </Link>
                <button className=' btn text-primary' onClick={()=>{
                    props.removeTask(props.id);

                }}>
                    <i className="bi bi-check-circle h2" style={{ fontSize: 30 }}></i>
                </button>
            </div>
        </div>
    )
}
export default TaskItem;
