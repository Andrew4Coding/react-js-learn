import { useState } from 'react';
import './App.css'
import { TiThMenu } from "react-icons/ti"; 
import { TiTimes } from "react-icons/ti";
import './style/Navbar.css'

function MobilePopUp({onCloseClick}) {
    return <>
        <div className='mobile-pop-up'>
            <TiTimes className='mobile-pop-up-close-button' onClick={onCloseClick}/>
            <button className='navbar-menu-button' id='mobile'>About</button>
            <button className='navbar-menu-button' id='mobile'>Education</button>
            <button className='navbar-menu-button' id='mobile'>Projects</button>
        </div>
    </>
}

export default function Navbar(){
    const [mobile, setMobile] = useState(false)
    
    function handleClick(){
        setMobile(!mobile)
    }

    return <>
        <div className='navbar-wrapper'>
            <div className='navbar-logo'>
                <h2>andrew.co</h2>
            </div>
            <div className='navbar-menu'>
                <button className='navbar-menu-button'>About</button>
                <button className='navbar-menu-button'>Education</button>
                <button className='navbar-menu-button'>Projects</button>
            </div>
            <div className='mobile-navbar-menu'>
                <TiThMenu className='mobile-navbar-menu-button' onClick={handleClick} />
            </div>
            <div className='navbar-started'>
                <button className='navbar-started-button'>
                    Get Started
                </button>
            </div>
            {mobile && <MobilePopUp onCloseClick={handleClick}/>}
        </div>
    </>
}