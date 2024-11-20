import axios from "axios";
import { Appointment } from "../interfaces/types";

export const createAppointment = async (appointmentData: Appointment): Promise<void> => {
  try {
    await axios.post("http://localhost:3000/api/appointments", appointmentData);
    alert("Cita agendada exitosamente.");
  } catch (error) {
    console.error("Error al agendar la cita:", error);
    alert("Hubo un problema al agendar la cita.");
  }
};
