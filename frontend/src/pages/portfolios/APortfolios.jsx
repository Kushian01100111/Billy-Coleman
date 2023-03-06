import Slider from "../../components/Slider";
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"

const APortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides =[
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678131347/Advertising/imagenes/1_domoep.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130745/Advertising/imagenes/2_jnxn3j.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130732/Advertising/imagenes/3_bh0agx.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130738/Advertising/imagenes/4_wykjdc.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678131385/Advertising/imagenes/5_cfimuo.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130734/Advertising/imagenes/6_jrtwsu.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130732/Advertising/imagenes/7_kxnlck.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130731/Advertising/imagenes/8_mznwqf.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130733/Advertising/imagenes/9_eo2lh2.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130745/Advertising/imagenes/10_esm1qx.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130738/Advertising/imagenes/11_rvyl2h.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130738/Advertising/imagenes/12_pzw58z.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130740/Advertising/imagenes/13_d0izl6.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130739/Advertising/imagenes/14_b7hn7d.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130748/Advertising/imagenes/15_hgffdg.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130743/Advertising/imagenes/17_pm0ush.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130742/Advertising/imagenes/18_os4y5f.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130748/Advertising/imagenes/19_tw3mxn.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130744/Advertising/imagenes/20_xflsnv.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/v1678130747/Advertising/imagenes/21_v5peuq.jpg",
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
