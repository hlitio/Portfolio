import './App.css';
import Inicio from './component/inicio'
import About from './component/about';
import Servicios from './component/servicios';
import Habilidades from './component/habilidades';
import Portafolio from './component/portafolio';
import Portafolio_2 from './component/portafolio_dos';
import Contacto from './component/contacto';
import Pie from './component/pie';

function App() {
  return (
    <>
      <Inicio/>
      <About/>
      <Servicios/>
      <Habilidades/>      
      <Portafolio/>
      <Portafolio_2/>
      <Contacto/>
      <Pie/>
    </>
  );
}

export default App;
