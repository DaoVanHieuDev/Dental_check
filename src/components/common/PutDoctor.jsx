
import axios from "axios";
import { useEffect,useState } from "react";

export default function PutDoctor({editingDoctor}) {
    const [name, setName] = useState(editingDoctor.name);
    const [major, setMajor] = useState(editingDoctor.major);
    const [specialize, setSpecialize] = useState(editingDoctor.specialize);
    const [trip, setTrip] = useState(editingDoctor.trip);
    const [status, setStatus] = useState(editingDoctor.status);
    const [id, setId] = useState(editingDoctor.id);

    const handleIdChange = (e)=>{
        setId(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleMajorChange = (e) => {
        setMajor(e.target.value);
      };
    
      const handleSpecializeChange = (e) => {
        setSpecialize(e.target.value);
      };
    
      const handleTripChange = (e) => {
        setTrip(e.target.value);
      };
    
      const handleStatusChange = (e) => {
        setStatus(e.target.value);
      };
    const handleSubmit = async(e) => {
      e.preventDefault();
      // Gửi yêu cầu sửa đổi dữ liệu bác sĩ
      const formPutDoctor ={
        ...editingDoctor,
        id:id,
        name:name,
        major:major,
        specialize:specialize,
        trip:trip,
        status:status
      }
      try{
        const response = await axios.put(`http://localhost:3000/doctor/${editingDoctor.id}`, formPutDoctor);
        console.log(response.data);
        setId("");
    setName("");
    setMajor("");
    setSpecialize("");
    setTrip("");
    setStatus("");
      }catch (error){
        console.error("Error:", error);
      }
    };
  
    if ( editingDoctor ) {
      return (
        <div>
          <h3>Edit Doctor</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Id:</label>
            <input style={{color:"black"}} type="text" id="id" value={id} onChange={handleIdChange}/>
            <label htmlFor="name">Tên:</label>
            <input style={{color:"black"}} type="text" id="name" value={name} onChange={handleNameChange}/> 
                {/* <label htmlFor="name">Ảnh:</label>
            <input style={{color:"black"}} type="text" id="name" value={name}/>     */}
             <label htmlFor="name">Major:</label>
            <input style={{color:"black"}} type="text" id="major" value={major}  onChange={handleMajorChange}/>     
            <label htmlFor="name">Specialize:</label>
            <input style={{color:"black"}} type="text" id="specialize" value={specialize}  onChange={handleSpecializeChange}/>
            <label htmlFor="name">Trip:</label>
            <input style={{color:"black"}} type="text" id="trip" value={trip}  onChange={handleTripChange}/>
               <div> 
                status
            <input style={{color:"black"}} type="radio" id="on" checked={status==="on"} value="on"  onChange={handleStatusChange} /> On
            <input style={{color:"black"}} type="radio" id="off" checked={status==="off"} value="off"  onChange={handleStatusChange}/> Off
             </div>
            <button type="submit" >Save</button>
          </form>
        </div>
      );
    } else if (!editingDoctor || !id) {

      return null;

    }
  
}
