import React from "react";
import { BsSearch, BsFillCartFill, BsTranslate } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            {/* <h1>Plant and Care Shop</h1> */}

            <nav className="navbar">
            <div className="logo"><Link to="/">Plant and Care Shop</Link></div>
                <ul>
                    <li className="tautan">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="tautan">Shop</li>
                    <li className="tautan">Plant Care</li>
                    <li className="tautan">
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <button className="login"><Link to="/login" className="login-a">Login</Link></button>
                        <button className="navigation"><BsSearch /></button>
                        <button className="navigation"><BsFillCartFill /></button>
                        <button className="navigation"><BsTranslate /></button>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Header;
