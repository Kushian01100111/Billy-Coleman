import Slider from "../../components/Slider";
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"



const BPortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides =[
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537381/Beauty/Imgs/1_fvf8i7.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537384/Beauty/Imgs/2_mt2snd.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537397/Beauty/Imgs/3_1_nhwcl4.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537382/Beauty/Imgs/4_czh918.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537524/Beauty/Imgs/5_kerjuw.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537384/Beauty/Imgs/6_jqnyej.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537387/Beauty/Imgs/7_tjjms1.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537380/Beauty/Imgs/8_zl9bbf.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537386/Beauty/Imgs/9_qpemdg.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537382/Beauty/Imgs/10_xizhkk.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537387/Beauty/Imgs/11_zf3pla.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537380/Beauty/Imgs/12_fpa83p.jpg",
      alt:"Beauty"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1696537380/Beauty/Imgs/13_euug9i.jpg",
      alt:"Beauty"
    }
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

export default BPortfolios
