import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header>
            <nav className='navbar shadow-sm navbar-expand-md navbar-light bg-light'>
                <div className="container">
                    <Link to="/" className='navbar-brand'><h1>Task App</h1></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                        
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='https://egecanyildirim.com/' >Author</a>
                                </li>

                            </ul>
                        </div>
                </div>

            </nav>
            

        </header>
    )
}

export default Navbar
