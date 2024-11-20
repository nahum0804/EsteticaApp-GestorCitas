import React, { useState } from "react";
import AgregarMedico from "./Medicos/AgregarMedico";
import ActualizarMedico from "./Medicos/ActualizarMedico";
import EliminarMedico from "./Medicos/EliminarMedico";

const GestionarMedicos: React.FC = () => {
  // Estado para manejar la vista activa
  const [activeView, setActiveView] = useState<"add" | "update" | "delete">(
    "add"
  );

  // Función para renderizar la vista activa
  const renderView = () => {
    switch (activeView) {
      case "add":
        return <AgregarMedico />;
      case "update":
        return <ActualizarMedico />;
      case "delete":
        return <EliminarMedico />;
      default:
        return <AgregarMedico />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* NavBar */}
      <nav className="bg-blue-500 text-white p-4 shadow-md">
        <ul className="flex justify-around">
          <li>
            <button
              className={`py-2 px-4 rounded ${
                activeView === "add" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => setActiveView("add")}
            >
              Agregar Médico
            </button>
          </li>
          <li>
            <button
              className={`py-2 px-4 rounded ${
                activeView === "update" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => setActiveView("update")}
            >
              Actualizar Médico
            </button>
          </li>
          <li>
            <button
              className={`py-2 px-4 rounded ${
                activeView === "delete" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => setActiveView("delete")}
            >
              Eliminar Médico
            </button>
          </li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <div className="flex-grow p-5">{renderView()}</div>
    </div>
  );
};

export default GestionarMedicos;
