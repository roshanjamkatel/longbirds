import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return (
            <div className="container-fluid">
                <center>
                    <div className="containerContact">
                        <div className="contact-section">
                            <h2 className="ct-section-head">Contact Us</h2>
                            <div className="col-md-8 left-form">
                                <form method="post" action="">
                                    <div className="form-group">
                                        <label className="sr-only" for="fname">First Name *</label>
                                        <input className="required form-control" id="fname" name="fname"
                                        placeholder="First Name&nbsp;*" type="text" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="lname">Last Name *</label>
                                        <input className="required form-control" id="lname" name="lname"
                                        placeholder="Last Name&nbsp;*" type="text" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="contactemail">Email *</label>
                                        <input className="required form-control h5-email" id="contactEmail"
                                        name="contactEmail" placeholder="Email&nbsp;*" type="text" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="contactPhone">Phone *</label>
                                        <input className="required form-control h5-phone" id="contactPhone" name="contactPhone" placeholder="Phone&nbsp;*" type="text"  required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="comment">Type your message here</label>
                                        <textarea className="required form-control" id="comment" name="comment" placeholder="Type your message here&nbsp;*" rows="6" required/>
                                        <button className="btn btn-accent" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default Contact;
