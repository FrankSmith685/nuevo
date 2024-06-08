import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  FormGroup,
  Grid,
  Paper,
  Container,
  Avatar,
  IconButton
} from '@mui/material';
import { CloudUpload, Delete } from '@mui/icons-material';
import bannerPrincipal from "../../assets/imagenes/home/imagen15.jpg";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formValues);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: ".pdf,.doc,.docx"
  });

  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative">
        <img src={bannerPrincipal} alt="NICHT GEFUNDEN" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

        <div className="bg-bg_favorite_1 flex flex-col justify-center items-end h-full z-20 relative space-y-4 p-4 pt-96 sm:p-6 md:p-8">
          <div className="w-1/2 h-auto ">
            <h2 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl font-bell text-center px-2">
              Kontakt
            </h2>
          </div>
        </div>
      </div>
      <div className="w-11/12 px-10 pb-10 mx-auto">
        <Container maxWidth="md" className="pb-10">
          <Typography variant="body1" color="textSecondary" className="pt-10">
            <p className="text-base text-gray-400 py-10">
              <span onClick={() => navigate('/')} className="hover:cursor-pointer text-gray-800 font-bold">
                Sandra Rogero <span className="text-gray-500 font-medium text-xs">Beratung</span>
              </span>
              {' > '}
              Kontakt
            </p>
          </Typography>
          <Typography variant="body1" color="textSecondary" className="py-0">
            <p className="text-gray-700 text-start w-full pb-1 px-2">
              Wenn Sie Informationen über die von Sandra Roggero-Beratung angebotenen Personaldienstleistungen anfordern möchten, 
              geben Sie einfach an, ob Sie ein Unternehmen oder ein Bewerber sind und füllen Sie das Kontaktformular aus.
            </p>
          </Typography>
          <FormControl component="fieldset" className="flex justify-center py-4">
            <div className="flex justify-center py-4">
              <button 
                onClick={() => setFormType('firma')}
                className={`px-4 py-2 font-bold ${formType === 'firma' ? 'bg-bg_favorite_3 text-white' : 'bg-gray-200 text-gray-700'} rounded-l`}
              >
                ICH BIN EIN UNTERNEHMEN
              </button>
              <button 
                onClick={() => setFormType('bewerber')}
                className={`px-4 py-2 font-bold ${formType === 'bewerber' ? 'bg-bg_favorite_3 text-white' : 'bg-gray-200 text-gray-700'} rounded-r`}
              >
                ICH BIN EIN BEWERBER
              </button>
            </div>
          </FormControl>
          <Paper elevation={3} className="p-8 w-full mx-auto bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      label="Vorname" 
                      name="vorname" 
                      value={formValues.vorname} 
                      onChange={handleChange} 
                      required 
                      fullWidth 
                      variant="outlined" 
                      className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      label="Nachname" 
                      name="nachname" 
                      value={formValues.nachname} 
                      onChange={handleChange} 
                      required 
                      fullWidth 
                      variant="outlined" 
                      className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      label="Telefon" 
                      name="telefon" 
                      value={formValues.telefon} 
                      onChange={handleChange} 
                      required 
                      fullWidth 
                      variant="outlined" 
                      className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </Grid>
                  {formType === 'firma' && (
                    <>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                          label="Firma" 
                          name="firma" 
                          value={formValues.firma} 
                          onChange={handleChange} 
                          required 
                          fullWidth 
                          variant="outlined" 
                          className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                          label="Stadt" 
                          name="stadt" 
                          value={formValues.stadt} 
                          onChange={handleChange} 
                          required 
                          fullWidth 
                          variant="outlined" 
                          className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                          label="Position" 
                          name="position" 
                          value={formValues.position} 
                          onChange={handleChange} 
                          required 
                          fullWidth 
                          variant="outlined" 
                          className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      label="Email" 
                      name="email" 
                      type="email" 
                      value={formValues.email} 
                      onChange={handleChange} 
                      required 
                      fullWidth 
                      variant="outlined" 
                      className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      label="Nachricht (optional)" 
                      name="nachricht" 
                      value={formValues.nachricht} 
                      onChange={handleChange} 
                      multiline 
                      rows={4} 
                      fullWidth 
                      variant="outlined" 
                      className="mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </Grid>
                  {formType === 'bewerber' && (
                    <Grid item xs={12}>
                      <Box {...getRootProps()} p={4} border="2px dashed #ccc" borderRadius="5px" textAlign="center" className="hover:cursor-pointer mb-4">
                        <input {...getInputProps()} />
                        <CloudUpload style={{ fontSize: '2rem', color: '#ccc' }} />
                        <Typography variant="body1" color="textSecondary">
                          Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um eine Datei auszuwählen
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          (Nur PDF- oder Word-Dateien)
                        </Typography>
                      </Box>
                      {formValues.cv && (
                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                          <Avatar>
                            <CloudUpload />
                          </Avatar>
                          <Typography variant="body1">{formValues.cv.name}</Typography>
                          <IconButton onClick={handleRemoveCv}>
                            <Delete />
                          </IconButton>
                        </Box>
                      )}
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    {formType === 'firma' && (
                      <FormControlLabel
                        control={<Checkbox name="akzeptiereKommerzielleInfos" checked={formValues.akzeptiereKommerzielleInfos} onChange={handleChange} />}
                        label="Ich akzeptiere kommerzielle Informationen zu erhalten, auch auf elektronischem Weg."
                        className="mb-4 text-gray-700"
                      />
                    )}
                    <FormControlLabel
                      control={<Checkbox name="akzeptiereDatenschutz" checked={formValues.akzeptiereDatenschutz} onChange={handleChange} required />}
                      label={formType === 'firma' ? "Ich akzeptiere die Datenschutzrichtlinie und das Impressum." : "Ich habe die Datenschutzrichtlinie gelesen und akzeptiere sie."}
                      className="mb-4 text-gray-700"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <button 
                      type="submit" 
                      variant="contained" 
                      color="primary" 
                      className="w-1/3 py-2 bg-bg_favorite_3 hover:bg-bg_favorite_4 text-white font-bold rounded transition duration-200"
                    >
                      Senden
                    </button>
                  </Grid>
                </Grid>
              </FormGroup>
            </form>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Kontakt;
