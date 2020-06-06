import React from 'react';
import moment from 'moment'

const Session =(props) =>{
    const  {
        sessionLength,
        decrementSessionLengthByOneMin,
        incrementSessionLengthByOneMin
    } = props;
   

    const sessionLengthInMin = moment.duration(sessionLength,'s').asMinutes()


    return (
        <div>
       <p id="session-label"><h3>Session</h3></p>
       <p id="session-length"><h3>{sessionLengthInMin}</h3></p>
       <button class="btn btn-info" id="session-increment" onClick={incrementSessionLengthByOneMin}><h3>+</h3></button>
       <button class="btn btn-info" id="session-decrement" onClick={decrementSessionLengthByOneMin}><h3>-</h3></button>
       </div>
    )
}

export default Session