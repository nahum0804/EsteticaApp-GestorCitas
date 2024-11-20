// src/types.ts
export interface Cliente {
    nombre: string;
    edad: number;
    telefono: string;
    direccion: string;
  }
  
export interface Appointment {
    id_paciente: number;
    id_medico: number;
    fecha: string;
    hora: string;
    tipo_cita: string;
  }