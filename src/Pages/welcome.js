import React from 'react';
import './welcome.css';


const Welcome = ({isSignedIn, name }) => {
    if(isSignedIn) {
    return (
        <div className="user-welcome" >
            <div className='welcome black f3 '>
                {`أهلا بك   ${name}`}            
            </div>
        </div>

    ) 
    } else {
        return(
            <div>

            </div>
        )
    }
}

export default Welcome;