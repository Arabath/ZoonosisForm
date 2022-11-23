import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function DetalleAnimal() {
  return (
    <div>
      <div>
      <Autocomplete
          disablePortal
          id="combo_razas_registradas"
          options={listaPerros}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Razas registradas" />}
          />    
      </div>
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={det_tamaño}
          renderInput={(params) => <TextField {...params} label="Tamaño" />}
          />
      </div>
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={det_pelaje}
          renderInput={(params) => <TextField {...params} label="Pelaje" />}
          />
      </div>
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={det_color}
          renderInput={(params) => <TextField {...params} label="Color" />}
          />
        </div>
    </div>
  );
}

const det_tamaño = [
  { label: 'Chico' },
  { label: 'Mediano' },
  { label: 'Grande' },
  { label: 'Gigante' }
];
const det_pelaje = [
  { label: 'Corto' },
  { label: 'Medio' },
  { label: 'Largo' }
];
const det_color = [
  { label: 'Blanco' },
  { label: 'Marron' },
  { label: 'Gris' },
  { label: 'Negro' },
  { label: 'Bayo' },
  { label: 'Atigrado' }
];

const listaPerros = [
  {label: 'Pit bull terrier'},
  {label: 'Staffordshire bull terrier'},
  {label: 'American staffordshire terrier'},
  {label: 'Rottweiler'},
  {label: 'Dogo argentino'},
  {label: 'Tosa inu'},
  {label: 'Akita inu'},
  {label: 'Dóberman'},
  {label: 'Bullmastiff'},
  {label: 'Dogo de Burdeos'},
  {label: 'Mastín napolitano'},
  {label: 'Bóxer'},
]
