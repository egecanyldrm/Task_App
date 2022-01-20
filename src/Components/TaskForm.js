import React, { Component } from 'react'

export default class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.task ? this.props.task.title : '',
            description: this.props.task ? this.props.task.description : '',
            error: '',
            update: this.props.update ? true : false
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onSubmitForm = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.description) {
            this.setState({ error: 'Lütfen bütün alanları doldurunuz' });
        } else {
            this.props.onSubmit({ title: this.state.title, description: this.state.description });
            this.setState({ error: '' });
        }
    }

    render() {
        return (
            <form className='bg-light shadow py-4 task-form rounded mt-4' onSubmit={this.onSubmitForm} >
                <div className="mb-3">
                    <label htmlFor='title' className="form-label h4">Title</label>
                    <input type="text"
                        value={this.state.title}
                        className="form-control"
                        id="title"
                        onChange={this.onTitleChange}
                        placeholder="enter title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label h4">Description</label>
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder='enter desription'
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                        rows="10" />
                </div>
                {this.state.error && <div className='alert fade-in show alert-danger' role='alert' >{this.state.error}</div>}

                <div className="d-grid gap-2 col-6 mx-auto mb-3">
                    <button className="btn btn-primary" type='submit ' > {this.state.update ? <span>Update</span> : <span>Save Changes</span>}</button>
                </div>
            </form>
        )
    }
}
