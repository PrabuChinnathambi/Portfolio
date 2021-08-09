import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar_page" >
            <nav className="navbar navbar-expand-lg" >
                <a className="navbar-brand" href="#">Prabu Chinnathambi</a>
                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/education">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
