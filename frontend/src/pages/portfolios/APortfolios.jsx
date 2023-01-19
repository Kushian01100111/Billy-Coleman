import Slider from "../../components/Slider";
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"

const APortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides =[
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448582/Billy%20Examples/Men/GQST__Collections-2_fqhpim.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448582/Billy%20Examples/Men/HERO_19_Nagi-Taryn-2_ezgbbx.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448582/Billy%20Examples/Men/080-101_ZOO_63_SHOOTS_NAGI_SAKAI_WERNER_MASA-3ba_tt3i9q.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448582/Billy%20Examples/Men/HERO_19_Nagi-Taryn-2a_wpdnua.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448582/Billy%20Examples/Men/080-101_ZOO_63_SHOOTS_NAGI_SAKAI_WERNER_MASA-3a_cfi6n5.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448582/Billy%20Examples/Men/HERO_19_Nagi-Taryn-4_abnyxm.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448582/Billy%20Examples/Men/080-101_ZOO_63_SHOOTS_NAGI_SAKAI_WERNER_MASA-2b_ni6x4j.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448583/Billy%20Examples/Men/080-101_ZOO_63_SHOOTS_NAGI_SAKAI_WERNER_MASA-2a_eyjape.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448585/Billy%20Examples/Men/Screen_Shot_2022-11-21_at_1.27.56_PMB_bpen2r.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448585/Billy%20Examples/Men/Screen_Shot_2022-11-21_at_1.27.56_PMA_n2ffyx.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448587/Billy%20Examples/Men/Screen_Shot_2022-09-25_at_2.11.58_PM_tnt7rd.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448587/Billy%20Examples/Men/Screen_Shot_2022-09-25_at_2.12.10_PM_aruvzl.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448589/Billy%20Examples/Men/Screen_Shot_2022-09-25_at_2.12.18_PM_syrnq6.png",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1673448590/Billy%20Examples/Men/Screen_Shot_2022-11-21_at_1.28.54_PM_yezabs.png",
      alt:"Men"
    },];
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
