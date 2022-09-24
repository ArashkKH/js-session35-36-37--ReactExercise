import React from "react";
import './style.css'
import Button from './buttons/buttons'
import NameButtons from './names/names'
import { render } from "@testing-library/react";



export default function Props(){
    let x = ''
    const names = ['James', 'Annie', 'Marta', 'David']
//--------------------------------------------------------
    const [ likes , SetLikes ] = React.useState(0)
    function Likes() {
        SetLikes(likes+1)
    }
//--------------------------------------------------------
    const [names2 , SetNames] = React.useState(['James', 'Annie', 'Marta', 'David'])
    function NameAdd(){
        console.log(names2)
        x = prompt('Enter a name: ')
        if (x!='' && x!=null){
            SetNames([...names2,x])
        }
    }
    // setInterval(() => {
    //     document.getElementById('hello').click()
    //     // console.log('')
    // }, 1000);
    //Intervals are roasted!!
    return(
        <>
            <h1>Playing with REACT <i className="bi bi-filetype-jsx"></i></h1>
            <div className="button-container">
                <h1>Using Props </h1>
                <Button title='ON'></Button>
                <Button title='OFF'></Button>
                <Button title='UP'></Button>
                <Button title='DOWN'></Button>
                <Button ></Button>
                <hr />
                {/* ------------------------------ */}
                <h1>Using Arrays (Click for Log)</h1>
                {names.map((name)=>(
                    <NameButtons content={name}></NameButtons>
                ))}
                <hr />
                {/* ------------------------------ */}
                <h1>Simple use of state hook </h1>
                <button onClick={Likes} className="btn" id="hello">Likes:  <i className="bi bi-chat-square-heart-fill"> </i> {likes}</button>
                <hr />
                {/* ------------------------------ */}
                <h1>Functional Element append (Console Log)</h1>
                <button onClick={NameAdd} className="btn">Add names : {names2.length}</button><br />
                {names2.map((Name)=>(
                    <NameButtons content={Name}></NameButtons>
                ))}
                <hr />
                {/* ------------------------------ */}
                


            </div>
        </>
    )
}