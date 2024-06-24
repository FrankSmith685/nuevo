import { useEffect } from "react";
import { useAppState } from "./useAppState";

import bannerPrincipal from "../assets/video/banner.mp4";
import imagenInfo2 from "../assets/imagenes/InfoImagenesHome/imagen2.jpg";
import imagenInfo3 from "../assets/imagenes/InfoImagenesHome/imagen3.jpg";

import fotoPerfil from "../assets/imagenes/fotoPerfil.jpg";

// 
import bannerPrincipal1 from "../assets/imagenes/home/imagen1.jpg";
import bannerPrincipal2 from "../assets/imagenes/home/imagen6.jpg";
import bannerPrincipal3 from "../assets/imagenes/home/imagen7.jpg";
import bannerPrincipal4 from "../assets/imagenes/home/imagen8.jpg";
import bannerPrincipal5 from "../assets/imagenes/home/imagen9.jpg";



const useImagePreloading = () => {
  const {setImagenesPreloader, imagenesPreloader,setVideosPreloader,activeCarga,setActiveCarga } = useAppState();
  
  useEffect(() => {
    const imagenInfo2Image = new Image();
    const imagenInfo3Image = new Image();

    const fotoPerfilImage = new Image();

    const bannerPrincipal1Image = new Image();
    const bannerPrincipal2Image = new Image();
    const bannerPrincipal3Image = new Image();
    const bannerPrincipal4Image = new Image();
    const bannerPrincipal5Image = new Image();



    imagenInfo2Image.src = imagenInfo2;
    imagenInfo3Image.src = imagenInfo3;
    fotoPerfilImage.src = fotoPerfil;
    bannerPrincipal1Image.src = bannerPrincipal1;
    bannerPrincipal2Image.src = bannerPrincipal2;
    bannerPrincipal3Image.src = bannerPrincipal3;
    bannerPrincipal4Image.src = bannerPrincipal4;
    bannerPrincipal5Image.src = bannerPrincipal5;

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
            bannerPrincipal1: bannerPrincipal1Image,
            bannerPrincipal2: bannerPrincipal2Image,
            bannerPrincipal3: bannerPrincipal3Image,
            bannerPrincipal4: bannerPrincipal4Image,
            bannerPrincipal5: bannerPrincipal5Image,
            
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