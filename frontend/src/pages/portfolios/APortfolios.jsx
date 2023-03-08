import Slider from "../../components/Slider";
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"

const APortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides =[
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215900/Advertising/imagenes/1_rvvbbs.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215772/Advertising/imagenes/2_ss3o2e.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215747/Advertising/imagenes/3_jp7qam.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215747/Advertising/imagenes/4_utzl0d.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215749/Advertising/imagenes/5_pwbmcz.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678220984/Advertising/imagenes/3YJ70ijY_vrze47.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215764/Advertising/imagenes/8_qropou.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215750/Advertising/imagenes/9_htlsd8.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215753/Advertising/imagenes/10_qgekeg.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215750/Advertising/imagenes/11_e0ddku.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215751/Advertising/imagenes/11A_lvfsii.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215754/Advertising/imagenes/11B_ytyjgg.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215760/Advertising/imagenes/11C_m2hjxn.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215750/Advertising/imagenes/11D_shymsi.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215751/Advertising/imagenes/11E_wrnhw6.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215751/Advertising/imagenes/12A_xjlkhg.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215764/Advertising/imagenes/12B_fpvnn9.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678216284/Advertising/imagenes/12C_1_x6xf7d.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215772/Advertising/imagenes/12D_tdeaew.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215752/Advertising/imagenes/13_cs82ed.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215754/Advertising/imagenes/14_sdbc9g.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215756/Advertising/imagenes/15_xxkfdc.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215771/Advertising/imagenes/16_j4ycmb.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215747/Advertising/imagenes/17_rodnkd.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678216391/Advertising/imagenes/18_lcls0g.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215756/Advertising/imagenes/19_t3jh17.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215760/Advertising/imagenes/20_pxsyc0.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215759/Advertising/imagenes/21_eftnsh.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215748/Advertising/imagenes/22_xhtfxu.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215760/Advertising/imagenes/23_u5efjl.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215748/Advertising/imagenes/24_pnyevd.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215747/Advertising/imagenes/26_kfeffo.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215762/Advertising/imagenes/27_dqbpea.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215762/Advertising/imagenes/28_rdve4a.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215771/Advertising/imagenes/29_xsvvxx.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678215759/Advertising/imagenes/30_x9dclc.jpg",
      alt:"Advertising"
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

export default APortfolios
