import {motion as m} from "framer-motion"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <m.div 
    className="video"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.75, ease:"easeOut"}}>

      <iframe
      src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdpsobnvtv%2Fvideo%2Fupload%2Fv1688684774%2FPagina%2520inicial%2520Billy%2FFinal_h2rmjh.mp4&cloud_name=demoFinal_h2rmjh&player[controls]=false&player[muted]=true&player[autoplay]=true&player[loop]=true"
      title="ShowCase"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowfullscreen
      frameborder="0"
      
    ></iframe>
    </m.div>
  );
}

export default App;
