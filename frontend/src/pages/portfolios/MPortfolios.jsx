import Slider from "../../components/Slider";
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"



const MPortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides =[
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678568212/Men/Imagenes/1_4_x9jxwj.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678568207/Men/Imagenes/2_y5xxrv.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567569/Men/Imagenes/3_l33xnr.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567548/Men/Imagenes/4_hwbu1q.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567549/Men/Imagenes/5_yfxxoo.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567550/Men/Imagenes/6_vsuqk7.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678567551/Men/Imagenes/7_dcyfwe.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567550/Men/Imagenes/8_trrkjo.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567554/Men/Imagenes/9_v047sz.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678568203/Men/Imagenes/10_ig9kom.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567553/Men/Imagenes/11_hlzelr.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567561/Men/Imagenes/12_x6fblr.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567553/Men/Imagenes/13_unuxuf.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567567/Men/Imagenes/14_w2ifnn.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567559/Men/Imagenes/15_o4wcqi.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678568204/Men/Imagenes/16_x4y0vs.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567556/Men/Imagenes/17_vwstw2.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567559/Men/Imagenes/18_th8c09.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567562/Men/Imagenes/19_rux7tt.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567566/Men/Imagenes/20_bnr1kq.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567566/Men/Imagenes/21_ju9qgo.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567566/Men/Imagenes/22_tbr52p.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567564/Men/Imagenes/23_xdqgqa.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678567565/Men/Imagenes/24_hsxyng.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678580119/Men/Imagenes/25_hhhdqz.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678580120/Men/Imagenes/26_fv8iz1.jpg",
      alt:"Men"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678580128/Men/Imagenes/27_ipwzcr.jpg",
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
