import Slider from "../../components/Slider"
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"


const WPortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides= [
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576519/Women/Galeria/1_c2bdkj.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576519/Women/Galeria/2-3_dksec9.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576520/Women/Galeria/3-4_txuk2o.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576520/Women/Galeria/5-6_qs1vbl.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576520/Women/Galeria/7-8_vjyoyp.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576520/Women/Galeria/10_imelou.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576520/Women/Galeria/11_a1qxjd.jpg',
    alt: "Women"},
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
