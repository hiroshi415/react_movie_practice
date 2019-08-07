import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={stickyHeader}>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <h1><Link to="/" className="nabvar-brand text-white text-lg brand-text">MovieInfo</Link></h1>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-react fa-5x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const stickyHeader = {
    position: 'relative',
    width: '110%',
    top: '0'

}

export default Navbar