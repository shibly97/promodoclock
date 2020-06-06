import React from 'react';
import moment from 'moment'

const Break = (props) =>{

    const {breakLength,
        decrementBreakLengthByOneMin,
        incrementBreakLengthByOneMin} = props

    const breakLengthInMin = moment.duration(breakLength,'s').minutes()

    return (
        <div>
       <p id="break-label"><h3>Break</h3></p>
       <p id="break-length"><h3>{breakLengthInMin}</h3></p>
       <button class="btn btn-info" id="break-increment" onClick={incrementBreakLengthByOneMin}><h3>+</h3></button>
       <button class="btn btn-info" id="break-decrement" onClick={decrementBreakLengthByOneMin}><h3>-</h3></button>
       </div>
    )
}

export default Break