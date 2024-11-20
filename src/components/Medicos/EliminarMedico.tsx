import React, { useState } from "react";

const personas = [
    {
      id_persona: 1,
      nombre: "Juan",
      apellido1: "Pérez",
      apellido2: "López",
      fecha_nacimiento: "1980-01-01",
      correo: "juan.perez@example.com",
      telefono: "123456789",
      genero: "M",
      cedula: "12345678",
    },
    {
      id_persona: 2,
      nombre: "Ana",
      apellido1: "Gómez",
      apellido2: null,
      fecha_nacimiento: "1990-05-15",
      correo: "ana.gomez@example.com",
      telefono: "987654321",
      genero: "F",
      cedula: "87654321",
    },
  ];
  
  const medicos = [
    { id_medico: 1, id_persona: 1, especialidad: "Cardiología" },
    { id_medico: 2, id_persona: 2, especialidad: "Pediatría" },
  ];


const EliminarMedico: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
  
    const manejarEnvio = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Eliminar Médico ID:", selectedId);
    };
  
    return (
      <div>
        <form className="flex flex-col gap-4" onSubmit={manejarEnvio}>
          <select
            value={selectedId || ""}
            onChange={(e) => setSelectedId(parseInt(e.target.value, 10))}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          >
            <option value="">Seleccionar Médico</option>
            {medicos.map((medico) => {
                const persona = personas.find((p) => p.id_persona === medico.id_persona);
                return (
                <option key={medico.id_medico} value={medico.id_medico}>
                    {persona ? `${persona.nombre} ${persona.apellido1}` : "Medico no encontrado"}
                </option>
                );
            })}
          </select>
  
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Eliminar Médico
          </button>
        </form>
      </div>
    );
  };
  
  export default EliminarMedico;  