import React from "react";
import { Link, withRouter } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className="navigation container-fluid">
            <Link class="navbar-brand" to="/">
                JW Music Store
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                        <Link class="nav-link" to="/">
                            Home
                        <span class="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`} >
                        <Link class="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li class={`nav-item  ${props.location.pathname === "/shop" ? "active" : ""}`} >
                        <Link class="nav-link" to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`} >
                        <Link class="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default withRouter(Navigation);