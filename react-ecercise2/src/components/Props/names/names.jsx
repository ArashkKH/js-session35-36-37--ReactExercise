import React from 'react'
import './names.css'

function ContentLog(e){
    console.log(e.target.innerHTML)
}

export default (prop)=>{
    function content(prop){
        if(prop.content){return(prop.content)}
    }

    return(
        <>
            <div onClick={ContentLog} className="names btn">{content(prop)}</div>
        </>
    )
}