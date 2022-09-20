import React from 'react'
import './buttons.css'

function DefualtValue(t){
    // let no = 'Defual Value'
    if(t.title){return(t.title)}else{return('Defual Value')}
    // return(t ? t.title : no) //doesn't work :/
}

export default (t)=>{
    return(
        <>
            <div className="btn">{DefualtValue(t)}</div>
        </>
    )
}