import React, { Component } from 'react';
import Background from '../../imgs/logos/longbirdsHeader.jpg';

// Production build needs to include "longbirds/" in the hrefs; when developing remove this
class Homepage extends Component {
    render(){
        return (
            <div id="landing-page">
                <div id="headerImg" style= {{backgroundImage: "url(" +  Background + ")"}}>
                    <div className="homepage-text-styles"><center>
                        <h1>Under construction. </h1>
                        <div className="homepage-buttons">
                            <a className="btn btn-outline-light" href="longbirds/music" role="button">Music</a>
                            <a className="btn btn-outline-light" href="longbirds/showdates" role="button">Show Dates</a>
                            <a className="btn btn-outline-light" href="longbirds/videos" role="button">Videos</a>
                        </div>
                    </center></div>
                </div>
            </div>
        );
    }
}

export default Homepage;
