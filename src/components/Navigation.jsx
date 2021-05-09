import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">
                    JW Music Store
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item  ${props.location.pathname === "/guitars" ? "active" : ""}`}>
                            <Link className="nav-link" to="/guitars">
                                Guitars
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/basses" ? "active" : ""}`}>
                            <Link className="nav-link" to="/basses">
                                Basses
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/amps" ? "active" : ""}`} >
                            <Link className="nav-link" to="/amps">
                                Amps &amp; Effects
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/drums" ? "active" : ""}`} >
                            <Link className="nav-link" to="/drums">
                                Drums
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/keyboards" ? "active" : ""}`} >
                            <Link className="nav-link" to="/keyboards">
                                Keyboards
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/live" ? "active" : ""}`} >
                            <Link className="nav-link" to="/live">
                                Live Sound
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/recording" ? "active" : ""}`} >
                            <Link className="nav-link" to="/recording">
                                Recording
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/accessories">
                                    Accessories
                                </Link>
                                <Link className="dropdown-item" to="/DJ">
                                    DJ Gear
                                </Link>
                                <Link className="dropdown-item" to="/band">
                                    Band &amp; Orchestra
                                </Link>
                                <Link className="dropdown-item" to="/classroom">
                                    Classroom &amp; Kids
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default withRouter(Navigation);