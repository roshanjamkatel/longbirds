import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <header>
                <div className="logo">
                    <a href="/"><img src='./longBirdsLogo.png'/></a>
                </div>

                <div id="desktop">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Music">Music</Link>
                            </li>

                            <li>
                                <Link to="/Products">Shop</Link>
                            </li>

                            <li>
                                <Link to="/Videos">Videos</Link>
                            </li>

                            <li>
                            <   Link to="/ShowDates">Show Dates</Link>
                            </li>

                            <li className="last">
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="mobile">
                    <div className="dropdown">
                            <button className="dropbtn">Dropdown 
                                <i className="fa fa-caret-down"></i>
                            </button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
