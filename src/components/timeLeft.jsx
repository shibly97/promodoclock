import React from 'react';
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

const TimeLeft = (props) =>{

    const {timerLabel,handleStartStopClick,
    startStopButtonLabel,timeLeft} = props
    
    const formattedTimeLeft = moment.duration(timeLeft,'s').format('mm:ss',{trim: false})
   

    return (
        <div className='align-items-center' style={{marginTop : '10px'}}>
            <p  id='timer-label'><h2>{timerLabel}</h2></p>
            <p id='time-left' ><h2>{formattedTimeLeft}</h2></p>
            <button class="btn btn-info" id="start_stop" onClick={handleStartStopClick}><h3>{startStopButtonLabel}</h3></button>
        </div>
    )
}

export default TimeLeft; 