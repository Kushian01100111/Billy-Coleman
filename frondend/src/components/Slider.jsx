import { useState } from "react"
import "./Slider.css"

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] =  useState(0)
  return (
      <div className="img" >
        <div className="left"></div>
        <div className="right"></div>
        <img src={slides[currentIndex].url} alt="" />
      </div>
  )
}

export default Slider
