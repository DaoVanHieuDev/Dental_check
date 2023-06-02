import { useEffect, useState } from "react";

export default function Doctor() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await fetch(" http://localhost:3000/store");
        const jsonData = await reponse.json();
       setData(jsonData)
      } catch (error) {
        console.error("error fetching data :", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="divDoctorDetail">
          <div className="divDoctorimg">
            <img
              src={item.img}
              alt=""
            />
          </div>
          <p  className="itemName"> {item.name}</p>
          <p className="itemMajor"> {item.major}</p>
          <p style={{color:"blue",fontWeight:"500"}}>   XEM THÊM </p>
        </div>
      ))}
    </>
  );
}
