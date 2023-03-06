import React from 'react'
import "./Design.css";
import logo from "../../assets/logo-white.png";
import Login from "../Login/Login.jsx";
function login() {
    return (
        <div className='row'>
            <div className='col-6'>
                <h1 className='logo'><img className="logo__img" src={logo} alt="logo" srcSet="" /></h1>
                <div className='background'></div>
            </div>
            <div className='col-6'>
                <Login />
            </div>


        </div>
    )
}

export default login