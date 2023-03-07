import { useState } from "react"
import {motion as m } from "framer-motion"
import "./Slider.css"



const Slider = ({slides}) => {
  const [currentIndex, setCurrentIndex] =  useState(0);
  const [goRight, setGoRight] = useState(false)
  const [goLeft, setGoLeft] = useState(false)

    const goToPrevious = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
      setCurrentIndex(newIndex)
      setGoLeft(true)
      setGoRight(false)
    };


    const goToNext = () =>{
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex =  isLastSlide ? 0: currentIndex + 1;
        setCurrentIndex(newIndex);
        setGoLeft(false)
        setGoRight(true)
    };

    console.log(goLeft, goRight)


  return (
      <div className="img" >
      <div className="left" onClick={()=> goToPrevious()}></div>
        <div className="right" onClick={()=> goToNext()}></div>
        <m.img  src={`${currentIndex === 0 ? slides[slides.length - 1].url : slides[currentIndex-1].url}`}
                alt={`${currentIndex === 0 ? slides[slides.length - 1].alt : slides[currentIndex-1].alt}`}
                  initial={{opacity: 0, display: "none"}}
                  className="slide"
                />
          <m.img key={currentIndex}
            src={`${slides[currentIndex].url}`}
            alt={`${slides[currentIndex].alt}`} 
            initial={goLeft === goRight ? {opacity:0, x:100} 
                    : goLeft ? {opacity:0, x:-150}
                    : goRight ? {opacity:0, x: 150} 
                    : ""}
            animate={{opacity:1, x:0}}
            className="slide" 
             />
        <m.img  src={`${currentIndex === slides.length - 1? slides[0].url : slides[currentIndex+1].url }`}
                alt={`${currentIndex === slides.length - 1? slides[0].alt : slides[currentIndex+1].alt }`}
                initial={{opacity: 0, display: "none"}}
                  className="slide"
                />
      </div>
  )
}

export default Slider