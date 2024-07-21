// import { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FaSpinner } from 'react-icons/fa';
// import HeaderNav from "../pages/assets/HeaderNav";
// import Footer from "../pages/assets/Footer";

// import { useAppState } from "../hooks/useAppState";
// import useVideoPreloading from "../hooks/useVideosPreLoader";
// // Importa los componentes de las páginas
// const HomePage = lazy(() => import("../pages/home/HomePage"));

// const PersonalauswahlUndRekrutierung = lazy(() => import("../components/Unternehmen/PersonalauswahlUndRekrutierung"));
// const Personalbewertungen = lazy(() => import("../components/Unternehmen/Personalbewertungen"));
// const International = lazy(() => import("../components/Unternehmen/International"));
// const Funktionen = lazy(() => import("../components/Unternehmen/funktionen"));
// const FachspezifischeSuche = lazy(() => import("../components/Unternehmen/FachspezifischeSuche"));
// const Inklusionsaudit = lazy(() => import("../components/Unternehmen/Inklusionsaudit"));

// const RegistrierenSieIhrenLebenslauf = lazy(() => import("../components/Kandidaten/RegistrierenSieIhrenLebenslauf"));
// const InternationalesKarrieremanagement = lazy(() => import("../components/Kandidaten/InternationalesKarrieremanagement"));

// const UnserePhilosophie = lazy(() => import("../components/Wir/UnserePhilosophie"));
// const WerWirSind = lazy(() => import("../components/Wir/WerWirSind"));

// const StudiumAusbildungPraktikum = lazy(() => import("../components/Meine-Dienstleistungen/StudiumAusbildungPraktikum")); 
// const ArbeitSteuern = lazy(() => import("../components/Meine-Dienstleistungen/ArbeitSteuern"));
// const WohnenTransport = lazy(() => import("../components/Meine-Dienstleistungen/WohnenTransport"));
// const VisumSprache = lazy(() => import("../components/Meine-Dienstleistungen/VisumSprache"));

// const Kontakt = lazy(() => import("../components/Kontakt/kontakt"));

// const PrivacyPolicy = lazy(() => import("../pages/assets/PrivacyPolicy"));
// const Benutzerrechte = lazy(() => import("../pages/assets/Benutzerrechte"));

// export const AppRoutes = () => {
//   const {activeCarga} = useAppState();
//   // Cargamos las imagenes
//   useVideoPreloading();

//   return (
//     <>
//       <Router>
//         <div>
//         {!activeCarga ? (<div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
//                 <FaSpinner className="animate-spin text-9xl text-gray-500" />
//               </div>) : (
//           <>
//             <HeaderNav />
//             <Suspense fallback={(
//               <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
//                 <FaSpinner className="animate-spin text-9xl text-gray-500" />
//               </div>
//             )}>
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/unternehmen/personalauswahl-und-rekrutierung" element={<PersonalauswahlUndRekrutierung/>} />
//                 <Route path="/unternehmen/personalbewertungen" element={<Personalbewertungen/>} />
//                 <Route path="/unternehmen/international" element={<International/>} />
//                 <Route path="/unternehmen/funktionen" element={<Funktionen/>} />
//                 <Route path="/unternehmen/fachspezifische-suche" element={<FachspezifischeSuche/>} />
//                 <Route path="/unternehmen/inklusionsaudit" element={<Inklusionsaudit/>} />

//                 <Route path="/kandidaten/registrieren-sie-ihren-lebenslauf" element={<RegistrierenSieIhrenLebenslauf/>} />
//                 <Route path="/kandidaten/internationales-karrieremanagement" element={<InternationalesKarrieremanagement/>} />

//                 <Route path="/wir/unsere-philosophie" element={<UnserePhilosophie/>} />
//                 <Route path="/wir/wer-wir-sind" element={<WerWirSind/>} />
                
//                 {/*Meine-Dienstleistungen*/}
//                 <Route path="/meine-dienstleistungen/studium-ausbildung-praktikum" element={<StudiumAusbildungPraktikum />} />
//                 <Route path="/meine-dienstleistungen/arbeit-steuern" element={<ArbeitSteuern />} />
//                 <Route path="/meine-dienstleistungen/wohnen-beförderung" element={<WohnenTransport />} />
//                 <Route path="/meine-dienstleistungen/visum-sprache" element={<VisumSprache />} />

