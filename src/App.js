import React,{useState, useEffect, useRef} from 'react';
import './App.css';
import Break from './components/Break'
import Session from './components/session'
import TimeLeft from './components/timeLeft'

function App() {
  const audioElement = useRef(null)
  const [sessionLength,setSessionLength] = useState(60*25);
  const [currentSession,setCurrentSession] = useState('Session');
  const [intervalId,setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [breakLength,setBreakLength] = useState(300)

  useEffect(() => {
    setTimeLeft(sessionLength);
    },[sessionLength]);

  const decrementSessionLengthByOneMin = () => {
      const newSessionLength = sessionLength - 60;

      if(newSessionLength > 0 ){
          setSessionLength(newSessionLength)
  }}

  const incrementSessionLengthByOneMin = () => {
      const newsessionLength = sessionLength+60

      if (newsessionLength <= 60*60){
        setSessionLength(newsessionLength)
      }
      
  };


  const decrementBreakLengthByOneMin = () => {
        const newBreakLength = breakLength - 60;
        
        if(newBreakLength >0){
          setBreakLength(newBreakLength)
        }

    }

    const incrementBreakLengthByOneMin = () => {
        const newBreakLength = breakLength+60

        if(newBreakLength <= 60*60){
            setBreakLength(newBreakLength)
        }
        
    }

    const isStarted = intervalId != null

    const handleStartStopClick = () =>{
        if (isStarted){
            clearInterval(intervalId)
            setIntervalId(null)
        }else{
           const newIntervalId = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    const newTimeLeft = prevTimeLeft -1
                    if(newTimeLeft >= 0){
                        return  newTimeLeft
                    }

                    audioElement.current.play()

                    if(currentSession ==='Session'){
                        setCurrentSession('Break');
                        return (breakLength);
                    }else if(currentSession ==='Break'){
                        setCurrentSession('Session');
                        return sessionLength;
                    }
                   }) },1000)

                   return setIntervalId(newIntervalId)
        } 
        }

    const handleResetButtonClick = () =>{
        audioElement.current.load()
        clearInterval(intervalId);
        setIntervalId(null)
        setCurrentSession('Session');
        setSessionLength(60*25)
        setBreakLength(60*5)
        setTimeLeft(60*25)

    }


  return (
    <div className="App w-100 h-100">
        <div className="container border border-info align-middle" style={{
        backgroundImage: `url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg")`,backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'100%', width:'100%', marginTop:'15px'
      }}>
         <div >
             <div className='row justify-content-md-center'>
                <Break
                breakLength={breakLength}
                decrementBreakLengthByOneMin = {decrementBreakLengthByOneMin}
                incrementBreakLengthByOneMin = {incrementBreakLengthByOneMin}/>
            </div>

            <div className="row justify-content-md-center " >
                <div className='col-md-3 rounded-circle bg-dark text-white' style={{fontFamily:'Roboto', fontSize: '20px', height:'200px'}}>
                <TimeLeft 
                     timerLabel ={currentSession}
                     handleStartStopClick={handleStartStopClick}
                     startStopButtonLabel={isStarted? 'Stop' :'Start'}
                     timeLeft={timeLeft}/>
                     </div>
            </div>

            <div className="row justify-content-md-center" >
                <Session
            
                sessionLength = {sessionLength}
                decrementSessionLengthByOneMin = {decrementSessionLengthByOneMin}
                incrementSessionLengthByOneMin = {incrementSessionLengthByOneMin} />
            
                </div>
            
            <div className="row justify-content-md-center">

                 <button className="btn btn-danger" id='reset' onClick={handleResetButtonClick}><h4>Reset</h4></button>

            </div>

      <audio id='beep' ref={audioElement} >
          <source src='https://onlineclock.net/audio/options/default.mp3' type='audio/mpeg' ></source>
      </audio>

      </div>
      </div>
      </div>
  );
}

export default App;

