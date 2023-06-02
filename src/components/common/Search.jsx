
import { useEffect, useState } from "react";
import "../../components/layout/Header.scss"
import Table from "./Table";
import axios from "axios";

export default function Search () {
    const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/doctor`);
      setData(res.data);
      console.log(res.data);
    };
    if (query.length > 2) {
        fetchData(query.id == data.id)
      } else {
        setData([]);
      }
  }, [query]); 

    return ( 
        <> 
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      <Table data={data} />
      <i id="fontSearch" className="fa-solid fa-magnifying-glass"></i>
        </>
     );
}
