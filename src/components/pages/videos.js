import React, { Component } from 'react';

class Videos extends Component {
    render(){
        return (
            <div className="container-fluid">
                <br></br>
                <h2>Long Birds @ Captain Records (Morgan's last show)</h2>
                <iframe width="100%" height="608" src="https://www.youtube.com/embed/zpmjzzjJPkM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <h2>Long Birds live at Olliewood</h2>
                <iframe width="100%" height="608" src="https://www.youtube.com/embed/PqdwHgpyzKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2></h2>
            </div>
        );
    }
}

export default Videos;
