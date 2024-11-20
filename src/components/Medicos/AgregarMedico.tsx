import React, { useState } from "react";

const AgregarMedico: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    fecha_nacimiento: "",
    correo: "",
    telefono: "",
    genero: "O",
    cedula: "",
    especialidad: "",
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Agregar Médico:", formData);
  };

  return (
    <div>
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
          type="text"
          name="apellido1"
          placeholder="Primer Apellido"
          value={formData.apellido1}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <input
          type="text"
          name="apellido2"
          placeholder="Segundo Apellido"
          value={formData.apellido2}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <input
          type="date"
          name="fecha_nacimiento"
          value={formData.fecha_nacimiento}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo Electrónico"
          value={formData.correo}
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
        />

        <select
          name="genero"
          value={formData.genero}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="O">Otro</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>

        <input
          type="text"
          name="cedula"
          placeholder="Cédula"
          value={formData.cedula}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <input
          type="text"
          name="especialidad"
          placeholder="Especialidad"
          value={formData.especialidad}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Agregar Médico
        </button>
      </form>
    </div>
  );
};

export default AgregarMedico;