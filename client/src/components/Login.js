import React from 'react';
import image from '../assets/assets.jpg'
import { useState } from 'react';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [profile, setProfile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [errMsg, setErrMsg] = useState('');

    const submit = (e) => {
        e.preventDefault(e);
        //for password 
        if (password) {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{8,}/;
            const passwordLength = password.length;
            const uppercasePassword = uppercaseRegExp.test(password);
            const lowercasePassword = lowercaseRegExp.test(password);
            const digitsPassword = digitsRegExp.test(password);
            const specialCharPassword = specialCharRegExp.test(password);
            const minLengthPassword = minLengthRegExp.test(password);
            // let errMsg = "";
            if (passwordLength === 0) {
                alert("Password is empty");
            } else if (!uppercasePassword) {
                alert("At least one Uppercase");
            } else if (!lowercasePassword) {
                alert("At least one Lowercase");
            } else if (!digitsPassword) {
                alert("At least one digit");
            } else if (!specialCharPassword) {
                alert("At least one Special Characters");
            } else if (!minLengthPassword) {
                alert("At least minumum 8 characters");
            } else {
                alert("Successfully Login")
            }
            
        }


    }




    return (
        <>
            <div className='login-wrap'>
                <div className='container'>
                    <div className='login-wall'>
                        <div className='login-img'>
                            <img src={image} alt='login-image' />
                        </div>
                        <div className='login-content'>
                            <div className='title'>
                                <h3>Become an Instructor</h3>
                            </div>
                            <div className='sub-title'>
                                <h5>Already have account? <a href="#" className='btn-forget'>Login</a></h5>
                            </div>
                            <div className='login-body'>
                                <form>
                                    <div className="form-group">
                                        <label className='form-title'>Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            onChange={(e) => setName(e.target.value)} value={name}
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <label className='form-title'>Email</label>
                                            <input type="text" className="form-control"
                                                onChange={(e) => setEmail(e.target.value)} value={email}
                                                id="exampleInputPassword1" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='form-title'>Mobile Number</label>
                                            <input type="text" className="form-control"
                                                onChange={(e) => setContact(e.target.value)} value={contact}
                                                id="exampleInputPassword1" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className='form-title'>Password</label>
                                        <input type="password" className="form-control"
                                            onChange={(e) => setPassword(e.target.value)} value={password}
                                            id="exampleInputPassword1" />
                                        <div className='valid-check'>
                                            <p className='val-cust'><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />contains atleast 8 characters.</p>
                                            <p className='val-cust'><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />contains both lowercase and uppercase letters.</p>
                                            <p className='val-cust'><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />contain atleast one number(0-9) or a symbol.</p>
                                            <p className='val-cust'><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />does not contain your email address.</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className='form-title'>Confirm Password</label>
                                        <input type="password" className="form-control"
                                            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                                            id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-title'>Address</label>
                                        <input type="text" className="form-control"
                                            onChange={(e) => setAddress(e.target.value)} value={address}
                                            id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-title'>Social Profile</label>
                                        <input type="text" className="form-control"
                                            onChange={(e) => setProfile(e.target.value)} value={profile}
                                            id="exampleInputPassword1" />
                                    </div>

                                    <div className="form-group form-check">
                                        <button type="submit" className="btn btn-primary" onClick={submit}>Next</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );




}

export default Login;