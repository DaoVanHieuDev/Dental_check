import axios from "axios";
import { useEffect,useState } from "react";

function PutNews({editingNews}) {
    const [name, setName] = useState(editingNews.name);
    const [major, setMajor] = useState(editingNews.major);
    const [trip, setTrip] = useState(editingNews.trip);
    const [id, setId] = useState(editingNews.id);


    const handleIdChange = (e)=>{
        setId(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleMajorChange = (e) => {
        setMajor(e.target.value);
      };
    
 
      const handleTripChange = (e) => {
        setTrip(e.target.value);
      };

    const handleSubmit = async(e) => {
      e.preventDefault();
      // Gửi yêu cầu sửa đổi dữ liệu bác sĩ
      const formPutNews ={
        ...editingNews,
        id:id,
        name:name,
        major:major,
        trip:trip,
      }
      try{
        const response = await axios.put(`http://localhost:3000/store/${editingNews.id}`, formPutNews);
        console.log(response.data);
      }catch (error){
        console.error("Error:", error);
      }
    };
  
    return (
        <>
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
         
            <label htmlFor="name">Trip:</label>
            <input style={{color:"black"}} type="text" id="trip" value={trip}  onChange={handleTripChange}/>    
            <button type="submit" >Save</button>
          </form>
        </div>


        </>
      );
}

export default PutNews;