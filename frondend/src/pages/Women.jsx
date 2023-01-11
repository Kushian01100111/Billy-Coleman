import "./styles/main content.css"
import { useNavigate } from "react-router-dom"
import {motion as m} from "framer-motion"

const Women = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
      navigate('/women/portfolio')
  };

  // const cacheSlidesImg = async (srcArray) =>{
  //   const promises = await srcArray.map((slide)=>{
  //     return new Promise ( function (resolve, reject){
  //       const img = new Image();

  //       img.src = slide.url
  //       img.alt = slide.alt
  //       img.className= "slide"
  //       img.onload= resolve();
  //       img.onerror= reject();
  //     });
  //   });
  //   setSlideImgs( await Promise.all(promises))
  // } 

  // useEffect(()=>{
  //   const slides =[{url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038173/Billy%20Examples/210831_LOVE_WANT_NS_07_0898_hmp86b.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/210831_LOVE_WANT_NS_02_0362_qduosa.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/SHOT_16_059_ixgzre.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/SHOT_17_217_odelag.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038168/Billy%20Examples/SHOT_12_004_mkcurp.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038167/Billy%20Examples/SHOT_09_079_cflnkx.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_08_132_qpax5k.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_06_009_s9o7my.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_09_0124_copy_lmtrhs.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038165/Billy%20Examples/COVER_22_GIEDRE_copy_hnmvtd.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038165/Billy%20Examples/SHOT_04_016_jxh468.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038164/Billy%20Examples/SHOT_04_077_zhbd7r.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038164/Billy%20Examples/NS_ANNADERIJK_014_bsrj0m.jpg',
  //   alt: ""},
  //   {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038163/Billy%20Examples/210831_LOVE_WANT_NS_15_1725AB_ofgaxl.jpg',
  //   alt: ""},];

  //   cacheSlidesImg(slides)
  // }, []);


  return (
    <m.div 
    className="video"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.75, ease:"easeOut"}}>
     <h2 onClick={handleClick}>Portfolio</h2>
      <iframe
          src="https://player.cloudinary.com/embed/?public_id=3075397806_t3w9ik&cloud_name=dpsobnvtv&player[fluid]=true&player[controls]=false&player[muted]=true&player[skin]=light&player[autoplay]=true&player[loop]=true"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
          title="Showcase">
      </iframe>
    </m.div>
  )
}

export default Women
