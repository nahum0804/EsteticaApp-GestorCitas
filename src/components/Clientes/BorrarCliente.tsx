import React, { useState } from "react";
import { borrarPaciente } from "../../controllers/clienteControllers";

const BorrarCliente: React.FC = () => {
  const [id, setId] = useState<number | "">("");

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      console.log("ID enviado para eliminar:", id);
      await borrarPaciente(id);
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Borrar Cliente</h1>
      <form className="flex flex-col gap-4" onSubmit={manejarEnvio}>
        <input
          type="number"
          placeholder="ID del Cliente"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          className="border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Borrar Cliente
        </button>
      </form>
    </div>
  );
};

export default BorrarCliente;
