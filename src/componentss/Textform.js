import React from 'react'
import { useState } from 'react'

export default function Textform() {
    const ToUppercase=()=>{
        //console.log("uppercase was clicked")
        let newText= text.toUpperCase();
        setText(newText);
       // setText(text.toUpperCase)
    }

    const handleOnchange = (event)=>{
        console.log("onchange was clicked")
        setText(event.target.value);
    }
    const[text,setText]=useState("enter ur text");
    // setText("good going")
  return (
   <>
<div className="container  my-5" >
<div className="mb-3"  >
  <label for="exampleFormControlTextarea1" className="form-label">
    <strong>
        Analyse UR words
    </strong>
  </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} rows="3" value={text}></textarea>
</div>
<button className="btn btn-primary mx-3"   onClick={ToUppercase}>To Uppercase</button>
<button className="btn btn-danger mx-3">so what</button>
<button className="btn btn-primary mx-3">so what</button>
<button className="btn btn-danger mx-3">so what</button>
   
</div>
   </>

  )
}
