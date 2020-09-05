import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render(){
        return (
            <footer>
                <div class="footer-content">
                    <div class="footer-section about"></div>
                    <div class="footer-section links"></div>
                    <div class="footer-section contact-form"></div>
                    </div>
                    <div class="footer-bottom">
                        &copy; <a href="https://www.longbirds.com/">longbirds.com</a> | Designed by Atlas Programming
                    </div>
            </footer>
        );
    }
}

export default Footer;
