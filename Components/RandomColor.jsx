import { useState } from "react"

const RandomColor=()=>{
  const [color,setColor]=useState('')
  const  handleClick=()=>{
    let chars='abcdef0123456789'
    let hexa='#'
    for(let i=0;i<6;i++){
      const RandomColor=Math.floor(Math.random()*chars.length)
      console.log(chars[RandomColor])
      hexa+=chars[RandomColor]
      console.log(hexa)
      setColor(hexa)
    }
  }
  return(
    <div style={{backgroundColor:color ,width:'100vw',height:'90vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <button onClick={handleClick}>click</button>
    </div>
  )
}
export default RandomColor
