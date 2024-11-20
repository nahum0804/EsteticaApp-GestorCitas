import React, { useState } from "react";

const ActualizarCita: React.FC = () => {
  const [formData, setFormData] = useState({
    id_paciente: "",
    id_medico: "",
    fecha: "",
    hora: "",
    tipo_cita: "Consulta", // Valor por defecto
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos para actualizar cita:", JSON.stringify(formData, null, 2));
    // Aquí puedes llamar al controlador para enviar los datos al backend
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Actualizar Cita</h1>
      <form className="flex flex-col gap-4" onSubmit={manejarEnvio}>
        <input
          type="text"
          name="id_paciente"
          placeholder="ID del Paciente"
          value={formData.id_paciente}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <input
          type="text"
          name="id_medico"
          placeholder="ID del Médico"
          value={formData.id_medico}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <label htmlFor="fecha">Fecha de la Cita:</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <label htmlFor="hora">Hora de la Cita:</label>
        <input
          type="time"
          name="hora"
          value={formData.hora}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <label htmlFor="tipo_cita">Tipo de Cita:</label>
        <select
          name="tipo_cita"
          value={formData.tipo_cita}
          onChange={manejarCambio}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="Consulta">Consulta</option>
          <option value="Emergencia">Emergencia</option>
          <option value="Chequeo">Chequeo</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Actualizar Cita
        </button>
      </form>
    </div>
  );
};

export default ActualizarCita;
