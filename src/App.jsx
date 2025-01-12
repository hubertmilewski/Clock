import { useState, useEffect } from 'react';
import AlarmSound from "./AlarmSound.mp3";  
import './App.css';

function App() {
  const [SessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [BreakLength, setBreakLength] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const [isSession, setIsSession] = useState(true);

  const [audio] = useState(new Audio(AlarmSound)); 

  const incrementSession = () => {
    setSessionLength(prev => {
      const newSessionLength = Math.min(prev + 1, 60);
      if (!isCounting) setTimeLeft(newSessionLength * 60);
      return newSessionLength;
    });
  };

  const decrementSession = () => {
    setSessionLength(prev => {
      const newSessionLength = Math.max(prev - 1, 1);
      if (!isCounting) setTimeLeft(newSessionLength * 60);
      return newSessionLength;
    });
  };

  const incrementBreak = () => {
    setBreakLength(prev => Math.min(prev + 1, 60));
  };

  const decrementBreak = () => {
    setBreakLength(prev => Math.max(prev - 1, 1));
  };

  const Reset = () => {
    setIsCounting(false);

    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60); 
    setIsSession(true); 

    // Stop and reset the audio
    const beep = document.getElementById('beep');
    if (beep) {
      beep.pause();
      beep.currentTime = 0;
    }
  };

  const startCountdown = () => {
    setIsCounting(prev => !prev);
  };

  useEffect(() => {
    if (isCounting) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            const beep = document.getElementById('beep');
            if (beep) {
              beep.play(); 
            }
            clearInterval(timer); 

            if (isSession) {
              setIsSession(false);
              return BreakLength * 60;
            } else {
              setIsSession(true);
              return SessionLength * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isCounting, isSession, BreakLength, SessionLength]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins >= 10 ? mins : "0" + mins}:${secs >= 10 ? secs : "0" + secs}`;
  };

  return (
    <main className='h-screen flex flex-col justify-center items-center text-white text-xl'>
      <div className='flex'>
        <div id='break-label' className='flex flex-col justify-center items-center text-3xl'>
          <p>Break Length</p>
          <div className='flex space-x-3'>
            <button id="break-increment" onClick={incrementBreak}>+</button>
            <p id="break-length">{BreakLength}</p>
            <button id="break-decrement" onClick={decrementBreak}>-</button>
          </div>
        </div>
        <div id='session-label' className='flex flex-col justify-center items-center text-3xl ml-24'>
          <p>Session Length</p>
          <div className='flex space-x-3'>
            <button id="session-increment" onClick={incrementSession}>+</button>
            <p id="session-length">{SessionLength}</p>
            <button id="session-decrement" onClick={decrementSession}>-</button>
          </div>
        </div>
      </div>
      <div id="timer-label" className='flex flex-col justify-center items-center border-4 border-slate-800 rounded-2xl px-12 py-6 mt-6'>
        <p className='text-4xl'>{isSession ? "Session" : "Break"}</p>
        <p id="time-left" className='text-8xl'>{formatTime(timeLeft)}</p>
      </div>
      <div className='space-x-4 text-3xl mt-4'>
        <button id="start_stop" onClick={startCountdown}><i className="fa-solid fa-play"></i></button>
        <button id="reset" onClick={Reset}><i className="fa-solid fa-reply-all"></i></button>
      </div>

      <audio id="beep" src={AlarmSound} />
    </main>
  );
}

export default App;
