import { Link } from "react-router-dom"

const Men = () => {
  return (
    <div className="video">
     <Link to='/men/portfolio'><h2>Portfolio</h2></Link>
     <iframe
  src="https://player.cloudinary.com/embed/?public_id=3075397806_t3w9ik&cloud_name=dpsobnvtv&player[fluid]=true&player[controls]=false&player[muted]=true&player[skin]=light&player[autoplay]=true&player[loop]=true"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
  title="Showcase"
></iframe>
    </div>
  )
}

export default Men
