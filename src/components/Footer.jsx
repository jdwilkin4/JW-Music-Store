import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <div className="footer">
            <footer className="py-2">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright &copy; 2021
                    </p>
                    <Link to="/faq">
                        F.A.Q.
                    </Link>
                </div>
            </footer>
        </div>
    )
}
export default Footer;