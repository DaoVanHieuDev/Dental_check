import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageUp from "./ImageUp";

function NewNews() {  

  const [majorNews, setMajorNews] = useState("");
  const [tripNews, setTripNews] = useState("");
  const [nameNews, setNameNews] = useState("");
  const [imageData, setImageData] = useState("");
  
  const handleAddNews = async (e) => {
    e.preventDefault();

    const formNews ={
        img:imageData,
        major:majorNews,
        trip:tripNews,
        name:nameNews
    }
    try {
        const response = await axios.post("http://localhost:3000/store",formNews )
        const res=response.json
        console.log(res); // Log the response data to check the result
      } catch (error) {
        console.error("Error:", error);
      }
  };
  const handleImageUpload = (baseImage) => {
    setImageData(baseImage);
  };

  return (
    <>
      <div className="divNewDoctor" style={{ backgroundColor: "yellow" }}>
        newNews
        <form action="" className="formNewDoctor" onSubmit={handleAddNews}>
            <label htmlFor="">Ảnh</label>
          <ImageUp  onImageUpload={handleImageUpload}/>  
         <label htmlFor="">Major</label>
          <input type="text" name="" id="major"  onChange={(e)=>setMajorNews(e.target.value)}/>  <br />
          <label htmlFor="">Name</label>
          <input type="text" name="" id="name" onChange={(e)=>setNameNews(e.target.value)}/> <br />         
          <label htmlFor="">Trip</label>
          <input type="text" name="" id="trip" onChange={(e)=>setTripNews(e.target.value)}/> <br />
          <button type="submit"> Add </button>
        </form>
      </div>
    </>
  );
}

export default NewNews;
