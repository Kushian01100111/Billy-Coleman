import "./styles/main content.css"
import { Link } from "react-router-dom"
import {motion as m} from "framer-motion"

const Women = () => {
  return (
    <m.div 
    className="video"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.75, ease:"easeOut"}}>
     <Link to='/women/portfolio'><h2>Portfolio</h2></Link>
      <iframe
  src="https://player.cloudinary.com/embed/?public_id=3075397806_t3w9ik&cloud_name=dpsobnvtv&player[fluid]=true&player[controls]=false&player[muted]=true&player[skin]=light&player[autoplay]=true&player[loop]=true"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
  title="Showcase"
></iframe>
    </m.div>
  )
}

export default Women
