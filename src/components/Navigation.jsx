import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">
                    JW Music Shop
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);