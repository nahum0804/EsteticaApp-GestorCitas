import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import AgregarPaciente from './components/GestionarPacientes';
import AgregarMedico from './components/GestionarMedicos';
import Citas from './components/GestionarCitas';
import Navigator from './components/Navigator';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<AgregarPaciente />} />
          <Route path="/medicos" element={<AgregarMedico />} />
          <Route path="/citas" element={<Citas />} />
        </Routes>
        <Navigator />
      </div>
    </Router>
  );
};

export default App;
