
import axios from "axios";
import { useState,useEffect } from "react";
function DeleteDoctor({doctorId}) {
    
  const [deleteDoctors, setDeleteDoctors] = useState([]);
  const [checkSchedule, setCheckSchedule] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/doctor").then((response) => {
          setDeleteDoctors(response.data);
          console.log(response.data,"d");
        });
    
        axios.get("http://localhost:3000/schedule").then((response) => {
          setCheckSchedule(response.data);
          console.log(response.data,"dđ");
        });
      }, []);
    
      const handleDeleteDoctor = () => {
        const hasAppointments = doctorHasAppointments(doctorId);
        if (hasAppointments) {
          alert("Không thể xóa bác sĩ vì đã có lịch đặt.");
        } else {
          axios.delete(`http://localhost:3000/doctor/${doctorId}`).then(() => {
            const updatedDoctors = deleteDoctors.filter((item) => item.id !== doctorId);
            setDeleteDoctors(updatedDoctors);
          });
        }
      };
    
      const doctorHasAppointments = (doctorId) => {
        const appointments = checkSchedule.filter((appointment) => appointment.doctorId === doctorId); 
         console.log(appointments);
        return appointments.length > 0;
      
      };
  return (
    <>
      <button>
        <img
          className="deleteDoctor"
          style={{ width: "20px" }}
          src="https://cdn.pixabay.com/photo/2013/07/12/12/44/cancel-146131_960_720.png"
          alt=""
         onClick={() => handleDeleteDoctor()} 
        />
      </button>
    </>
  );
}

export default DeleteDoctor;
