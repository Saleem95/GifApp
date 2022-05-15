import React, { useState } from 'react'

function Post(props) {
    const [count,setCount] = useState(0)

    let Inc = ()=>{
        setCount(count+1);
     }

  return (
    <>
    <div className='post'>
    <div className='postdiv'>
    <button className='btn1' onClick={()=>props.postdlt}>Delete</button>
    </div>
        <h2>{props.text} </h2> 
        <img src={props.data} alt="nogif"/> <br/>
         <button className='btn2' onClick={Inc} type="button">Like</button>
         <span className='sp'>{count}</span> 
         <button className='btn2' type="button">Comment</button>
         <button className='btn2' type="button">Share</button><br/>
    </div>
    </>
  )
}

export default Post