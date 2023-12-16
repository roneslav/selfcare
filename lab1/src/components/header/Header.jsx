import React from "react";
import {NavLink} from "react-router-dom";
import './header.css';


function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">Logo</div>
                    <nav className="header__nav">
                        <h2>
                            <button type="button" className="header__page">
                                <NavLink exact to='/'>Home</NavLink>
                            </button>
                        </h2>
                        <h2>
                            <button type="button" className="header__page">
                                <NavLink to='/registration'>Registration</NavLink>
                            </button>
                        </h2>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
