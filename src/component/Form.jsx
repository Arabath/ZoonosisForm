import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../component/style.css'
import { Autocomplete, InputLabel, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { CssBaseline } from "@mui/material";
import { Container } from '@mui/system';
import GeneroBtn from './GeneroRadio';
import DetalleRadio from './DetalleRadio';
//import CheckboxLabels from './DetalleSanitario';

export default function FormZoo() {

    const [value, setValue] = React.useState('Si');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <Container maxWidth="md" >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch', marginLeft: '4rem' },
        bgcolor: '#fafafa',
        marginLeft: "13rem",
        '& .MuiInputLabel-root': { marginLeft: '4rem'}  
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <CssBaseline />
            <h1>Registro Municipal de Perros Potencialmente Peligrosos</h1>
            <div id="datos_propietario">
                {/* DATOS PROPIETARIO */}
                <h3>DATOS PROPIETARIO</h3>
                <InputLabel>Nombre y Apellido</InputLabel>
                <TextField  required
                            id="filled-required"
                            defaultValue="Nombre"
                            variant="filled"
                            />

                <TextField  required
                            id="filled-required"
                            defaultValue="Apellido"
                            variant="filled"/>

                <InputLabel>Fecha Nacimiento</InputLabel>
                <TextField  required
                            id="filled-required"
                            defaultValue="Fecha Nacimiento"
                            variant="filled"
                            type="date"
                />

                <InputLabel>Datos Contacto</InputLabel>
                <TextField  
                            id="filled-required"
                            defaultValue="Telefono"
                            variant="filled"
                            />
                <TextField  
                            id="filled-required"
                            defaultValue="Telefono Alt."
                            variant="filled"
                            />
                <TextField  
                            id="filled-required"
                            defaultValue="Email"
                            variant="filled"
                            type="mail"
                            />
            </div>
            <hr/>

            {/* DATOS CRIADORES */}
            <div id="datos_criadores">
                <h3>CRIADORES (Completar en el caso que corresponda)</h3>
                <InputLabel>Nombre del criadero</InputLabel>
                <TextField 
                            id="filled-required"
                            defaultValue="Criadero"
                            variant="filled"
                            />
                <TextField 
                            id="filled-required"
                            defaultValue="Registro FCA/Kennel/etc"
                            variant="filled"
                            />
                <InputLabel>Registro</InputLabel>
                <TextField 
                            id="filled-required"
                            defaultValue="N° de registro"
                            variant="filled"
                            />
  
                 
            </div>
            <hr/>

            {/* DATOS PERRO */}
            <div id="datos_perro">
                <h3>DATOS CANINO</h3>
                <TextField
                            variant="filled"
                            defaultValue="Nombre"
                            />
                <TextField
                            variant="filled"
                            defaultValue="Edad"
                            />

                <div className='marginLeft'>
                            <GeneroBtn />
                </div>
                            <DetalleRadio />
                <br />
            </div>
            <hr/>

            {/* CANVAS INTERACTIVO */}
            <div id='canvas_seleccion'>
                <Container maxWidth="sm" fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', height:"120px", width:"auto" }} />
                </Container>
            </div>

            <hr/>

             {/* DETALLES SANITARIOS */}
            <h3>DETALLES SANITARIOS</h3>
              <div className=''>
            <FormControl id="castracion-btn">
              <FormLabel >Castración</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="Si" control={<Radio />} label="Si" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>


            <FormControl id="castracion-btn">
              <FormLabel >Antirrabica</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="Si" control={<Radio />} label="Si" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
  

            <FormControl id="castracion-btn">
              <FormLabel >Quintuple</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="Si" control={<Radio />} label="Si" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
              <TextField
                          variant="filled"
                          defaultValue="Veterinario actuante"
                          />
            </div>
            <br />
            <InputLabel>Datos Veterinario</InputLabel>
                <TextField  required
                            id="filled-required"
                            defaultValue="Nombre"
                            variant="filled"
                            />

                <TextField  required
                            id="filled-required"
                            defaultValue="Apellido"
                            variant="filled"/>
                <TextField  required
                            id="filled-required"
                            defaultValue="Domicilio laboral"
                            variant="filled"
                            />

                <TextField  required
                            id="filled-required"
                            defaultValue="Telefono"
                            variant="filled"/>
            <input
                multiple
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>

            {/* BOTONERA */}
            <div className='form_btn'>
              <Button variant="contained">Cancelar</Button>
              <Button color='success' variant="contained">Enviar</Button>
            </div>
            <br />
            <div>

      </div>
    </Box>
    </Container>
  );
}