//                 <Route path="/kontakt" element={<Kontakt />} />
            
//                 <Route path="/datenschutzrichtlinie" element={<PrivacyPolicy />} />
//                 <Route path="/benutzerrechte" element={<Benutzerrechte />} />
                
//               </Routes>
//             </Suspense>
//             <Footer />
//           </>
//          )}
//         </div>
//       </Router>
//     </>
//   );
// };




// import { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { FaSpinner } from 'react-icons/fa';
// import HeaderNav from "../pages/assets/HeaderNav";
// import Footer from "../pages/assets/Footer";
// import { useAppState } from "../hooks/useAppState";
// import useVideoPreloading from "../hooks/useVideosPreLoader";

// // Importa los componentes de las páginas
// const HomePage = lazy(() => import("../pages/home/HomePage"));

// const PersonalauswahlUndRekrutierung = lazy(() => import("../components/Unternehmen/PersonalauswahlUndRekrutierung"));
// const Personalbewertungen = lazy(() => import("../components/Unternehmen/Personalbewertungen"));
// const International = lazy(() => import("../components/Unternehmen/International"));
// const Funktionen = lazy(() => import("../components/Unternehmen/funktionen"));
// const FachspezifischeSuche = lazy(() => import("../components/Unternehmen/FachspezifischeSuche"));
// const Inklusionsaudit = lazy(() => import("../components/Unternehmen/Inklusionsaudit"));

// const RegistrierenSieIhrenLebenslauf = lazy(() => import("../components/Kandidaten/RegistrierenSieIhrenLebenslauf"));
// const InternationalesKarrieremanagement = lazy(() => import("../components/Kandidaten/InternationalesKarrieremanagement"));

// const UnserePhilosophie = lazy(() => import("../components/Wir/UnserePhilosophie"));
// const WerWirSind = lazy(() => import("../components/Wir/WerWirSind"));

// const StudiumAusbildungPraktikum = lazy(() => import("../components/Meine-Dienstleistungen/StudiumAusbildungPraktikum")); 
// const ArbeitSteuern = lazy(() => import("../components/Meine-Dienstleistungen/ArbeitSteuern"));
// const WohnenTransport = lazy(() => import("../components/Meine-Dienstleistungen/WohnenTransport"));
// const VisumSprache = lazy(() => import("../components/Meine-Dienstleistungen/VisumSprache"));

// const Kontakt = lazy(() => import("../components/Kontakt/kontakt"));

// const PrivacyPolicy = lazy(() => import("../pages/assets/PrivacyPolicy"));
// const Benutzerrechte = lazy(() => import("../pages/assets/Benutzerrechte"));

// export const AppRoutes = () => {
//   const { activeCarga,tipoIdioma } = useAppState();
//   // Cargamos las imagenes
//   useVideoPreloading();

//   return (
//     <>
//       <Router>
//         <div>
//           {!activeCarga ? (
//             <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
//               <FaSpinner className="animate-spin text-9xl text-gray-500" />
//             </div>
//           ) : (
//             <>
//               <HeaderNav />
//               <Suspense
//                 fallback={
//                   <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
//                     <FaSpinner className="animate-spin text-9xl text-gray-500" />
//                   </div>
//                 }
//               >
//                 <Routes>
//                   <Route path="/" element={<HomePage />} />
//                   {tipoIdioma === 'de' ? (<>
//                     <Route path="/unternehmen/personalauswahl-und-rekrutierung" element={<PersonalauswahlUndRekrutierung />} />
//                   </>) : (<>
//                     <Route path="/empresa/seleccion-y-reclutamiento-de-personal" element={<PersonalauswahlUndRekrutierung />} />
//                   </>)}
                  
//                   <Route path="/unternehmen/personalbewertungen" element={<Personalbewertungen />} />
//                   <Route path="/unternehmen/international" element={<International />} />
//                   <Route path="/unternehmen/funktionen" element={<Funktionen />} />
//                   <Route path="/unternehmen/fachspezifische-suche" element={<FachspezifischeSuche />} />
//                   <Route path="/unternehmen/inklusionsaudit" element={<Inklusionsaudit />} />

//                   <Route path="/kandidaten/registrieren-sie-ihren-lebenslauf" element={<RegistrierenSieIhrenLebenslauf />} />
//                   <Route path="/kandidaten/internationales-karrieremanagement" element={<InternationalesKarrieremanagement />} />

