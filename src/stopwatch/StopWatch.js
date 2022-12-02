import React from 'react'
import './StopWatch.css'
import { useState } from 'react'
import { BtnComp } from './BtnComp';
import { DisplayComp } from './DisplayComp';

export const StopWatch = () => {
    const[time, setTime] = useState({ms:0, s:0, m:0, h:0});

    const[intrvl , setIntrvl] = useState();
    const[status , setStatus] = useState(0);

    const start = () => {
        setStatus(1);
        run();
        setIntrvl(setInterval(run, 10));
    };

    var updateH = time.h, updateM = time.m, updateS = time.s, updateMs = time.ms;

    const run = () => {
        if(updateM == 60){
            updateH++;
            updateM = 0;

        }
        if(updateS == 60){
            updateM++;
            updateS = 0;
        }
        if(updateMs == 100){
            updateS++;
            updateMs = 0;
        }
        updateMs++;
        return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
    }

    const stop = () => {
        clearInterval(intrvl)
        setStatus(2);
    };

    const reset = () => {
        clearInterval(intrvl)
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    };

    const resume = () => start();

  return (
    <div className='StopWatch'>
    <h1>Stop<span>Watch</span></h1>
    <DisplayComp time = {time}/> <br /><br />
    <BtnComp status={status} start = {start} stop={stop} reset={reset} resume={resume}/>

    <p id='copyRight'>CopyRight by Amrish Kumar</p>
    </div>
  )
}
