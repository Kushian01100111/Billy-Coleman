import Slider from "../../components/Slider";
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"



const MPortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides =[
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319280/Men/Imagenes/1_tlkto0.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319283/Men/Imagenes/1A_piey33.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319280/Men/Imagenes/2_widm3v.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319285/Men/Imagenes/3_ask9wr.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319283/Men/Imagenes/4C_wzczfx.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319299/Men/Imagenes/5_edd83u.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319294/Men/Imagenes/6_amq0ki.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319291/Men/Imagenes/6A_vgz7vi.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319297/Men/Imagenes/8_ooj9kc.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319294/Men/Imagenes/9_al9jej.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319297/Men/Imagenes/10_sjfwnq.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319304/Men/Imagenes/10a_b5tln4.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319302/Men/Imagenes/10B_up0lvr.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319303/Men/Imagenes/11_ol01ns.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319306/Men/Imagenes/11A_iyq5vg.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319309/Men/Imagenes/12_rqjn9l.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319310/Men/Imagenes/13_rue8bn.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319311/Men/Imagenes/14_yrxvjr.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319260/Men/Imagenes/15_qmj3yo.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319253/Men/Imagenes/16_jhpyrb.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319250/Men/Imagenes/18_qtznwv.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319270/Men/Imagenes/18A_hbll22.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319255/Men/Imagenes/19_meuhqm.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319254/Men/Imagenes/20_je4r2l.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319262/Men/Imagenes/20A_minuac.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319262/Men/Imagenes/21_qhczy3.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319268/Men/Imagenes/23_sre9qf.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319263/Men/Imagenes/24_iojsbr.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319272/Men/Imagenes/25_z7sl9p.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319268/Men/Imagenes/26_ztdqsc.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319273/Men/Imagenes/27_psbuuq.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319271/Men/Imagenes/32_onkpky.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678319280/Men/Imagenes/33_jsgrf8.png",
      alt:"Men"
    }];
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

export default MPortfolios
