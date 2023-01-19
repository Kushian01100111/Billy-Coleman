import Slider from "../../components/Slider"
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"


const WPortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides= [
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038173/Billy%20Examples/210831_LOVE_WANT_NS_07_0898_hmp86b.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/210831_LOVE_WANT_NS_02_0362_qduosa.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/SHOT_16_059_ixgzre.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/SHOT_17_217_odelag.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038168/Billy%20Examples/SHOT_12_004_mkcurp.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038167/Billy%20Examples/SHOT_09_079_cflnkx.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_08_132_qpax5k.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_06_009_s9o7my.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_09_0124_copy_lmtrhs.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038165/Billy%20Examples/COVER_22_GIEDRE_copy_hnmvtd.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038165/Billy%20Examples/SHOT_04_016_jxh468.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038164/Billy%20Examples/SHOT_04_077_zhbd7r.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038164/Billy%20Examples/NS_ANNADERIJK_014_bsrj0m.jpg',
    alt: ""},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038163/Billy%20Examples/210831_LOVE_WANT_NS_15_1725AB_ofgaxl.jpg',
    alt: ""},
  ];
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

  return (
    <>
    { width <= 1024?
      <m.div 
    className={`${activeNav ? "opacacy": ""}`}
    initial={{opacity: 0, y:-10}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: "backInOut"}}>
      <div className="contentImg">
        {slides.map((img,i) => (
          <img key={i} src={img.url} alt={img.alt} className="img"/>
        ))}
      </div>
    </m.div>
    :<m.div 
    className={`${activeNav ? "opacacy": ""}`}
    initial={{opacity: 0, y:-10}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: "backInOut"}}>
        <div className="container">
        <Slider slides={slides}/>
        </div>
    </m.div> }
    
    </>
  )
}

export default WPortfolios
