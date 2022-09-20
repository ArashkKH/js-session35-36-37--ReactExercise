import React from "react";
import './style.css'
import Button from './buttons/buttons'

export default function Props(){

    return(
        <>
            <h1>Prop Test</h1>
            <div className="button-container">
                <Button title='ON'></Button>
                <Button title='OFF'></Button>
                <Button title='UP'></Button>
                <Button title='DOWN'></Button>
                <Button ></Button>
            </div>
        </>
    )
}