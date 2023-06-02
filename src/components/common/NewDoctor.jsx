import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageUp from "./ImageUp";
export default function NewDoctor() {
  const [nameDoctor, setNameDoctor] = useState("");
  const [majorDoctor, setMajorDoctor] = useState("");
  const [specialize, setSpecialize] = useState("");
  const [trip, setTrip] = useState("");
  const [status, setStatus] = useState("");
  const [imageDoctor, setImageDoctor] = useState("");

  const handleAddDoctor = async (e) => {
    e.preventDefault();

    const formDoctor ={
        name:nameDoctor,
        img:imageDoctor,
        major:majorDoctor,
        specialize:specialize,
        status:status,
        trip:trip
    }
    try {
        const response = await axios.post("http://localhost:3000/doctor",formDoctor )
        const res=response.json
        console.log(res); // Log the response data to check the result
      } catch (error) {
        console.error("Error:", error);
      }
  };

  const handleImageUpload = (baseImage) => {
    setImageDoctor(baseImage);
  };


  return (
    <div className="divNewDoctor" style={{ backgroundColor: "yellow", width: "500px" }}>
      <h1>New Doctor</h1>
      <form className="formNewDoctor" onSubmit={handleAddDoctor}>
        <label htmlFor="name">Tên:</label>
        <input style={{color:"black"}}type="text" id="name" value={nameDoctor} onChange={(e) => setNameDoctor(e.target.value)} />
        <br />

        <label htmlFor="img">Ảnh:</label>
      <ImageUp  onImageUpload={handleImageUpload}  />
        <br />

        <label htmlFor="major">Major:</label>
        <input style={{color:"black"}}type="text" id="major" value={majorDoctor} onChange={(e) => setMajorDoctor(e.target.value)} />
        <br />

        <label htmlFor="specialize">Specialize:</label>
        <input style={{color:"black"}}type="text" id="specialize" value={specialize} onChange={(e) => setSpecialize(e.target.value)} />
        <br />

        <label htmlFor="trip">Trip:</label>
        <input style={{color:"black"}}type="text" id="trip" value={trip} onChange={(e) => setTrip(e.target.value)} />
        <br />

        <label htmlFor="status">Status:</label>
        <div>    
        <input style={{color:"black"}} type="radio" id="on" value="on" checked={status === "on"}  onChange={(e) => setStatus(e.target.value)} /> On 
        <input style={{color:"black"}} type="radio" id="off" value="off" checked={status === "off"}  onChange={(e) => setStatus(e.target.value)} /> Off

        </div>
        <br />
 
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
