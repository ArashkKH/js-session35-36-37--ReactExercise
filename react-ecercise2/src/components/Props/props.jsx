import React from "react";
import './style.css'
import Button from './buttons/buttons'
import NameButtons from './names/names'

export default function Props(){
    const names = ['James','Annie','Marta','David']
    

    return(
        <>
            <h1>Playing with REACT <i class="bi bi-filetype-jsx"></i></h1>
            <div className="button-container">
                <h1>Using Props </h1>
                <Button title='ON'></Button>
                <Button title='OFF'></Button>
                <Button title='UP'></Button>
                <Button title='DOWN'></Button>
                <Button ></Button>
                <hr />
                <h1>Using Arrays (Click for Log)</h1>
                {names.map((name)=>(
                    <NameButtons content={name}></NameButtons>
                ))}
                <hr />



            </div>
        </>
    )
}