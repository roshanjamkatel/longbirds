import React, { Component } from 'react';
import Background from '../../imgs/logos/longbirdsHeader.jpg';

class Homepage extends Component {
    render(){
        return (
            <div id="landing-page">
                <div id="headerImg" style= {{backgroundImage: "url(" +  Background + ")"}}>
                    <div className="homepage-text-styles"><center>
                        <h1>Under construction. </h1>
                        <div className="homepage-buttons">
                            <a className="btn btn-outline-light" href="/music" role="button">Music</a>
                            <a className="btn btn-outline-light" href="/showdates" role="button">Show Dates</a>
                            <a className="btn btn-outline-light" href="/videos" role="button">Videos</a>
                        </div>
                    </center></div>
                </div>
            </div>
        );
    }
}

export default Homepage;
