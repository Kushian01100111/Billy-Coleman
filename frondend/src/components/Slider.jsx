import { useState } from "react"
import "./Slider.css"



const Slider = ({slides}) => {
  const [currentIndex, setCurrentIndex] =  useState(0);
  const [inlineChange, setInlineChange] =  useState()

    const goToPrevious = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
      setCurrentIndex(newIndex)
    };


    const goToNext = () =>{
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex =  isLastSlide ? 0: currentIndex + 1;
      setTimeout(() => {
        const passingStyles1 = {
          opacity: "0.5"
        };
        setInlineChange(passingStyles1)
      }, 0.4);
      
      setTimeout(() => {
        const passingStyles2 = {
          opacity: "0"
        };
        setInlineChange(passingStyles2);
        setCurrentIndex(newIndex);
      }, 0.2);
      
      setTimeout(() => {
        const passingStyles3 = {
          opacity: "1"
        };
        setInlineChange(passingStyles3);
      }, 0.2);
    };



  return (
      <div className="img" >
      <div className="left" onClick={()=> goToPrevious()}></div>
        <div className="right" onClick={()=> goToNext()}></div>
          <img 
            style={inlineChange}
            src={`${slides[currentIndex].url}`}
            alt={`${slides[currentIndex].alt}`} 
            className="slide" 
             />
      </div>
  )
}

export default Slider