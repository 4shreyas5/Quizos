import React from 'react'
import { Link } from 'react-router-dom'

function Certificate(){
    return(
        <>
        <Link to='/certificateNFT'>
        <button>Generate Certificate</button>
        <Link to='/home'>Back</Link>
        </Link>
        
        </>

    )
}

export default Certificate