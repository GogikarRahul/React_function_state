import Data from "../src/Data"
import {useState}from 'react'
const Fakestore=()=>{
  const[data,setFakestoredata]=useState([])
const handleClick=(cat)=>{
  const Final=Data.filter(
    (val)=>{
      return val.category===cat

    }
)
if(Final.length>0){
setFakestoredata(Final)
}
else{
  <h1></h1>
}
}
  return(
    <div>
     <button onClick={()=>handleClick('electronics')}>electronics</button>
     <button onClick={()=>handleClick('jewelery')}>jewellery</button>

     <div >
        {data.map((val)=>{
          return(
           <div>
             <img  src={val.image} width={100}/>
           <h1>{val.title}</h1> 
           </div>
          )
        })}
     </div>
    </div>
   
  )
}
export default Fakestore