import React, { useState } from "react";
import { agregarPaciente } from "../../controllers/clienteControllers";
import { Cliente } from "../../interfaces/types";

const AgregarCliente: React.FC = () => {
  const [formData, setFormData] = useState<Cliente>({
    nombre: "",
    edad: 0,
    direccion: "",
    telefono: "",
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    await agregarPaciente(formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agregar Cliente</h1>
      <form className="flex flex-col gap-4" onSubmit={manejarEnvio}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={formData.edad}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Agregar Cliente
        </button>
      </form>
    </div>
  );
};

export default AgregarCliente;