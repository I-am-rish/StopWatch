import React from 'react'
import './DisplayComp.css'
export const DisplayComp = (props) => {
  return (
    <div className='DisplayComp'>
    <div><span>{(props.time.h >= 10) ? props.time.h : '0'+props.time.h}</span>&nbsp;:&nbsp;
    <p>HH</p></div>

    <div>
    <span>{(props.time.m >= 10) ? props.time.m : '0'+props.time.m}</span>&nbsp;:&nbsp;
    <p>MM</p></div>
    <div>
    <span>{(props.time.s >= 10) ? props.time.s : '0'+props.time.s}</span>&nbsp;:&nbsp;
    <p>SS</p> </div>
    <div>
    <span>{(props.time.ms >= 10) ? props.time.ms: '0'+props.time.ms}</span>
    <p>MS</p> </div>
    </div>
  )
}
