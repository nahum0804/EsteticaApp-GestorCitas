import React, { useState } from "react";
import { actualizarPaciente } from "../../controllers/clienteControllers";

const ActualizarCliente: React.FC = () => {
  const [id, setId] = useState<number | "">("");
  const [formData, setFormData] = useState({
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
    if (id) {
      console.log("Datos enviados:", { id, ...formData });
      await actualizarPaciente(id, formData);
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Actualizar Cliente</h1>
      <form className="flex flex-col gap-4" onSubmit={manejarEnvio}>
        <input
          type="number"
          placeholder="ID del Cliente"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nuevo Nombre"
          value={formData.nombre}
          onChange={manejarCambio}
          className="border rounded p-2"
        />
        <input
          type="number"
          name="edad"
          placeholder="Nueva Edad"
          value={formData.edad}
          onChange={manejarCambio}
          className="border rounded p-2"
        />
        <input
          type="text"
          name="direccion"
          placeholder="Nueva Dirección"
          value={formData.direccion}
          onChange={manejarCambio}
          className="border rounded p-2"
        />
        <input
          type="text"
          name="telefono"
          placeholder="Nuevo Teléfono"
          value={formData.telefono}
          onChange={manejarCambio}
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Actualizar Cliente
        </button>
      </form>
    </div>
  );
};

export default ActualizarCliente;