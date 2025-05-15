import {useState} from 'react'
const Counter=()=>{
  let [count,setCount]=useState(0)

  const handleClick=(X)=>{
    if(X===0){
      setCount(0)
    }
    else{
setCount(count+X)
    }
   
  }
   
  return(
    <div>
      <h1>state component increment</h1>
      <h1>{count}</h1>
      <button onClick={()=>handleClick(10)} disabled={count===100}>+</button>
      <button onClick={()=>handleClick(-10)} disabled={count===0}>-</button>
      <button  onClick={()=>handleClick(0)}>Reset</button>
    </div>
  )

}
export default Counter