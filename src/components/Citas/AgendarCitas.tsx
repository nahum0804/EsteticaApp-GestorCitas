import React, { useState, useEffect } from "react";
import { Appointment } from "../../interfaces/types";
import { createAppointment } from "../../controllers/citasController";

const fetchPacientes = async () => [
    { id: 1, nombre: "Juan Pérez" },
    { id: 2, nombre: "María López" },
  ];
  
  const fetchMedicos = async () => [
    { id: 1, nombre: "Dr. González" },
    { id: 2, nombre: "Dra. Fernández" },
  ];
  
  const ScheduleAppointmentForm: React.FC = () => {
    const [formData, setFormData] = useState<Appointment>({
      id_paciente: 0,
      id_medico: 0,
      fecha: "",
      hora: "",
      tipo_cita: "Consulta",
    });
  
    const [pacientes, setPacientes] = useState<{ id: number; nombre: string }[]>([]);
    const [medicos, setMedicos] = useState<{ id: number; nombre: string }[]>([]);
  
    // Obtener datos de pacientes y médicos
    useEffect(() => {
      const fetchData = async () => {
        const pacientesData = await fetchPacientes();
        const medicosData = await fetchMedicos();
        setPacientes(pacientesData);
        setMedicos(medicosData);
      };
  
      fetchData();
    }, []);
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Convertir valores a enteros para los IDs
        const processedFormData = {
            ...formData,
            id_paciente: parseInt(formData.id_paciente.toString(), 10),
            id_medico: parseInt(formData.id_medico.toString(), 10),
        };

        console.log("Datos enviados al backend:", JSON.stringify(processedFormData, null, 2));

        await createAppointment(processedFormData); // Llamada al controlador
    };
  
    return (
      <div className="p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Agendar Cita</h2>
        <form onSubmit={handleSubmit}>
          {/* Dropdown para seleccionar paciente */}
          <div className="mb-4">
            <label htmlFor="id_paciente" className="block text-sm font-medium mb-1">
              Seleccionar Paciente
            </label>
            <select
              id="id_paciente"
              name="id_paciente"
              value={formData.id_paciente}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="">Seleccione un paciente</option>
              {pacientes.map((paciente) => (
                <option key={paciente.id} value={paciente.id}>
                  {paciente.nombre}
                </option>
              ))}
            </select>
          </div>
  
          {/* Dropdown para seleccionar médico */}
          <div className="mb-4">
            <label htmlFor="id_medico" className="block text-sm font-medium mb-1">
              Seleccionar Médico
            </label>
            <select
              id="id_medico"
              name="id_medico"
              value={formData.id_medico}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="">Seleccione un médico</option>
              {medicos.map((medico) => (
                <option key={medico.id} value={medico.id}>
                  {medico.nombre}
                </option>
              ))}
            </select>
          </div>
  
          {/* Otros campos del formulario */}
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-sm font-medium mb-1">
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hora" className="block text-sm font-medium mb-1">
              Hora
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={formData.hora}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tipo_cita" className="block text-sm font-medium mb-1">
              Tipo de Cita
            </label>
            <select
              id="tipo_cita"
              name="tipo_cita"
              value={formData.tipo_cita}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="Consulta">Consulta</option>
              <option value="Tratamiento">Tratamiento</option>
            </select>
          </div>
  
          {/* Botón de enviar */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Agendar Cita
          </button>
        </form>
      </div>
    );
  };
  
  export default ScheduleAppointmentForm;