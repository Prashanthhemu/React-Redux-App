import React from 'react'

function NavigationBar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <label className="navbar-brand" href="#">Solidate</label>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/userManagement">User Management <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/userManagement">Document Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Log Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
