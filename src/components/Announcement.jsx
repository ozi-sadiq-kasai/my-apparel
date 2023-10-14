 import  "../Styles/Announcement.css"
 import { useState,useEffect } from "react"

 
const Announcement = () => {
 const [colorChange,setColorChange] = useState('teal')

 useEffect(() =>{
  const interval = setInterval(() => {
   if(colorChange === 'teal'){
    setColorChange('#f42b03')
   }else{
    setColorChange('teal')
   }
  },1000)
  return () =>clearInterval(interval)
 },[colorChange])

 

  return (
    <div
      className="bar"
      div
      style={{ backgroundColor: colorChange }}
    >
      <h4 className="bar__info">
        Super Deal! Free Shipping on Orders Over $50
      </h4>
    </div>
  )
}
export default Announcement