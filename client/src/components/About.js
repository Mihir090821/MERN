import React from 'react';
import { NavLink } from "react-router-dom";
import Aboutimg from '../Images/myimage.jpeg';

export const About = () => {
    return (
        <div className='container my-auto mt-4 ' >
            <div id="" className='p-3 mx-5 logindiv about commenbbox'>
                <div className="row mt-4">
                    <div className="col-sm-10 col-md-4 col-xl-4 col-lg-4 ">
                        <div className="profileimg d-flex  m-auto">
                            <img src={Aboutimg} className="img-fluid img-thumbnail aboutimg" alt="Register Image Not found" />
                            {/* <button className='btn changeimgbtn'>Change Photo</button> */}
                        </div>
                        <div className="text-center mt-3">
                            <a href="" ><span>Facebook</span></a><br />
                            <a href=""><span>Linkdln</span></a><br />
                            <a href=""><span>Github</span></a><br />
                            <a href=""><span>PHP </span></a><br />
                            <a href=""><span>MERN </span></a><br />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-xl-6 col-lg-6  p-5">
                        <h6 className='username'>Mihir Rathod</h6>
                        <p className='userprofesion'>Web Developer</p>
                        <p>Rankings: <b><span className='userranking'>1/10</span></b> </p>

                        {/* tabls */}
                        <ul className="nav nav-tabs">
                            <li className='nav-item active' >
                                <a href="#details" className='nav-link ' data-toggle="tab">About</a>
                            </li>
                            <li className='nav-item' >
                                <a href="#timeline" className='nav-link' data-toggle="tab">Timeline</a>
                            </li>
                        </ul>

                        <div className="tab-content mt-3">
                            <div className="tab-pane active" id="details">
                                <div className="row">
                                    <p><strong>User Id: </strong> <span>Mihir Rathod</span></p>
                                    <p><strong>Name: </strong> <span>Mihir Rathod</span></p>
                                    <p><strong>Email: </strong> <span>Mihir@gmail.com</span></p>
                                    <p><strong>Phone: </strong> <span>12340908</span></p>
                                    <p><strong>Profesion: </strong> <span>Web Developer</span></p>
                                </div>
                            </div>
                            <div className="tab-pane" id="timeline">Time Line</div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-xl-2 col-lg-2 mt-2">
                        <button type="button" className="btn btn-outline-secondary rounded-pill" >Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
