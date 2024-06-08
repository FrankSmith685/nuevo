import { useNavigate } from "react-router-dom";
import bannerPrincipal from "../../assets/imagenes/home/imagen11.jpg";
import { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Box, Card, CardContent, IconButton, Avatar } from '@mui/material';
import { CloudUpload, Delete } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const RegistrierenSieIhrenLebenslauf = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [cv, setCv] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickHome = () => {
        navigate("/");
    };

    const handleDrop = (acceptedFiles) => {
        setCv(acceptedFiles[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("CV:", cv);
        console.log("Message:", message);
    };

    const handleRemoveCv = () => {
        setCv(null);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        accept: ".pdf,.doc,.docx"
    });

    return (
        <>
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img src={bannerPrincipal} alt="NOT FOUND" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-end h-full z-20 relative space-y-4 p-4 pt-96 sm:p-6 md:p-8">
                    <div className="w-1/2 h-auto">
                        <h2 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl font-bell text-center px-2">
                        Registrieren Sie Ihren Lebenslauf 
                        </h2>
                    </div>
                </div>
            </div>
            <Container maxWidth="md" className="pb-10">
                <Typography variant="body1" color="textSecondary" className="py-10">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
                        Sandra Rogero <span className="text-gray-500 font-medium text-xs">Beratung</span>
                    </span>
                    {' > '}
                    Registrieren Sie Ihren Lebenslauf 
                </Typography>
                <Typography variant="body1" color="textSecondary" className="py-0">
                    <p className="text-gray-700 text-start w-full pb-1 px-2">
                        Wir helfen Ihnen, das nächste Kapitel Ihrer Karriere zu schreiben - erzählen Sie uns Ihre Geschichte!
                    </p>
                </Typography>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Box display="flex" flexDirection="column" gap={2}>
                                <TextField
                                    label="E-Mail"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Box {...getRootProps()} p={2} border="2px dashed #ccc" borderRadius="5px" textAlign="center" className="hover:cursor-pointer">
                                    <input {...getInputProps()} />
                                    <CloudUpload style={{ fontSize: '2rem', color: '#ccc' }} />
                                    <Typography variant="body1" color="textSecondary">
                                        Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um eine Datei auszuwählen
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        (Nur PDF- oder Word-Dateien)
                                    </Typography>
                                </Box>
                                {cv && (
                                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                                        <Avatar>
                                            <CloudUpload />
                                        </Avatar>
                                        <Typography variant="body1">{cv.name}</Typography>
                                        <IconButton onClick={handleRemoveCv}>
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                )}
                                <TextField
                                    label="Nachricht (Optional)"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                {/* <Button variant="contained" color="primary" type="submit" className="bg-bg_favorite_3 w-1/3">
                                    Senden
                                </Button> */}
                                <button 
                                    type="submit" 
                                    variant="contained" 
                                    color="primary" 
                                    className="w-1/3 py-2 bg-bg_favorite_3 hover:bg-bg_favorite_4 text-white font-bold rounded transition duration-200"
                                    >
                                    Senden
                                </button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default RegistrierenSieIhrenLebenslauf;
