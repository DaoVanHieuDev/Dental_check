import { useEffect, useState } from "react";

export default function Options() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await fetch("http://localhost:3000/option");
        const jsonData = await reponse.json();
        setData(jsonData);
      } catch (error) {
        console.error("error fetching data :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <div className="hehe">
            <img className="imgOptionsCheck-up" src={item.img} alt="" />
          </div>
          <p> {item.content}</p>
        </div>
      ))}
    </>
  );
}
