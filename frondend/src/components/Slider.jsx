import { useState } from "react"
import "./Slider.css"

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] =  useState(0);

    const goToPrevious = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
      setCurrentIndex(newIndex)
    };

    const goToNext = () =>{
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex =  isLastSlide ? 0: currentIndex + 1;
      setCurrentIndex(newIndex);
    };

  return (
      <div className="img" >
        <div className="left" onClick={goToPrevious}></div>
        <div className="right" onClick={goToNext}></div>

          <img src={`${slides[currentIndex].url}`} className="slide" alt="" />
        {/* <div className="slide" style={{backgroundImage:`url(${slides[currentIndex].url})`}}></div> */}
      </div>
  )
}

export default Slider
