import React, { Component } from 'react';

class Music extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="music">
                    <center>
                        <h1 id="title"> MUSIC </h1>
                        <div className="music-tiles">
                            <h2> To Kimball </h2>
                            <img src={require('../../imgs/music-imgs/tokimball.jpg')}/>
                            <a target="_blank" class="btn btn-outline-light" href="https://open.spotify.com/album/0Zh10i23KhKwSJGL7dO2ug?si=i6yvtHBmTLKz9UcYXEl84A" role="button">Stream</a>
                        </div>

                        <div className="music-tiles">
                            <h2> Beans & Super Nintendo</h2><br></br>
                            <img src={require('../../imgs/music-imgs/beans-nintendo.jpg')}/>
                            <a target="_blank" class="btn btn-outline-light" href="https://open.spotify.com/album/0ngnh9amOYEN5LNOHk8UFZ?si=l5KFNwOiQ3avpQKGCW3dnw" role="button">Stream</a>
                        </div>

                        <div className="music-tiles">
                            <h2> Fingers & Teeth </h2>
                            <img src={require('../../imgs/music-imgs/fingers-teeth.jpg')}/>
                            <a target="_blank" class="btn btn-outline-light" href="https://open.spotify.com/album/0Zh10i23KhKwSJGL7dO2ug?si=i6yvtHBmTLKz9UcYXEl84A" role="button">Stream</a>
                        </div>

                        <div className="music-tiles">
                            <h2> U Turn </h2>
                            <img src={require('../../imgs/music-imgs/uturn.jpg')}/>
                            <a target="_blank" class="btn btn-outline-light" href="https://open.spotify.com/album/2f25vhEB52MKeywtOLHJPk?si=sZgiymScTkCS2yYJ7rqSsw" role="button">Stream</a>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}

export default Music;
