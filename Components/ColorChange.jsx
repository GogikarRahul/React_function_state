import { useState } from "react"
const ColorChange=()=>{
  const[color,setColor]=useState('')
  const handleClick=(clr)=>{
    setColor(clr)

  }
  return(
    <div style={{backgroundColor:color}}>
     <button onClick={()=>handleClick('red')}>red</button>
     <button onClick={()=>handleClick('yellow')}>yellow</button>
     <button onClick={()=>handleClick('green')}>green</button>
    </div>
  )
}
export default ColorChange
