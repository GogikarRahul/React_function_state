import React, { useState } from 'react'
import Data from './Data';
import ColorChange from '../Components/ColorChange';
import Counter from '../Components/Counter';
import Fakestore from '../Components/FakeStore';
import RandomColor from '../Components/RandomColor';
import Toggle from '../Components/Toggle';
// const App=()=>{
//   let [count,setCount]=useState(0)

//   const handleClick=(X)=>{
//     if(X===0){
//       setCount(0)
//     }
//     else{
// setCount(count+X)
//     }
   
//   }
   
//   return(
//     <div>
//       <h1>state component increment</h1>
//       <h1>{count}</h1>
//       <button onClick={()=>handleClick(10)} disabled={count===100}>+</button>
//       <button onClick={()=>handleClick(-10)} disabled={count===0}>-</button>
//       <button  onClick={()=>handleClick(0)}>Reset</button>
//     </div>
//   )

// }
// export default App

// const App=()=>{
//   const[color,setColor]=useState('')
//   const handleClick=(clr)=>{
//     setColor(clr)

//   }
//   return(
//     <div style={{backgroundColor:color}}>
//      <button onClick={()=>handleClick('red')}>red</button>
//      <button onClick={()=>handleClick('yellow')}>yellow</button>
//      <button onClick={()=>handleClick('green')}>green</button>
//     </div>
//   )
// }
// export default App


// const App=()=>{
//   const [color,setColor]=useState('')
//   const  handleClick=()=>{
//     let chars='abcdef0123456789'
//     let hexa='#'
//     for(let i=0;i<6;i++){
//       const RandomColor=Math.floor(Math.random()*chars.length)
//       console.log(chars[RandomColor])
//       hexa+=chars[RandomColor]
//       console.log(hexa)
//       setColor(hexa)
//     }
//   }
//   return(
//     <div style={{backgroundColor:color ,width:'100vw',height:'90vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
//      <button onClick={handleClick}>click</button>
//     </div>
//   )
// }
// export default App

// const App=()=>{
//   const [theme,setTheme]=useState(false)
//     const handleToggle=()=>{
//       setTheme(prev=>!prev)
//       console.log(theme)
      
//     }
//   return(
//     <div style={{backgroundColor:theme?'black':'white'}}>
//    <button onClick={handleToggle}>{theme?<FaSun/>:<FaMoon/>}</button>
//     </div>
//   )
// }
// export default App

// const App=()=>{
//   const[data,setFakestoredata]=useState([])
// const handleClick=(cat)=>{
//   const Final=Data.filter(
//     (val)=>{
//       return val.category===cat

//     }
// )
// if(Final.length>0){
// setFakestoredata(Final)
// }
// else{
//   <h1></h1>
// }
// }
//   return(
//     <div>
//      <button onClick={()=>handleClick('electronics')}>electronics</button>
//      <button onClick={()=>handleClick('jewelery')}>jewellery</button>

//      <div >
//         {data.map((val)=>{
//           return(
//            <div>
//              <img  src={val.image} width={100}/>
//            <h1>{val.title}</h1> 
//            </div>
//           )
//         })}
//      </div>
//     </div>
   
//   )
// }
// export default App


const App = () => {
  return (
    <div>
      <Counter/>
      <ColorChange/>
      <RandomColor/>
      <Toggle/>
      <Fakestore/>
    </div>
  )
}

export default App
