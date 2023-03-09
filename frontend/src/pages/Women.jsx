import { useNavigate, useOutletContext} from "react-router-dom"
import { useState, useEffect } from "react"
import {motion as m} from "framer-motion"

const Women = () => {
  const {activeNav} = useOutletContext()
  const [iframeMouseOver, setIframeMouseOver] =  useState(false);
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/women/portfolio')
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
            src="https://player.cloudinary.com/embed/?public_id=3075397806_t3w9ik&cloud_name=dpsobnvtv&player[fluid]=true&player[controls]=false&player[muted]=true&player[skin]=light&player[autoplay]=true&player[loop]=true"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
            title="Showcase">
        </iframe>
     </div>
    </m.div>
  )
}

export default Women
