import React, { useState } from "react";

import AgregarCliente from "./Clientes/AgregarCliente";
import ActualizarCliente from "./Clientes/ActualizarCliente";
import BorrarCliente from "./Clientes/BorrarCliente";


const GestionarPacientes: React.FC = () => {
    // Estado para manejar la vista activa
    const [activeView, setActiveView] = useState<"add" | "update" | "delete">(
      "add"
    );
  
    // Función para renderizar el contenido dependiendo de la vista activa
    const renderView = () => {
      switch (activeView) {
        case "add":
          return <AgregarCliente />;
        case "update":
          return <ActualizarCliente />;
        case "delete":
          return <BorrarCliente />;
        default:
          return <AgregarCliente />;
      }
    };
  
    return (
      <div className="flex h-screen">
        {/* Contenido Principal */}
        <div className="flex-grow p-8">{renderView()}</div>
  
        {/* Menú Lateral a la Derecha */}
        <aside className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4 flex flex-col items-center shadow-lg">
          <h2 className="text-lg font-bold mb-6">Opciones</h2>
          <button
            className={`w-full py-2 px-4 mb-4 rounded ${
              activeView === "add" ? "bg-gray-600" : "bg-gray-700"
            } hover:bg-gray-600`}
            onClick={() => setActiveView("add")}
          >
            Agregar Cliente
          </button>
          <button
            className={`w-full py-2 px-4 mb-4 rounded ${
              activeView === "update" ? "bg-gray-600" : "bg-gray-700"
            } hover:bg-gray-600`}
            onClick={() => setActiveView("update")}
          >
            Actualizar Cliente
          </button>
          <button
            className={`w-full py-2 px-4 rounded ${
              activeView === "delete" ? "bg-gray-600" : "bg-gray-700"
            } hover:bg-gray-600`}
            onClick={() => setActiveView("delete")}
          >
            Borrar Cliente
          </button>
        </aside>
      </div>
    );
  };
  
  export default GestionarPacientes;