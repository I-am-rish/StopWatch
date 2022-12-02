import React, { Fragment } from 'react'
import './BtnComp.css'
export const BtnComp = (props) => {
  return (
    <div className="BtnComp">
    {(props.status === 0)?
    <button className='btn' id='btn' onClick={props.start}>start</button> : ""
    }

    {(props.status == 1)?
    <div>
        <button className='btn' id='btn' onClick={props.stop}>stop</button>
        <button className='btn' id='btn' onClick={props.reset}>reset</button>
    </div> : ""
    }


    {(props.status == 2)?
    <div>
        <button className='btn' id='btn' onClick={props.resume}>resume</button>
        <button className='btn' id='btn' onClick={props.reset}>reset</button>
    </div> : ""
    }
    
    </div>
  )
}
