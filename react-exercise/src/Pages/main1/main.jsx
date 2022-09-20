import React from "react";
import './main.css'
import Burger1 from './asset/main-Burger.png'
import SplashImg1 from './asset/splash1.webp'
import SplashImg2 from './asset/splash2.webp'


export default function Main() {


    return (
    <>
        <div className="row" id="lv2">
            <aside className="splash"><img src={SplashImg1} alt="splash" /></aside>
            <aside className="splash"><img src={SplashImg2} alt="splash" /></aside>
            <aside className="splash"><img src={SplashImg1} alt="splash" /></aside>
            <aside className="splash"><img src={SplashImg1} alt="splash" /></aside>
            <aside className="splash"><img src={SplashImg2} alt="splash" /></aside>
            <div className="title">
                <h1>Grilled Beef Burger</h1>
                <span>Special deal on only <strong>TUESDAY</strong> every week</span>
                <div>Buy 3 Get 4th<strong> FREE!</strong></div>
                <div className="orderNow">ORDER NOW</div>
            </div>
            <div className="Bburger">
                <figure>
                    <img src={Burger1} alt="Beef burger" />
                </figure>
            </div>
        </div>
    </>
)
}