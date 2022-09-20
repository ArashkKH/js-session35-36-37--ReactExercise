import React, { useRef } from "react";
import './main2.css'
import DivImg from './asset/division image.jpg'
// import { useRef } from "react";
//menuButtons imgs
import ImgHot from './asset/whats hot.webp'
import ImgBurgers from './asset/burgers.webp'
import Imgnuggs from './asset/NUGGS.webp'
import Imgtacos from './asset/tacos.webp'
import ImgBreakfasts from './asset/Breakfast.webp'
import Imgdrinks from './asset/drinks.webp'


export default function App(){
    const test = useRef()
    // console.log(test.current)

    const buttons = document.getElementsByClassName('choice')
    console.log(buttons)
    // buttons.forEach((element,index) => {
    //     // element.setAttribute('data-num',index)
    //     // console.log(element)
    // });
    // test.current.setAttribute('class','ddd')
    
    return(
        <>
            <div className="row" id="lv3">
                <aside><img src={DivImg} alt="division picture" /></aside>
                <div id="menu">
                    <div className="menuHeader">
                            <div className="Menutitle">Pesto's Menu</div>
                            <div className="menuButtons">
                                <div  className="choice C-hot choosen" ref={test} >
                                    <figure><img src={ImgHot} alt="" /></figure>
                                    <span className="choiceName">What's Hot</span>
                                </div>
                                <div  className="choice C-burgers" >
                                    <figure><img src={ImgBurgers} alt="" /></figure>
                                    <span className="choiceName">Burgers</span>
                                </div>
                                <div  className="choice C-chickens">
                                    <figure><img src={Imgnuggs} alt="" /></figure>
                                    <span className="choiceName">Chickens and Salads</span>
                                </div>
                                <div  className="choice C-tacos">
                                    <figure><img src={Imgtacos} alt="" /></figure>
                                    <span className="choiceName">Tacos, Fries and Sides</span>
                                </div>
                                <div  className="choice C-breakfasts">
                                    <figure><img src={ImgBreakfasts} alt="" /></figure>
                                    <span className="choiceName">Breakfast</span>
                                </div>
                                <div  className="choice C-drinks">
                                    <figure><img src={Imgdrinks} alt="" /></figure>
                                    <span className="choiceName">Desserts and Drinks</span>
                                </div>
                            </div>
                    </div>
                    <div className="menuContent d-none hot">
                        <div className="offer1"></div>
                        <div className="offer2"></div>
                        <div className="offer3"></div>
                        <div className="offer4"></div>
                        <div className="offer5"></div>
                    </div>
                    <div className="menuContent d-none burgers">
                        <div className="offer1"></div>
                        <div className="offer2"></div>
                        <div className="offer3"></div>
                        <div className="offer4"></div>
                        <div className="offer5"></div>
                    </div>
                    <div className="menuContent d-none chickens">
                        <div className="offer1"></div>
                        <div className="offer2"></div>
                        <div className="offer3"></div>
                        <div className="offer4"></div>
                        <div className="offer5"></div>
                    </div>
                    <div className="menuContent d-none tacos">
                        <div className="offer1"></div>
                        <div className="offer2"></div>
                        <div className="offer3"></div>
                        <div className="offer4"></div>
                        <div className="offer5"></div>
                    </div>
                    <div className="menuContent d-none breakfasts">
                        <div className="offer1"></div>
                        <div className="offer2"></div>
                        <div className="offer3"></div>
                        <div className="offer4"></div>
                        <div className="offer5"></div>
                    </div>
                    <div className="menuContent d-none drinks">
                        <div className="offer1"></div>
                        <div className="offer2"></div>
                        <div className="offer3"></div>
                        <div className="offer4"></div>
                        <div className="offer5"></div>
                    </div>
                </div>
            </div>
        </>
    )
}