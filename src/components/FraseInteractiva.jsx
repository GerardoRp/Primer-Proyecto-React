import { useState } from 'react';

function FraseInteractiva() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('bryan');

  return (
    <section className="seccion-frase">
      <h2>Completa la frase con la opción correcta</h2>

      <div className="frase">
        <span>Hola</span>
        <strong>{opcionSeleccionada}</strong>
      </div>

      <label htmlFor="opciones">Selecciona una opción:</label>

      <select
        id="opciones"
        value={opcionSeleccionada}
        onChange={(evento) => setOpcionSeleccionada(evento.target.value)}
      >
        <option value="bryan">bryan</option>
        <option value="mundo">mundo</option>
        <option value="React">React</option>
        <option value="mi primera aplicación">mi primera aplicación</option>
        <option value="unam">unam</option>
        <option value="Mac">Mac</option>
      </select>
    </section>
  );
}

export default FraseInteractiva;