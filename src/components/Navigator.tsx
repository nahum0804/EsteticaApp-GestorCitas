import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUserAdd, AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';

const Navigator: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 flex justify-around items-center rounded-t-xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 flex flex-col items-center' : 'text-white flex flex-col items-center'
        }
      >
        <AiOutlineHome className="text-2xl" />
        <span className="text-sm">Inicio</span>
      </NavLink>
      <NavLink
        to="/pacientes"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 flex flex-col items-center' : 'text-white flex flex-col items-center'
        }
      >
        <AiOutlineUserAdd className="text-2xl" />
        <span className="text-sm">Pacientes</span>
      </NavLink>
      <NavLink
        to="/medicos"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 flex flex-col items-center' : 'text-white flex flex-col items-center'
        }
      >
        <AiOutlineUser className="text-2xl" />
        <span className="text-sm">Médicos</span>
      </NavLink>
      <NavLink
        to="/citas"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 flex flex-col items-center' : 'text-white flex flex-col items-center'
        }
      >
        <AiOutlineCalendar className="text-2xl" />
        <span className="text-sm">Citas</span>
      </NavLink>
    </nav>
  );
};

export default Navigator;
