import React, { useState } from 'react'
import Gif from './Gif';

function Popup(props) {

  return(props.trigger)? (

    <>
    <div className='popup'>
      <div className='popup-in'>
        <button className='b' type="button" onClick={()=>props.setTrigger(false)}>close</button>
        {props.children} <br/>
        <div className='child'>
        <Gif/>
        </div>

      </div>

    </div>
    </>
  ):"";
}

export default Popup
