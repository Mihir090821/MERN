import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import Aboutimg from '../Images/myimage.jpeg';

export const About = () => {
    return (
        <div className='container my-auto mt-4 ' >
            <div id="regdiv" className='p-3 mx-5 logindiv '>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                        <div className="signuplogo p-5">
                            <img src={Aboutimg} className="img-fluid img-thumbnail aboutimg" alt="Register Image Not found" />
                            <button className='btn changeimgbtn'>Change Photo</button>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 mt-4 p-5">
                        <h4 className=''>Sign Up</h4>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default About
