import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import LoginImage from '../Images/signup.webp';


const Login = () => {
    const [type, changetype] = useState("password");
    const [myicon, changeicon] = useState(faEyeSlash);
    const showhidepass = () => {
        if (type === "password") {
            changetype("text");
            changeicon(faEye)
        } else {
            changetype("password");
            changeicon(faEyeSlash)
        }
    }
    return (
        <div className='container my-auto mt-4 ' >
            <div id="regdiv" className='p-3 mx-5 logindiv '>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 mt-4 p-5">
                        <h4 className=''>Sign Up</h4>
                        <form action="" className='mt-5'>

                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={faEnvelopeOpen} /></label>
                                <input type="email" id='email' name='email' placeholder='Enter Your Email' autoComplete='off' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={myicon} onClick={showhidepass} data-clicked="1" className='eyeicon' /></label>
                                <input type={type} id='pass' name='pass' placeholder='Password ' className='passinput' />
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn  btn-primary">Login</button>
                            </div>
                            <div className="mt-1 text-center">
                                <NavLink className="btn btn-link active " aria-current="page" to="/signup">Register</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                        <div className="signuplogo p-5">
                            <img src={LoginImage} className="img-fluid loginimg " alt="Register Image Not found" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login