import axios from "axios";
import { Cliente } from "../interfaces/types";

// Obtener todos los pacientes
export const obtenerPacientes = async (): Promise<Cliente[]> => {
  try {
    const { data } = await axios.get("http://localhost:8080/api/pacientes");
    return data.pacientes;
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    throw error;
  }
};

// Crear un nuevo paciente
export const agregarPaciente = async (datos: Cliente): Promise<void> => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/pacientes", datos);
      console.log("Paciente creado:", data);
      alert("Paciente agregado con éxito.");
    } catch (error: any) {
      if (error.response) {
        // Error del servidor
        console.error("Error del servidor:", error.response.data);
        alert(`Error: ${error.response.data.message || "No se pudo agregar el paciente."}`);
      } else if (error.request) {
        // Error en la solicitud (sin respuesta del servidor)
        console.error("Error de red:", error.request);
        alert("Error de red: No se recibió respuesta del servidor.");
      } else {
        // Error en la configuración
        console.error("Error desconocido:", error.message);
        alert("Error desconocido al agregar paciente.");
      }
    }
  };

// Actualizar un paciente
export const actualizarPaciente = async (id: number, datos: Partial<Cliente>): Promise<void> => {
  try {
    const { data } = await axios.put(`http://localhost:8080/api/pacientes/${id}`, datos);
    console.log("Paciente actualizado:", data);
    alert("Paciente actualizado con éxito.");
  } catch (error) {
    console.error("Error al actualizar paciente:", error);
    alert("Error al actualizar el paciente.");
  }
};

// Borrar un paciente
export const borrarPaciente = async (id: number): Promise<void> => {
  try {
    const { data } = await axios.delete(`http://localhost:8080/api/pacientes/${id}`);
    console.log("Paciente eliminado:", data);
    alert("Paciente eliminado con éxito.");
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    alert("Error al eliminar el paciente.");
  }
};
