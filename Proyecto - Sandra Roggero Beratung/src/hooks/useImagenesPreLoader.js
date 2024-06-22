import { useEffect } from "react";
import { useAppState } from "./useAppState";

import bannerPrincipal from "../assets/video/banner.mp4";
import imagenInfo2 from "../assets/imagenes/InfoImagenesHome/imagen2.jpg";
import imagenInfo3 from "../assets/imagenes/InfoImagenesHome/imagen3.jpg";

import fotoPerfil from "../assets/imagenes/fotoPerfil.jpg";

const useImagePreloading = () => {
  const {setImagenesPreloader, imagenesPreloader,setVideosPreloader,activeCarga,setActiveCarga } = useAppState();
  
  useEffect(() => {
    const imagenInfo2Image = new Image();
    const imagenInfo3Image = new Image();

    const fotoPerfilImage = new Image();



    imagenInfo2Image.src = imagenInfo2;
    imagenInfo3Image.src = imagenInfo3;
    fotoPerfilImage.src = fotoPerfil;

    // Preload del video
   const videoElement = document.createElement('video');
   videoElement.src = bannerPrincipal;
   videoElement.onloadeddata = () => {
     // Actualizar el estado cuando el video está cargado
     if(activeCarga === false){
        setActiveCarga(true);
        setVideosPreloader({
            bannerPrincipal: bannerPrincipal, // Aquí guardamos la URL del video
        });
        // Actualizar el estado con la imagen del logo
        setImagenesPreloader({ 
            ...imagenesPreloader, 
            imagenInfo2: imagenInfo2Image,
            imagenInfo3: imagenInfo3Image,
            fotoPerfil: fotoPerfilImage,
        });
     }
   };
  }, []);

};

export default useImagePreloading;


// import { useEffect } from "react";
// import { useAppState } from "./useAppState";

// import bannerPrincipal from "../assets/video/banner.mp4";

// const useVideoPreloading = () => {
//   const { setVideosPreloader,activeCarga,setActiveCarga } = useAppState();

//   useEffect(() => {

//    // Preload del video
//    const videoElement = document.createElement('video');
//    videoElement.src = bannerPrincipal;
//    videoElement.onloadeddata = () => {
//      // Actualizar el estado cuando el video está cargado
//      if(activeCarga === false){
//         setActiveCarga(true);
//         setVideosPreloader({
//             bannerPrincipal: bannerPrincipal, // Aquí guardamos la URL del video
//         });
//      }
//    };
//  }, []);

// };

// export default useVideoPreloading;