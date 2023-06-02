import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../../scss/pagecss/System.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function System() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios("http://localhost:3000/doctor");
        const jsonData = await reponse.data;
        const filteredData = jsonData.filter((item) => item.status === "on");
        setData(filteredData)
      } catch (error) {
        console.log("error fetching data :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="containerSystem">
        <div className="contactDontmain">
          <h1>Lịch làm việc </h1>
          <div className="chuaaa">
            {data.map((item) => (
              <div className="setInterval" key={item.id}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/preorder/${item.id}`} state={item}
                >
                  <img style={{width:"200px",height:"200px"}} src={item.img} alt="" />
                  <p> {item.name}</p>
                  <p> {item.major} </p>
                 
                </Link>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
