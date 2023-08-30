import Slider from "../../components/Slider";
import {motion as m } from "framer-motion"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"

const APortfolios = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {activeNav} = useOutletContext()
  const slides =[
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678215900/Advertising/imagenes/1_ssev59.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678215772/Advertising/imagenes/2_bvxisj.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316593/Advertising/Imagenes/3_oeoipv.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316593/Advertising/Imagenes/4_v95hat.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316597/Advertising/Imagenes/5_tfyt58.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316594/Advertising/Imagenes/7_qahxue.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316597/Advertising/Imagenes/8_ter1kd.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316594/Advertising/Imagenes/9_eqdlui.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316567/Advertising/Imagenes/10_hghmgc.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316567/Advertising/Imagenes/11_o4siyt.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316567/Advertising/Imagenes/11a_x6v9my.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316567/Advertising/Imagenes/11b_spftcz.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678404986/Advertising/Imagenes/11c_f3ydw5.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316567/Advertising/Imagenes/11d_ix5ttj.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316568/Advertising/Imagenes/11e_yp8mfp.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316572/Advertising/Imagenes/12_rxqu5b.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316569/Advertising/Imagenes/12a_jgoivh.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316571/Advertising/Imagenes/12B_sfyvv7.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316590/Advertising/Imagenes/12D_vbo3rl.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316572/Advertising/Imagenes/13_jkpwbm.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316573/Advertising/Imagenes/14_toa5j0.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316579/Advertising/Imagenes/15_x2temg.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316581/Advertising/Imagenes/16_nuosd9.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316577/Advertising/Imagenes/17_mgciak.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316586/Advertising/Imagenes/18_n36sev.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316584/Advertising/Imagenes/19_c91w8s.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316581/Advertising/Imagenes/20_uznbnq.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316590/Advertising/Imagenes/21_a5poq3.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316583/Advertising/Imagenes/22_g7irqj.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316586/Advertising/Imagenes/23_oydlfg.png",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316584/Advertising/Imagenes/24_xthacu.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316588/Advertising/Imagenes/26_esoz2v.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316590/Advertising/Imagenes/27_v9xbdj.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316590/Advertising/Imagenes/28_tr8r2k.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678316591/Advertising/Imagenes/29_nnhath.jpg",
      alt:"Advertising"
    },
    { url:"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1678404993/Advertising/Imagenes/33_poegtv.jpg",
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

export default APortfolios
