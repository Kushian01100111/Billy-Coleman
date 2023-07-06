import { useNavigate, useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"
import {motion as m} from "framer-motion"

const Beauty = () => {
  const {activeNav} = useOutletContext()
  const [iframeMouseOver, setIframeMouseOver] =  useState(false);
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/beauty/portfolio')
}
  const handleMouseOver =() =>{
    setIframeMouseOver(!iframeMouseOver)
  }
  function onWindowBlur (){
    if(iframeMouseOver){ 
      handleClick()
    }
  };

  useEffect(() => {
    window.addEventListener('blur', onWindowBlur);
    return () => {
        window.removeEventListener('blur', onWindowBlur);
    }
},);


  return (
    <m.div 
    className={`video ${activeNav ? "opacacy": ""}`}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.75, ease:"easeOut"}}>
     <h2 onClick={handleClick}>Portfolio</h2>
     <div className="iframeContainer" onClick={handleClick}
     onMouseOver={handleMouseOver}
     onMouseOut={handleMouseOver}>
      <iframe 
            src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdpsobnvtv%2Fvideo%2Fupload%2Fv1688501056%2FPagina%2520inicial%2520Billy%2FSin_t%25C3%25ADtulo_zcwq4c.mp4&cloud_name=Sin_t%C3%ADtulo_zcwq4c&player[controls]=false&player[muted]=true&player[autoplay]=true&player[loop]=true"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
            title="Showcase">
        </iframe>
     </div>
    </m.div>
  )
}

export default Beauty
