import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        JW Music Shop
                    </Link>
                    {/*     <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/shop" ? "active" : ""}`}>
                                <Link className="nav-link" to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`} >
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);