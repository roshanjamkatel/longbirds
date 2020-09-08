import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SliderMenu from 'react-slider-menu';

function dropDownJS() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
class Header extends Component {
    render(){
        return (
            <header>
                <div id="desktop">
                    <div className="logo">
                        <a href="/longbirds"><img src={require('../../imgs/logos/longBirdsLogo.png')}/></a>
                    </div>
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
                    <div className="logo">
                        <a href="/longbirds"><img src={require('../../imgs/logos/longBirdsLogo.png')}/></a>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={dropDownJS}> Menu Temp
                            <i className="fa fa-caret-down"></i>
                        </button>
                            <div className="dropdown-content" id="myDropdown">
                            <a href="#">Music</a>
                            <a href="#">Products</a>
                            <a href="#">Videos</a>
                            <a href="#">Show Dates</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
