import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
import HeaderNav from "../pages/assets/HeaderNav";
import Footer from "../pages/assets/Footer";
import HrBusinessPartner from "../components/hr-business-partner/HrBusinessPartner";
import AcompanamientoDIrectivo from "../components/consultoria/AcompanamientoDIrectivo";
import KontakPage from "../pages/kontakt/kontaktPage";
import WirPage from "../pages/wir/wirPage";
import RegistrierenSieIhrenLebenslauf from "../components/Kandidaten/RegistrierenSieIhrenLebenslauf";
import InternationalesKarrieremanagement from "../components/Kandidaten/InternationalesKarrieremanagement";
import UnserePhilosophie from "../components/Wir/UnserePhilosophie";
import WerWirSind from "../components/Wir/WerWirSind";
import Kontakt from "../components/Kontakt/kontakt";
// import WohnenTransport from "../components/Meine-Dienstleistungen/WohnenTransport";
// import VisumSprache from "../components/Meine-Dienstleistungen/VisumSprache";
// import ArbeitSteuern from "../components/Meine-Dienstleistungen/ArbeitSteuern";

// import StudiumAusbildungPraktikum from "../components/Meine-Dienstleistungen/StudiumAusbildungPraktikum";

// import Personalbewertungen from "../components/Unternehmen/Personalbewertungen";
// import PersonalauswahlUndRekrutierung from "../components/Unternehmen/PersonalauswahlUndRekrutierung";
// import PersonalauswahlUndRekrutierung from './PersonalauswahlUndRekrutierung';


// import InterimManagement from "../components/seleccion-y-headhunting/InterimManagement/InterimManagement";
// import Evaluaciones from "../components/seleccion-y-headhunting/Evaluaciones/Evaluaciones";
// import InterimManagement from "../components/seleccion-y-headhunting/InterimManagement/InterimManagement";
// import ConsultoraHeadhounter from "../components/seleccion-y-headhunting/ConsultoraHeadhounter/ConsultoraHeadhounter";
// import ConsultoraHeadhounter from "../components/seleccion-y-headhunting/ConsultoraHeadhounter";
// import AboutPage from "../pages/about/AboutPage";
// import ProjectPage from "../pages/project/ProjectPage";

// Importa los componentes de las páginas
const HomePage = lazy(() => import("../pages/home/HomePage"));

// const SeleccionPersonalReclutamiento = lazy(() => import("../components/seleccion-y-headhunting/ConsultoraSeleccionPersonal/SeleccionPersonalReclutamiento"));
const PersonalauswahlUndRekrutierung = lazy(() => import("../components/Unternehmen/PersonalauswahlUndRekrutierung"));
const Personalbewertungen = lazy(() => import("../components/Unternehmen/Personalbewertungen"));
const International = lazy(() => import("../components/Unternehmen/International"));
const Funktionen = lazy(() => import("../components/Unternehmen/funktionen"));
const FachspezifischeSuche = lazy(() => import("../components/Unternehmen/FachspezifischeSuche"));
const Inklusionsaudit = lazy(() => import("../components/Unternehmen/Inklusionsaudit"));

const DirectivosMandosIntermedios = lazy(() => import("../components/seleccion-y-headhunting/ConsultoraSeleccionPersonal/SeleccionPersonal/DirectivosMandosIntermedios"));

const ConsultoraHeadhounter = lazy(() => import("../components/seleccion-y-headhunting/ConsultoraHeadhounter/ConsultoraHeadhounter")); 

const InterimManagement = lazy(() => import("../components/seleccion-y-headhunting/InterimManagement/InterimManagement")); 

const Evaluaciones = lazy(() => import("../components/seleccion-y-headhunting/Evaluaciones/Evaluaciones"));

const GestionCambio = lazy(() => import("../components/gestionCambio/GestionCambio"));

const Formaciones = lazy(() => import("../components/gestionCambio/Formaciones/Formaciones")); 



