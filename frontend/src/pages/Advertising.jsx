import { useNavigate, useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"
import {motion as m} from "framer-motion"

const Advertising = () => {
  const {activeNav} = useOutletContext()
  const [iframeMouseOver, setIframeMouseOver] =  useState(false);
  const navigate = useNavigate()
  const handleClick = () =>{
      navigate('/advertising/portfolio')
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

useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

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
            src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdpsobnvtv%2Fvideo%2Fupload%2Fv1678368427%2FAdvertising%2FImagenes_Corregidas_xmjaln.mp4&cloud_name=Imagenes_Corregidas_xmjaln&player[controls]=false&player[muted]=true&player[hideContextMenu]=true&player[autoplay]=true&player[loop]=true"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
            title="Showcase">
        </iframe>
     </div>
    </m.div>
  )
}

export default Advertising
