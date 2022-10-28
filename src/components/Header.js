import React from "react";
import { BsSearch, BsFillCartFill, BsTranslate } from 'react-icons/bs';

function Header() {
    return (
        <>
            {/* <h1>Plant and Care Shop</h1> */}

            <nav className="navbar">
            <div class="logo">Plant and Care Shop</div>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Plant Care</li>
                    <li>Services</li>
                    <li>
                        <button className="login">Login</button>
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
