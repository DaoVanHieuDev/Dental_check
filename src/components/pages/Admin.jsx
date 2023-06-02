import "../../scss/pagecss/Admin.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import NewDoctor from "../common/NewDoctor";
import NewNews from "../common/NewNews";
import PutDoctor from "../common/PutDoctor"
import PutNews from "../common/PutNews";
import DeleteDoctor from "../common/DeleteDoctor";
import DeleteNews from "../common/DeleteNews";

export default function Admin() {
  const [doctor, setDoctor] = useState([]);
  const [dental, setDental] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [status, setStatus] = useState([]);


  const [store, setStore] = useState([]);
  const [newDoctor, setNewDoctor] = useState("");
  const [newNews, setNewNews] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("dental-book");
  const [adminUser, setAdminUser] = useState([]);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [showPutDoctor, setShowPutDoctor] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [showPutNews, setShowPutNews] = useState(false);

  const handleEditDoctor = (index) => {
    const doctorToEdit = doctor[index];
    setEditingDoctor(doctorToEdit);
    setShowPutDoctor(true);
  }
  const handleEditNews = (index) => {
    const newsToEdit = store[index];
    setEditingNews(newsToEdit);
    setShowPutNews(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios("http://localhost:3000/doctor");
        const jsonData = reponse.data;
        setDoctor(jsonData);
      } catch (error) {
        console.log("error fetching data :", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios("http://localhost:3000/schedule");
        const jsonData = reponse.data;
        setDental(jsonData);
      } catch (error) {
        console.log("error fetching data :", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios("http://localhost:3000/users");
        const jsonData = reponse.data;

        const adminUsers = jsonData.filter(user => user.isadmin);
        setAdminUser(adminUsers);

        setAdmin(jsonData);
      } catch (error) {
        console.log("error fetching data :", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios("http://localhost:3000/store");
        const jsonData = reponse.data;
        setStore(jsonData);
      } catch (error) {
        console.log("error fetching data :", error);
      }
    };
    fetchData();
  }, []);

  const handd = () => {
    setNewDoctor("block")
  }
  const hehe = () => {
    setNewNews("block")
  }
  const handleSaveDoctor = () => {
    setEditingDoctor(null);
  };



  return (
    <div className="adminTable">
      <div
        className="headerAdmin"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1> welcome to admin </h1>
        <div className="hehe" style={{ display: "flex" }}>
          <div onClick={hehe} style={{ border: "1px solid black", lineHeight: "50px", padding: "0px 20px 20px 20px", borderRadius: "10px", fontWeight: "500", backgroundColor: "#fff" }}> Add News</div>
          <div onClick={handd} style={{ border: "1px solid black", lineHeight: "50px", padding: "0px 20px 20px 20px", borderRadius: "10px", fontWeight: "500", backgroundColor: "#fff" }}> Add Doctor</div>
        </div>
      </div>
      <div className="menuComponent">
        <div className="menuTable">
          <td className="menuMini">
            <div onClick={() => setSelectedMenu("dental-book")}>  Dental book </div>
            <div onClick={() => setSelectedMenu("doctor")}> Doctor</div>
            <div onClick={() => setSelectedMenu("user")}> Admin</div>
            <div onClick={() => setSelectedMenu("news")}> News</div>
            <div onClick={() => setSelectedMenu("empty")}>trống</div>
          </td>
        </div>
        <div className="renderMenu">
          {newDoctor && <NewDoctor />}
          {newNews && <NewNews />}
          {editingDoctor && <PutDoctor onSave={handleSaveDoctor} editingDoctor={editingDoctor} />}
          {showPutNews && <PutNews editingNews={editingNews} />}
          {selectedMenu === "doctor" && (
            <table border="1">
              {/* Các cột của bảng */}
              <tr>
                <th>#id</th>
                <th>Tên</th>
                <th>Ảnh</th>
                <th>Status</th>
                <th>Major</th>
                <th>Specialize</th>
                <th>Trip</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>

              {doctor.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{item.id}</td>
                  <td style={{ width: "150px" }}>{item.name}</td>
                  <td>
                    <img style={{ width: "100px" }} src={item.img} alt="" />
                  </td>
                  <td style={{ width: "70px", padding: "20px" }}>
                    {item.status}
                  </td>
                  <td style={{ width: "210px", padding: "10px" }}>
                    {item.major}
                  </td>
                  <td style={{ width: "450px", padding: "10px" }}>
                    {item.specialize}
                  </td>
                  <td style={{ width: "300px", padding: "10px" }}>
                    {item.trip}
                  </td>
                  <td>
                    <button>
                      <img className="fixDoctor"
                        style={{ width: "20px" }}
                        src="https://cdn-icons-png.flaticon.com/512/107/107765.png"
                        alt=""
                        onClick={() => handleEditDoctor(index)}
                      />
                    </button>
                  </td>
                  <td>
                    <DeleteDoctor doctorId={item.id} />
                  </td>
                </tr>
              ))}
            </table>
          )}
          {selectedMenu === "user" && (
            <table border="1">
              <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Password</th>
                <th>Admin</th>
              </tr>
              {adminUser.map((item) => (
                <tr>
                  <td> {item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.isadmin}</td>
                </tr>
              ))}
            </table>
          )}
          {selectedMenu === "dental-book" && (
            <table border="1">
              <tr>
                <th>#</th>
                <th>namebanhnhan</th>
                <th>day</th>
                <th>time</th>
                <th>phone</th>
                <th>reason</th>
                <th>note</th>
                <th>doctorId</th>
                <th>doctorName</th>
              </tr>
              {dental.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.namebenhnhan}</td>
                  <td>{item.selectedOption}</td>
                  <td>{item.selectedTime}</td>
                  <td>{item.phone}</td>
                  <td>{item.reason}</td>
                  <td>{item.note}</td>
                  <td>{item.doctorId}</td>
                  <td>{item.doctorName}</td>
                </tr>
              ))}
            </table>
          )}
          {selectedMenu === "news" && (
            <table border={1}>
              <tr>
                <th>id</th>
                <th>Ảnh</th>
                <th>name</th>
                <th>major</th>
                <th>trip</th>
                <th >Sửa</th>
                <th> Xóa</th>
              </tr>
              {store.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td> <img style={{ width: "100px", height: "70px" }} src={item.img} alt="" /></td>
                  <td>{item.name}</td>
                  <td>{item.major}</td>
                  <td>{item.trip}</td>
                  <td><button> <img onClick={() => handleEditNews(index)} width="fit-content" height="20px" src="https://cdn-icons-png.flaticon.com/512/107/107765.png" alt="" /> </button> </td>
                  <td> <DeleteNews id={item.id}/> </td> 
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  )

}