//                   <Route path="/wir/unsere-philosophie" element={<UnserePhilosophie />} />
//                   <Route path="/wir/wer-wir-sind" element={<WerWirSind />} />

//                   {/*Meine-Dienstleistungen*/}
//                   <Route path="/meine-dienstleistungen/studium-ausbildung-praktikum" element={<StudiumAusbildungPraktikum />} />
//                   <Route path="/meine-dienstleistungen/arbeit-steuern" element={<ArbeitSteuern />} />
//                   <Route path="/meine-dienstleistungen/wohnen-beförderung" element={<WohnenTransport />} />
//                   <Route path="/meine-dienstleistungen/visum-sprache" element={<VisumSprache />} />

//                   <Route path="/kontakt" element={<Kontakt />} />

//                   <Route path="/datenschutzrichtlinie" element={<PrivacyPolicy />} />
//                   <Route path="/benutzerrechte" element={<Benutzerrechte />} />

//                   {/* Redirigir rutas no coincidentes a la página de inicio */}
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </Suspense>
//               <Footer />
//             </>
//           )}
//         </div>
//       </Router>
//     </>
//   );
// };

// export default AppRoutes;

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
import HeaderNav from "../pages/assets/HeaderNav";
import Footer from "../pages/assets/Footer";
import { useAppState } from "../hooks/useAppState";
import useVideoPreloading from "../hooks/useVideosPreLoader";

// Importa los componentes de las páginas
const HomePage = lazy(() => import("../pages/home/HomePage"));

const PersonalauswahlUndRekrutierung = lazy(() => import("../components/Unternehmen/PersonalauswahlUndRekrutierung"));
const Personalbewertungen = lazy(() => import("../components/Unternehmen/Personalbewertungen"));
const International = lazy(() => import("../components/Unternehmen/International"));
const Funktionen = lazy(() => import("../components/Unternehmen/funktionen"));
const FachspezifischeSuche = lazy(() => import("../components/Unternehmen/FachspezifischeSuche"));
const Inklusionsaudit = lazy(() => import("../components/Unternehmen/Inklusionsaudit"));

const RegistrierenSieIhrenLebenslauf = lazy(() => import("../components/Kandidaten/RegistrierenSieIhrenLebenslauf"));
const InternationalesKarrieremanagement = lazy(() => import("../components/Kandidaten/InternationalesKarrieremanagement"));

const UnserePhilosophie = lazy(() => import("../components/Wir/UnserePhilosophie"));
const WerWirSind = lazy(() => import("../components/Wir/WerWirSind"));

const StudiumAusbildungPraktikum = lazy(() => import("../components/Meine-Dienstleistungen/StudiumAusbildungPraktikum")); 
const ArbeitSteuern = lazy(() => import("../components/Meine-Dienstleistungen/ArbeitSteuern"));
const WohnenTransport = lazy(() => import("../components/Meine-Dienstleistungen/WohnenTransport"));
const VisumSprache = lazy(() => import("../components/Meine-Dienstleistungen/VisumSprache"));

const Kontakt = lazy(() => import("../components/Kontakt/kontakt"));

const PrivacyPolicy = lazy(() => import("../pages/assets/PrivacyPolicy"));
const Benutzerrechte = lazy(() => import("../pages/assets/Benutzerrechte"));

