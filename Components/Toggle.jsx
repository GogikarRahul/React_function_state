import { useState } from "react"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
const Toggle=()=>{
  const [theme,setTheme]=useState(false)
    const handleToggle=()=>{
      setTheme(prev=>!prev)
      console.log(theme)
      
    }
  return(
    <div style={{backgroundColor:theme?'black':'white'}}>
   <button onClick={handleToggle}>{theme?<FaSun/>:<FaMoon/>}</button>
    </div>
  )
}
export default Toggle