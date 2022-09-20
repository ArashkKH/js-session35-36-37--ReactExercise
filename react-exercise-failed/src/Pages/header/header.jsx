import React from 'react'
import './style.css'
import Logoimage from './asset/Screenshot 2022-09-18 142002.jpg'

export default function header(){

    return(
        <header className='container-fluid'>
            <div className="container">
            <figure><img src={Logoimage} alt="logo" /></figure>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li className='pages'>
                    Pages
                    <ul id='pagesDrop'>
                        <li>Profile</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </li>
                <li>Shop</li>
            </ul>
            <span className="phonNum">
                <div className='phoneIcon'><i className="bi bi-telephone"></i></div>
                <div className='num'>
                    <span>HOTLINE ORDER</span>
                    <a href="tel:0515963636" id='phonenum'>0515 96 36 36</a>
                </div>
            </span>
            <div className="rightControls">
                <span className='profile'><i className="bi bi-person"></i></span>
                <span className='cart'><i className="bi bi-basket"></i></span>
                <span className='language'>
                <i className="bi bi-chevron-down"></i>
                </span>
            </div>
            </div>
        </header>
    )
}