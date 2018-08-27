import React from 'react'
import {Link} from 'react-router-dom'

function FunctionalComp () {
    
    button = () =>{
        console.log('clicked')
    }
    return (
        <div>
            {/* <button onClick={button}>Press this button</button> */}
            <Link to = '/'><button>Go home</button></Link>
            <Link to = '/stateful'><button>Go to One</button></Link>
        </div>
    )
}
export default FunctionalComp