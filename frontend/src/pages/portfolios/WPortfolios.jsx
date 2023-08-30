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
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688676376/Women/Galeria/BCF_U7A6169crop_wp4lvi.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1685576520/Women/Galeria/11_a1qxjd.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162662/Women/Galeria/12_hrjaez.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162799/Women/Galeria/13_iwbpok.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162824/Women/Galeria/14_n4cpyo.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162847/Women/Galeria/15_qgyf2u.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162871/Women/Galeria/16_jiqpb1.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162892/Women/Galeria/17_rxa2oh.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162912/Women/Galeria/18_lsby7p.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162936/Women/Galeria/19_eswtv8.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162962/Women/Galeria/20_qrnosy.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688162984/Women/Galeria/21_rtunuo.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163003/Women/Galeria/22_ria4tq.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163021/Women/Galeria/23jpg_ibuimm.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163045/Women/Galeria/24_ao6kfs.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163092/Women/Galeria/25_ot5mgc.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163112/Women/Galeria/26_spejrl.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163142/Women/Galeria/27_gpugyx.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163170/Women/Galeria/28_p1kw88.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163189/Women/Galeria/29_z7uo2f.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163209/Women/Galeria/30_lvwfuq.jpg',
    alt: "Women"},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1688163724/Women/Galeria/31_aqfpdu.jpg',
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


useEffect(() => {
  window.scrollTo(0, 0);
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
