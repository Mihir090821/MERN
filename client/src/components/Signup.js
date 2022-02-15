import React from 'react'
import { useState } from 'react'
import RegisterImage from '../Images/signup.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faEnvelopeOpen, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export const Signup = () => {
    const [type, changetype] = useState("password");
    const [myicon, changeicon] = useState(faEyeSlash);
    function showhidepass() {
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
            <div id="regdiv" className='p-1 mx-5'>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                        <div className="signuplogo p-5">
                            <img src={RegisterImage} className="img-fluid " alt="Register Image Not found" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 mt-4 ">
                        <h4 className=''>Sign Up</h4>
                        <form action="" className='mt-5'>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={faUser} /></label>
                                <input type="text" id='uname' name='uname' className='inputfield' placeholder='Enter Your Name' autoComplete='off' className='' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={faEnvelopeOpen} /></label>
                                <input type="email" id='email' name='email' placeholder='Enter Your Email' autoComplete='off' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={faPhone} /></label>
                                <input type="number" id='phone' name='phone' placeholder='Enter Your Phone Number' className='' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={myicon} onClick={showhidepass} data-clicked="1" className='eyeicon' /></label>
                                <input type={type} id='pass' name='pass' placeholder='Password ' className='passinput' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={faLock} /></label>
                                <input type={type} id='cpass' name='cpass' placeholder='Confirm Password' className='' />
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn  btn-primary">Register</button>
                            </div>
                            <div className="mt-1 text-center">
                                <NavLink className="btn btn-link active " aria-current="page" to="/login">Already Registered?</NavLink>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Signup
