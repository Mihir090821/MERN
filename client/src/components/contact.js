import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
    const [uname, setUname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();


    let fieldname, val;
    const CreateArray = (e) => {
        // fieldname = e.target.name;
        // val = e.target.value;
        // setData({ ...Regdata, [fieldname]: val })
    }

    const Validateuser = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    Accept: "Application/json",
                    "Content-Type": "Application/json"
                },
                credentials: "include"
            })
            const resultdata = await res.json();
            if (resultdata.status == 1) {
                setUname(resultdata.data.uname);
                setEmail(resultdata.data.email);
                setPhone(resultdata.data.phone);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        Validateuser();
    }, [])

    return (
        <div className="developerdetailsdiv">
            <div className="row justify-content-evenly">
                <div className="p-2 detailbox col-md-3">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3 p-3">
                            < FontAwesomeIcon icon={faPhone} className='contect_icon' />
                        </div>
                        <div className="col-sm-9 col-md-9 col-xl-9 col-lg-9 ">
                            <h6 className='contect_title'>Phone</h6>
                            <p className='contect_detail'> 91787878787878</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 detailbox col-md-3">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3 p-3">
                            < FontAwesomeIcon icon={faEnvelopeOpen} className='contect_icon' />
                        </div>
                        <div className="col-sm-9 col-md-9 col-xl-9 col-lg-9 ">
                            <h6 className='contect_title'>Email</h6>
                            <p className='contect_detail'> Mihir@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 detailbox col-md-3">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3 p-3">
                            < FontAwesomeIcon icon={faAddressCard} className='contect_icon' />
                        </div>
                        <div className="col-sm-9 col-md-9 col-xl-9 col-lg-9 ">
                            <h6 className='contect_title'>Address</h6>
                            <p className='contect_detail'> Surat,Gujarat</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="getfeedbackdiv" className=' container'>
                <div className="commenbbox p-1 mt-5 mx-5">
                    <h4 className='mx-5 mt-3'>Your Feedback</h4>
                    <form className='mt-5 mx-5'>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-xl-4 col-lg-4">
                                <div className="form-group mb-4">
                                    <input type="text" id='uname' name='uname' className='form-control' value={uname} onChange={CreateArray} placeholder='Your Name' autoComplete='off' />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 col-lg-4">
                                <div className="form-group mb-4">
                                    <input type="email" id='email' name='email' className='form-control' value={email} onChange={CreateArray} placeholder='Your Email' autoComplete='off' />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 col-lg-4">
                                <div className="form-group mb-3">
                                    <input type="number" id='phone' name='phone' className='form-control' value={phone} onChange={CreateArray} placeholder='Your Phone Number' autoComplete='off' />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-xl-12 col-lg-12">
                                <div className="mb-3 form-group">
                                    <textarea className="form-control" id="feedback" name='feedback' placeholder='Enter Your Email' rows="3"></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 col-lg-4">
                                <div className="form-group mb-3">
                                    <button className='btn btn-lg btn-primary'>Send Message </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Contact
