import Slider from "../../components/Slider"
import "./Portfolios.css"

const WPortfolios = () => {
  const slides= [
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038173/Billy%20Examples/210831_LOVE_WANT_NS_07_0898_hmp86b.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/210831_LOVE_WANT_NS_02_0362_qduosa.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/SHOT_16_059_ixgzre.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038169/Billy%20Examples/SHOT_17_217_odelag.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038168/Billy%20Examples/SHOT_12_004_mkcurp.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038167/Billy%20Examples/SHOT_09_079_cflnkx.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_08_132_qpax5k.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_06_009_s9o7my.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038166/Billy%20Examples/SHOT_09_0124_copy_lmtrhs.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038165/Billy%20Examples/COVER_22_GIEDRE_copy_hnmvtd.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038165/Billy%20Examples/SHOT_04_016_jxh468.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038164/Billy%20Examples/SHOT_04_077_zhbd7r.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038164/Billy%20Examples/NS_ANNADERIJK_014_bsrj0m.jpg'},
    {url: 'https://res.cloudinary.com/dpsobnvtv/image/upload/v1673038163/Billy%20Examples/210831_LOVE_WANT_NS_15_1725AB_ofgaxl.jpg'},
  ]

  return (
    <div>
        <div className="container">
        <Slider slides={slides}/>
        </div>
    </div>
  )
}

export default WPortfolios
