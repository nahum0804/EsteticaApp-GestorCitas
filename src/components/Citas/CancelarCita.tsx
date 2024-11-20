import React, { useState } from "react";

const CancelarCita: React.FC = () => {
  const [idCita, setIdCita] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cita a cancelar:", idCita);
    // Aquí puedes llamar al controlador para eliminar la cita en el backend
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cancelar Cita</h1>
      <form className="flex flex-col gap-4" onSubmit={manejarEnvio}>
        <input
          type="text"
          name="id_cita"
          placeholder="ID de la Cita"
          value={idCita}
          onChange={(e) => setIdCita(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />

        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Cancelar Cita
        </button>
      </form>
    </div>
  );
};

export default CancelarCita;
