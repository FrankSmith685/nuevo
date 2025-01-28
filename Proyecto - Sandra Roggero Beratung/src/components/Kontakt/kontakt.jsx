import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Typography,
  Avatar,
  IconButton
} from '@mui/material';
import { CloudUpload, Delete } from '@mui/icons-material';
import de from '../../languaje/de';
import { useAppState } from '../../hooks/useAppState';
import es from '../../languaje/es';
import en from '../../languaje/en';
import emailjs from "@emailjs/browser";

const Kontakt = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('firma');
  const [formValues, setFormValues] = useState({
    vorname: '',
    nachname: '',
    telefon: '',
    firma: '',
    stadt: '',
    position: '',
    email: '',
    nachricht: '',
    akzeptiereKommerzielleInfos: false,
    akzeptiereDatenschutz: false,
    cv: null
  });

  const [alertMessage, setAlertMessage] = useState(null);
const [alertType, setAlertType] = useState('success'); // 'success' or 'error'


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleDrop = (acceptedFiles) => {
    setFormValues(prev => ({
      ...prev,
      cv: acceptedFiles[0]
    }));
  };

  const handleRemoveCv = () => {
    setFormValues(prev => ({
      ...prev,
      cv: null
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
  
//     Object.keys(formValues).forEach(key => {
//       formData.append(key, formValues[key]);
//     });


//     console.log("ASDQWE",formValues);
  
//     // fetch('http://localhost:3001/backend/kontakt/send-email', {
//     //   method: 'POST',
//     //   body: formData,
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   setAlertMessage('Email sent successfully!');
//     //   setAlertType('success');
//     // })
//     // .catch((error) => {
//     //   setAlertMessage('Failed to send email.');
//     //   setAlertType('error');
//     // });
// };

// const handleSubmit = (e) => {
//   e.preventDefault(); // Evitar la recarga de la página

//   console.log("ASDQWE", formValues);

//   const messageBody = `
//   <h3>Información del formulario</h3>
//   <ul>
//     <li><strong>Akzeptiere Datenschutz:</strong> ${formValues.akzeptiereDatenschutz || "No especificado"}</li>
//     <li><strong>Akzeptiere Kommerzielle Infos:</strong> ${formValues.akzeptiereKommerzielleInfos || "No especificado"}</li>
//     <li><strong>CV:</strong> ${formValues.cv || "No adjunto"}</li>
//     <li><strong>Email:</strong> ${formValues.email || "No especificado"}</li>
//     <li><strong>Firma:</strong> ${formValues.firma || "No especificado"}</li>
//     <li><strong>Nachname:</strong> ${formValues.nachname || "No especificado"}</li>
//     <li><strong>Nachricht:</strong> ${formValues.nachricht || "No especificado"}</li>
//     <li><strong>Position:</strong> ${formValues.position || "No especificado"}</li>
//     <li><strong>Stadt:</strong> ${formValues.stadt || "No especificado"}</li>
//     <li><strong>Telefon:</strong> ${formValues.telefon || "No especificado"}</li>
//     <li><strong>Vorname:</strong> ${formValues.vorname || "No especificado"}</li>
//   </ul>
// `;


//   // Enviar correo usando SMTPJS
//   window.Email.send({
//     SecureToken: "A5448F9FDAAC42132093D2117B440736EEA8", // Tu Secure Token de Elastic Email
//     To: formValues.email, // Correo del destinatario (puedes cambiarlo por un correo fijo si prefieres)
//     From: "f.s.b.rojas@gmail.com", // Correo del remitente (puede ser el mismo de Elastic Email)
//     Subject: "Formulario enviado desde React",
//     Body: messageBody,
//   })
//     .then((message) => {
//       alert("Correo enviado con éxito!");
//       console.log("Respuesta SMTPJS:", message);
//     })
//     .catch((error) => {
//       alert("Hubo un error al enviar el correo.");
//       console.error("Error SMTPJS:", error);
//     });
// };
// const nodemailer = require('nodemailer');

// const handleSubmit = async (e) => {
//   e.preventDefault(); // Evitar la recarga de la página

//   const messageBody = `
//     <h3>Información del formulario</h3>
//     <ul>
//       <li><strong>Akzeptiere Datenschutz:</strong> ${String(formValues.akzeptiereDatenschutz)}</li>
//       <li><strong>Akzeptiere Kommerzielle Infos:</strong> ${String(formValues.akzeptiereKommerzielleInfos)}</li>
//       <li><strong>CV:</strong> ${String(formValues.cv || "No adjunto")}</li>
//       <li><strong>Email:</strong> ${String(formValues.email || "No especificado")}</li>
//       <li><strong>Firma:</strong> ${String(formValues.firma || "No especificado")}</li>
//       <li><strong>Nachname:</strong> ${String(formValues.nachname || "No especificado")}</li>
//       <li><strong>Nachricht:</strong> ${String(formValues.nachricht || "No especificado")}</li>
//       <li><strong>Position:</strong> ${String(formValues.position || "No especificado")}</li>
//       <li><strong>Stadt:</strong> ${String(formValues.stadt || "No especificado")}</li>
//       <li><strong>Telefon:</strong> ${String(formValues.telefon || "No especificado")}</li>
//       <li><strong>Vorname:</strong> ${String(formValues.vorname || "No especificado")}</li>
//     </ul>
//   `;

//   try {
//     // Configuración del transporte SMTP
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.elasticemail.com',
//       port: 2525,
//       secure: false, // true para 465, false para otros puertos
//       auth: {
//         user: 'f.s.b.rojas@gmail.com', // Tu correo electrónico
//         pass: 'A5448F9FDAAC42132093D2117B440736EEA8' // Tu contraseña de SMTP
//       }
//     });

//     // Opciones del correo
//     const mailOptions = {
//       from: '"Formulario Web" <f.s.b.rojas@gmail.com>', // Dirección del remitente
//       to: formValues.email, // Dirección del destinatario
//       subject: "Formulario enviado desde React",
//       html: messageBody, // Contenido en formato HTML
//     };

//     // Envío del correo
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Mensaje enviado: %s", info.messageId);
//     alert("Correo enviado con éxito!");
//   } catch (error) {
//     console.error("Error al enviar el correo:", error);
//     alert("Hubo un error al enviar el correo.");
//   }
// };

// .........................................................
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log("ASDQWE",formValues.cv)
//   const messageBody = `
//   <h3>Información del formulario</h3>
//   <ul>
//     <li><strong>Akzeptiere Datenschutz:</strong> ${formValues.akzeptiereDatenschutz || "No especificado"}</li>
//     <li><strong>Akzeptiere Kommerzielle Infos:</strong> ${formValues.akzeptiereKommerzielleInfos || "No especificado"}</li>
//     <li><strong>CV:</strong> ${formValues.cv || "No adjunto"}</li>
//     <li><strong>Email:</strong> ${formValues.email || "No especificado"}</li>
//     <li><strong>Firma:</strong> ${formValues.firma || "No especificado"}</li>
//     <li><strong>Nachname:</strong> ${formValues.nachname || "No especificado"}</li>
//     <li><strong>Nachricht:</strong> ${formValues.nachricht || "No especificado"}</li>
//     <li><strong>Position:</strong> ${formValues.position || "No especificado"}</li>
//     <li><strong>Stadt:</strong> ${formValues.stadt || "No especificado"}</li>
//     <li><strong>Telefon:</strong> ${formValues.telefon || "No especificado"}</li>
//     <li><strong>Vorname:</strong> ${formValues.vorname || "No especificado"}</li>
//   </ul>
// `;

//   const emailData = {
//     apikey: '75377CB5D6BA8A91FDEEC16CBBCBDF446AD46E5686BF917114DED86DFEDF261A975C18421226D40CA76FB975AB8289E2',
//     to: 'f.s.b.rojas@gmail.com', // Correo destinatario
//     subject: 'Formulario enviado desde React',
//     from: 'f.s.b.rojas@gmail.com', // Correo remitente
//     bodyHtml: messageBody// Contenido HTML
// };


//   try {
//     const response = await fetch('https://api.elasticemail.com/v2/email/send', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams(emailData),
//   });

//   if (response.ok) {
//       const data = await response.json();
//       console.log('Correo enviado:', data);
//       alert('Correo enviado con éxito');
//   } else {
//       const errorResponse = await response.json();
//       console.error('Error en el envío:', errorResponse);
//       alert(`Error al enviar el correo: ${errorResponse.error}`);
//   }

//   } catch (error) {
//       console.error('Error al enviar el correo:', error);
//       alert('Hubo un error al enviar el correo.');
//   }
// };
// ........................................................
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Crear un cuerpo HTML para el mensaje
//   const messageBody = `
//     <h3>Información del formulario</h3>
//     <ul>
//       <li><strong>Akzeptiere Datenschutz:</strong> ${formValues.akzeptiereDatenschutz || "No especificado"}</li>
//       <li><strong>Akzeptiere Kommerzielle Infos:</strong> ${formValues.akzeptiereKommerzielleInfos || "No especificado"}</li>
//       <li><strong>Email:</strong> ${formValues.email || "No especificado"}</li>
//       <li><strong>Firma:</strong> ${formValues.firma || "No especificado"}</li>
//       <li><strong>Nachname:</strong> ${formValues.nachname || "No especificado"}</li>
//       <li><strong>Nachricht:</strong> ${formValues.nachricht || "No especificado"}</li>
//       <li><strong>Position:</strong> ${formValues.position || "No especificado"}</li>
//       <li><strong>Stadt:</strong> ${formValues.stadt || "No especificado"}</li>
//       <li><strong>Telefon:</strong> ${formValues.telefon || "No especificado"}</li>
//       <li><strong>Vorname:</strong> ${formValues.vorname || "No especificado"}</li>
//     </ul>
//   `;

//   const formData = new FormData();

//   // Agregar datos básicos
//   formData.append("apikey", "75377CB5D6BA8A91FDEEC16CBBCBDF446AD46E5686BF917114DED86DFEDF261A975C18421226D40CA76FB975AB8289E2");
//   formData.append("to", "kontakt@roggero-beratung.de"); // Correo destinatario
//   formData.append("subject", "Formulario enviado desde React");
//   formData.append("from", formValues.email); // Correo remitente
//   formData.append("bodyHtml", messageBody); // Contenido HTML

//   // Verificar si hay un archivo CV cargado
//   if (formValues.cv) {
//     formData.append("attachments", formValues.cv, formValues.cv.name);
//   }

//   try {
//     const response = await fetch("https://api.elasticemail.com/v2/email/send", {
//       method: "POST",
//       body: formData,
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("Correo enviado:", data);
//       alert("Correo enviado con éxito");
//     } else {
//       const errorResponse = await response.json();
//       console.error("Error en el envío:", errorResponse);
//       alert(`Error al enviar el correo: ${errorResponse.error}`);
//     }
//   } catch (error) {
//     console.error("Error al enviar el correo:", error);
//     alert("Hubo un error al enviar el correo.");
//   }
// };



const handleSubmit = async (e) => {
  e.preventDefault();

  // Crear un objeto con los datos del formulario
  const templateParams = {
    akzeptiereDatenschutz: formValues.akzeptiereDatenschutz || "No especificado",
    akzeptiereKommerzielleInfos: formValues.akzeptiereKommerzielleInfos || "No especificado",
    email: formValues.email || "No especificado",
    firma: formValues.firma || "No especificado",
    nachname: formValues.nachname || "No especificado",
    nachricht: formValues.nachricht || "No especificado",
    position: formValues.position || "No especificado",
    stadt: formValues.stadt || "No especificado",
    telefon: formValues.telefon || "No especificado",
    vorname: formValues.vorname || "No especificado",
  };

  try {
    const result = await emailjs.send(
      "service_dvg1dg9", // Reemplaza con tu Service ID de EmailJS
      "template_cuzv1lc", // Reemplaza con tu Template ID de EmailJS
      templateParams,
      "umFC2jpkz6JRgLexc" // Reemplaza con tu Public Key de EmailJS
    );

    console.log("Correo enviado:", result.text);
    alert("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    alert("Hubo un error al enviar el correo.");
  }
};



  

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: ".pdf,.doc,.docx"
  });

  const handleClickHome = () => {
    navigate("/");
};

const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_2000/${url}`;
};



const [data,setData] = useState(de.Kontakt);
const {tipoIdioma} = useAppState();

useEffect(()=>{
    if(tipoIdioma==='de'){
        setData(de.Kontakt);
    }else if(tipoIdioma==='en'){
        setData(en.Kontakt);
    }else{
        setData(es.Kontakt);
    }
},[tipoIdioma]);


  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative">
        <img 
        src={optimizedImageURL("v1720048164/r5phhfvrwr57yofnqlsu.jpg")} 
        alt="NOT FOUND" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        />
        <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
          <div className="w-full md:w-1/2 h-auto">
              <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                {data.title} 
              </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 md:w-3/5 pb-10">
        <p className="text-base text-gray-400 py-10">
            <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
                Sandra Roggero <span className="text-gray-500 font-medium text-xs">Beratung</span>
            </span>
            {' > '}
            {data.title}
        </p>
        <div className="flex justify-center py-4">
            <button
                onClick={() => setFormType('firma')}
                className={`px-4 py-2 font-bold ${formType === 'firma' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} rounded-l`}
            >
                {data.option1} 
            </button>
            <button
                onClick={() => setFormType('bewerber')}
                className={`px-4 py-2 font-bold ${formType === 'bewerber' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} rounded-r`}
            >
                {data.option2} 
            </button>
        </div>
        <div className="w-full maxlg mx-w--auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <form onSubmit={handleSubmit} className="grid grid-cols-2  gap-4 ">
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="vorname">{data.nombre}</label>
                    <input
                        type="text"
                        id="vorname"
                        name="vorname"
                        value={formValues.vorname}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="nachname">{data.apellido}</label>
                    <input
                        type="text"
                        id="nachname"
                        name="nachname"
                        value={formValues.nachname}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="telefon">{data.telefono}</label>
                    <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formValues.telefon}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                {formType === 'firma' && (
                    <>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="firma">{data.empresa}</label>
                            <input
                                type="text"
                                id="firma"
                                name="firma"
                                value={formValues.firma}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="stadt">{data.stadt}</label>
                            <input
                                type="text"
                                id="stadt"
                                name="stadt"
                                value={formValues.stadt}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="position">{data.position}</label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formValues.position}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                    </>
                )}
                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="email">{data.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="nachricht">{data.mensaje}</label>
                    <textarea
                        id="nachricht"
                        name="nachricht"
                        value={formValues.nachricht}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    ></textarea>
                </div>
                {
                  formType === 'bewerber' && (
                    <div className="col-span-2 ">
                      <Box {...getRootProps()} p={2} border="2px dashed #ccc" borderRadius="5px" textAlign="center" className="hover:cursor-pointer">
                          <input {...getInputProps()} />
                          <CloudUpload style={{ fontSize: '2rem', color: '#ccc' }} />
                              <p className="text-base mt-2">
                                {data.archivo1}
                              </p>
                              <p className="text-sm mt-2">
                                {data.archivo2}
                              </p>
                      </Box>
                      {formValues.cv && (
                          <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                              <Avatar>
                                  <CloudUpload />
                              </Avatar>
                              <Typography variant="body1" className="text-base">{formValues.cv.name}</Typography>
                              <IconButton onClick={handleRemoveCv}>
                                  <Delete />
                              </IconButton>
                          </Box>
                      )}
                    </div>
                  )
                }
                <div className="col-span-2">
                    {formType === 'firma' && (
                        <label className="flex items-center text-gray-700">
                            <input
                                type="checkbox"
                                name="akzeptiereKommerzielleInfos"
                                checked={formValues.akzeptiereKommerzielleInfos}
                                onChange={handleChange}
                                className="form-checkbox h-4 w-4 mr-2"
                            />
                            {data.firma1}
                            <Link to={data.firma2Link} className="font-normal text-gray-to-blue-600">{data.firma2}</Link>
                            
                        </label>
                    )}
                    <label className="flex items-center text-gray-700">
                        <input
                            type="checkbox"
                            name="akzeptiereDatenschutz"
                            checked={formValues.akzeptiereDatenschutz}
                            onChange={handleChange}
                            required
                            className="form-checkbox h-4 w-4 mr-2"
                        />
                        {formType === 'firma' ? (
                                <>
                                {data.firma4}
                                    <Link to={data.firma5Link} className="font-normal ml-1 text-gray-to-blue-600">{data.firma5}</Link>.
                                </>
                            ) : (
                                <>
                                    {data.firma6}
                                    <Link to={data.firma5Link} className="font-normal ml-1 text-gray-to-blue-600">{data.firma7}</Link> 
                                </>
                        )}
                    </label>
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="w-full md:w-1/3 py-2 bg-gray-800 text-white font-bold rounded transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                    >
                        {data.senden}
                    </button>
                </div>
            </form>
        </div>
      </div>
      {alertMessage && (
        <div className={`alert ${alertType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} p-4 mb-4 rounded`}>
            {alertMessage}
        </div>
        )}

    </>
  );
};

export default Kontakt;