// Meine-Dienstleistungen
const StudiumAusbildungPraktikum = lazy(() => import("../components/Meine-Dienstleistungen/StudiumAusbildungPraktikum")); 
const ArbeitSteuern = lazy(() => import("../components/Meine-Dienstleistungen/ArbeitSteuern"));
const WohnenTransport = lazy(() => import("../components/Meine-Dienstleistungen/WohnenTransport"));
const VisumSprache = lazy(() => import("../components/Meine-Dienstleistungen/VisumSprache"));


// const ConsultoriaHeadhunter = lazy(() => import("../pages/seleccion-y-headhunting/ConsultoriaHeadhunter"));
// const InterimManagement = lazy(() => import("../pages/seleccion-y-headhunting/InterimManagement"));
// const EvaluacionesPersonal = lazy(() => import("../pages/seleccion-y-headhunting/EvaluacionesPersonal"));
// Añade aquí otros componentes de las páginas que quieras importar

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <div>
          {/* Agrega el menú */}
          <HeaderNav />
          <Suspense fallback={(
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
              <FaSpinner className="animate-spin text-9xl text-gray-500" />
            </div>
          )}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Rutas para seleccion-y-headhunting */}
              {/* <Route path="/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento" element={<SeleccionPersonalReclutamiento />} /> */}
              <Route path="/unternehmen/personalauswahl-und-rekrutierung" element={<PersonalauswahlUndRekrutierung/>} />
              <Route path="/unternehmen/personalbewertungen" element={<Personalbewertungen/>} />
              <Route path="/unternehmen/international" element={<International/>} />
              <Route path="/unternehmen/funktionen" element={<Funktionen/>} />
              <Route path="/unternehmen/fachspezifische-suche" element={<FachspezifischeSuche/>} />
              <Route path="/unternehmen/inklusionsaudit" element={<Inklusionsaudit/>} />

              <Route path="/kandidaten/registrieren-sie-ihren-lebenslauf" element={<RegistrierenSieIhrenLebenslauf/>} />
              <Route path="/kandidaten/internationales-karrieremanagement" element={<InternationalesKarrieremanagement/>} />

              <Route path="/wir/unsere-philosophie" element={<UnserePhilosophie/>} />
              <Route path="/wir/wer-wir-sind" element={<WerWirSind/>} />



              
              <Route path="/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento/directivos-mandos-intermedios" element={<DirectivosMandosIntermedios />} />

              <Route path="/seleccion-y-headhunting/consultoria-headhunter" element={<ConsultoraHeadhounter />} />
              <Route path="/seleccion-y-headhunting/interim-management" element={<InterimManagement />} />
              <Route path="/seleccion-y-headhunting/evaluaciones-de-personal" element={<Evaluaciones />} />

              <Route path="/consultoria" element={<GestionCambio />} />
              <Route path="/consultoria/formaciones-humanbits" element={<Formaciones />} />
              <Route path="/consultoria/acompanamiento-directivo" element={<AcompanamientoDIrectivo />} />
              
              {/*Meine-Dienstleistungen*/}
              <Route path="/meine-dienstleistungen/studium-ausbildung-praktikum" element={<StudiumAusbildungPraktikum />} />
              <Route path="/meine-dienstleistungen/arbeit-steuern" element={<ArbeitSteuern />} />
              <Route path="/meine-dienstleistungen/wohnen-transport" element={<WohnenTransport />} />
              <Route path="/meine-dienstleistungen/visum-sprache" element={<VisumSprache />} />


              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/wir" element={<WirPage />} />

              {/* <Route path="/seleccion-y-headhunting/seleccion-de-directivos" element={<SeleccionDirectivos />} />
              <Route path="/seleccion-y-headhunting/consultoria-headhunter" element={<ConsultoriaHeadhunter />} />
              <Route path="/seleccion-y-headhunting/interim-management" element={<InterimManagement />} />
              <Route path="/seleccion-y-headhunting/evaluaciones-de-personal" element={<EvaluacionesPersonal />} /> */}
              {/* Agrega aquí más rutas para otras páginas */}
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </>
  );
};
