import {motion as m} from "framer-motion"

function App() {
  return (
    <m.div 
    className="video"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.75, ease:"easeOut"}}>
      <iframe
      src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdpsobnvtv%2Fvideo%2Fupload%2Fv1677783764%2F15_Imagenes_rapido_Advertising_rxzbad.mp4&cloud_name=15_Imagenes_rapido_Advertising_rxzb&player[controls]=false&player[muted]=true&player[hideContextMenu]=true&player[autoplay]=true&player[loop]=true"
      title="ShowCase"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowfullscreen
      frameborder="0"
    ></iframe>
    </m.div>
  );
}

export default App;
