import React from "react";
import ScheduleAppointmentForm from "./Citas/AgendarCitas";

const Home: React.FC = () => {
  return (
    <div className="flex justify-between items-start p-6">
      <div>
        <h1 className="font-extrabold text-3xl">Estetica App</h1>
        <p className="font-thin text-lg mt-2">
          A simple app to manage appointments for clients
        </p>
      </div>
      <ScheduleAppointmentForm />
    </div>
  );
};

export default Home;
