import axios from "axios";
import {useEffect, useState} from "react";

function DeleteNews({id}) {
 const [deleteNews,setDeleteNews]=useState([]);

 useEffect(() => {
    // Fetch JSON data from API endpoint
    const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3000/store");
          const data = await response.json();
          setDeleteNews(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    }
        fetchData()
  }, []);

  const handleDeleteProduct = () => {
    const updatedStore = deleteNews.filter((store) => store.id !== id);
    setDeleteNews(updatedStore.map((store, index) => ({ ...store, id: index + 1 })));
  };
  
    return ( <>
     {deleteNews.map(store => (

    <div key={store.id}> 
      {store.id === id && (
    <button   onClick={handleDeleteProduct}>
         <img width="fit-content" height="20px" src="https://cdn.pixabay.com/photo/2013/07/12/12/44/cancel-146131_960_720.png" alt="" />
    </button>
      )}
    </div>

     ))}
    </> );
}

export default DeleteNews;