export const AppRoutes = () => {
  const { activeCarga, tipoIdioma } = useAppState();
  // Cargamos las imagenes
  useVideoPreloading();

  return (
    <>
      <Router>
        <div>
          {/* {!activeCarga ? (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
              <FaSpinner className="animate-spin text-9xl text-gray-500" />
            </div>
          ) : ( */}
            <>
              <HeaderNav />
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
                    <FaSpinner className="animate-spin text-9xl text-gray-500" />
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  
                  {tipoIdioma === 'de' ? (
                    <>
                      <Route path="/unternehmen/personalauswahl-und-rekrutierung" element={<PersonalauswahlUndRekrutierung />} />
                      <Route path="/unternehmen/personalbewertungen" element={<Personalbewertungen />} />
                      <Route path="/unternehmen/international" element={<International />} />
                      <Route path="/unternehmen/funktionen" element={<Funktionen />} />
                      <Route path="/unternehmen/fachspezifische-suche" element={<FachspezifischeSuche />} />
                      <Route path="/unternehmen/inklusionsaudit" element={<Inklusionsaudit />} />
                      <Route path="/kandidaten/registrieren-sie-ihren-lebenslauf" element={<RegistrierenSieIhrenLebenslauf />} />
                      <Route path="/kandidaten/internationales-karrieremanagement" element={<InternationalesKarrieremanagement />} />
                      <Route path="/wir/unsere-philosophie" element={<UnserePhilosophie />} />
                      <Route path="/wir/wer-wir-sind" element={<WerWirSind />} />
                      <Route path="/meine-dienstleistungen/studium-ausbildung-praktikum" element={<StudiumAusbildungPraktikum />} />
                      <Route path="/meine-dienstleistungen/arbeit-steuern" element={<ArbeitSteuern />} />
                      <Route path="/meine-dienstleistungen/wohnen-beförderung" element={<WohnenTransport />} />
                      <Route path="/meine-dienstleistungen/visum-sprache" element={<VisumSprache />} />
                      <Route path="/kontakt" element={<Kontakt />} />
                      <Route path="/datenschutzrichtlinie" element={<PrivacyPolicy />} />
                      <Route path="/benutzerrechte" element={<Benutzerrechte />} />
                    </>
                  ) : (
                    tipoIdioma === 'en'? (
                      <>
                        <Route path="/company/personnel-selection-and-recruitment" element={<PersonalauswahlUndRekrutierung />} />
                        <Route path="/company/personnel-evaluations" element={<Personalbewertungen />} />
                        <Route path="/company/international" element={<International />} />
                        <Route path="/company/functions" element={<Funktionen />} />
                        <Route path="/company/specialized-search" element={<FachspezifischeSuche />} />
                        <Route path="/company/inclusion-audit" element={<Inklusionsaudit />} />
                        <Route path="/candidates/register-your-resume" element={<RegistrierenSieIhrenLebenslauf />} />
                        <Route path="/candidates/international-career-management" element={<InternationalesKarrieremanagement />} />
                        <Route path="/about-us/our-philosophy" element={<UnserePhilosophie />} />
                        <Route path="/about-us/who-we-are" element={<WerWirSind />} />
                        <Route path="/my-services/study-training-internships" element={<StudiumAusbildungPraktikum />} />
                        <Route path="/my-services/work-taxes" element={<ArbeitSteuern />} />
                        <Route path="/my-services/housing-transport" element={<WohnenTransport />} />
                        <Route path="/my-services/visa-language" element={<VisumSprache />} />
                        <Route path="/contact" element={<Kontakt />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/user-rights" element={<Benutzerrechte />} />
                      </>

                    ):(
                      <>
                      <Route path="/empresa/seleccion-y-reclutamiento-de-personal" element={<PersonalauswahlUndRekrutierung />} />
                      <Route path="/empresa/evaluaciones-de-personal" element={<Personalbewertungen />} />
                      <Route path="/empresa/internacional" element={<International />} />
                      <Route path="/empresa/funciones" element={<Funktionen />} />
                      <Route path="/empresa/busqueda-especializada" element={<FachspezifischeSuche />} />
                      <Route path="/empresa/auditoria-de-inclusion" element={<Inklusionsaudit />} />
                      <Route path="/candidatos/registre-su-curriculum" element={<RegistrierenSieIhrenLebenslauf />} />
                      <Route path="/candidatos/gestion-de-carrera-internacional" element={<InternationalesKarrieremanagement />} />
                      <Route path="/nosotros/nuestra-filosofia" element={<UnserePhilosophie />} />
                      <Route path="/nosotros/quienes-somos" element={<WerWirSind />} />
                      <Route path="/mis-servicios/estudio-formacion-practicas" element={<StudiumAusbildungPraktikum />} />
                      <Route path="/mis-servicios/trabajo-impuestos" element={<ArbeitSteuern />} />
                      <Route path="/mis-servicios/vivienda-transporte" element={<WohnenTransport />} />
                      <Route path="/mis-servicios/visa-idioma" element={<VisumSprache />} />
                      <Route path="/contacto" element={<Kontakt />} />
                      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
                      <Route path="/derechos-del-usuario" element={<Benutzerrechte />} />
                    </>
                    )
                  )}
                  
                  {/* Redirigir rutas no coincidentes a la página de inicio */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Suspense>
              <Footer />
            </>
          {/* )} */}
        </div>
      </Router>
    </>
  );
};

export default AppRoutes;
