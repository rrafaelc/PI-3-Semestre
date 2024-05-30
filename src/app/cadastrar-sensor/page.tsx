import { Button, TextField } from '@mui/material';
import './cadastrar-sensor.css';

export default function CadastrarSensor() {
  return (
    <div className="Container-CadastroSensor">
      <p>Cadastrar sensor</p>
      <div className="form-CadastroSensor">
        <TextField
          id="standard-multiline-flexible"
          label="Nome"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Modelo"
          multiline
          maxRows={4}
          variant="standard"
        />
        <div className="botoes-CadastroSensor">
          <Button variant="contained" color="success">
            Confirmar
          </Button>
          <Button variant="outlined" color="error">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
