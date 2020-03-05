import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="sticky-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6"></div>
                    <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                        <nav className="mainmenu__nav hidden-xs hidden-sm">
                            <ul className="main__menu">
                                <li><NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/filtered">Filter</NavLink>
                                </li>
                                <li>About</li>
                                <li>Shop</li>
                                <li>pages</li>
                                <li>contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;