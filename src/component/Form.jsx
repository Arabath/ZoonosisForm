import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../component/style.css'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { CssBaseline } from "@mui/material";
import { Container } from '@mui/system';
import GeneroBtn from './GeneroRadio';
import DetalleRadio from './DetalleRadio';


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
            <p>Nombre y Apellido</p>
            <TextField required
              id="filled-required"
              defaultValue="Nombre"
              variant="filled"
            />

            <TextField required
              id="filled-required"
              defaultValue="Apellido"
              variant="filled" />

            <p>Datos Generales</p>
            <TextField required
              id="filled-required"
              defaultValue="Fecha Nacimiento"
              variant="filled"
              type="date"
            />

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
          <hr />

          {/* DATOS CRIADORES */}
          <div id="datos_criadores">
            <h3>CRIADORES (Completar en el caso que corresponda)</h3>
            <p>Nombre del criadero</p>
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
            <p>Registro</p>
            <TextField
              id="filled-required"
              defaultValue="N° de registro"
              variant="filled"
            />


          </div>
          <hr />

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

            <div className='radio_btn_detalle'>
              <GeneroBtn />
            </div>
            <DetalleRadio />
            <br />
          </div>
          <hr />

          {/* CANVAS INTERACTIVO */}
          <div id='canvas_seleccion'>
            <Container maxWidth="sm" fixed>
              <Box sx={{ bgcolor: '#cfe8fc', height: "120px", width: "auto" }} />
            </Container>
          </div>

          <hr />

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
          <p>Datos Veterinario</p>
          <TextField required
            id="filled-required"
            defaultValue="Nombre"
            variant="filled"
          />

          <TextField required
            id="filled-required"
            defaultValue="Apellido"
            variant="filled" />
          <TextField required
            id="filled-required"
            defaultValue="Domicilio laboral"
            variant="filled"
          />

          <TextField required
            id="filled-required"
            defaultValue="Telefono"
            variant="filled" />
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