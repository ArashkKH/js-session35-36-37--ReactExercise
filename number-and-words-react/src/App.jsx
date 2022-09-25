import React from "react";
import './App.css'

export default function App(){
    const rawNum = ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنچ', 'شش', 'هفت', 'هشت', 'نه']

    function Copybtn(){
        // rawNum.push(prompt('num'))
        // console.log(rawNum)
         console.clear()

    }
    let num 
    function GotNum(e){
        num = e.target.value
        
        // numSplit.map((element,index)=>{
        //     console.log(numSplit[numSplit.length-index])
        // })
        
    }

    return(
        <main>
            <div className="header">
                <h1>تبدیل عدد به حروف فارسی</h1>
            </div>

            <div className="inputs">
                <div >
                    <input type="number" name="" id="num" placeholder="عدد" onInput={GotNum}/>
                    <div id="numDisplay" >{num}</div>
                </div>
                <i className="bi bi-arrow-down-up"></i>
                <div>
                    <input type="text" name="" id="text" placeholder="حروف" autoComplete="off" />
                    <div id="copyBtn" onClick={Copybtn}><i className="bi bi-clipboard"></i></div>
                </div>
            </div>
            <footer>
                <ul>
                    <li><a href="https://github.com/ArashkKH/num-to-text-persian-" target="_blank"><i
                                class="bi bi-github"></i></a></li>
                    <li><a href="https://www.arashkh.com/" target="_blank"><i class="bi bi-balloon-heart-fill"></i></a>
                    </li>

                </ul>
                <span>Designed and written by Arashkh with <a href="https://reactjs.org/">React</a></span>
            </footer>
        </main>
    )
}