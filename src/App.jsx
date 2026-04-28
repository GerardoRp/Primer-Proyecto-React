import './App.css';
import Encabezado from './components/Encabezado';
import FraseInteractiva from './components/FraseInteractiva';
import MisDatos from './components/MisDatos';
function App() {
  return (
    <main className="pagina">
      <section className="tarjeta-principal">
        <Encabezado />
        <FraseInteractiva />
        <MisDatos />
      </section>
    </main>
  );
}

export default App;