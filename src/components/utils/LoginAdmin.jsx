// import axios from "axios";
// import Cookies from "js-cookie";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// export default function LoginAdmin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     const adminToken = Cookies.get("adminToken");
//     if (adminToken) {
//       axios
//         .post("http://localhost:3000/admin", {
//           params: {
//             token: adminToken,
//           },
//         })
//         .then((response) => {
//           const admin = response.data[0];
//           if (admin) {
//             navigate("/loginadmin");
//           } else {
//             Cookies.remove("adminToken");
//           }
//         })
//         .catch((error) => {
//           console.error("Error checking admin token:", error);
//         });
//     }
//   }, []);

//   const handleAdminLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.get("http://localhost:3000/admin", {
//         params: {
//           email: email,
//           password: password,
//         },
//       });
//       const admin = response.data.find(
//         (admin) => admin.email === email && admin.password === password
//       );
//       if (admin) {
//         const token = uuidv4();
//         await axios.patch(`http://localhost:3000/admin/${admin.id}`, {
//           token: token,
//         });
//         Cookies.set("adminToken", token);
//         navigate("/admin");
//       } else {
//         console.log("Lỗi đăng nhập");
//         alert("không phận sự miễn vào");
//       }
//       console.log(4);
//     } catch (error) {
//       console.error("Lỗi đăng nhập:", error);
//     }
//   };
//   const handleAdminLogout = () => {
//     Cookies.remove("adminToken");
//     window.location.href = "/";
//   };
//   return (
//     <>
//       <div className="formLoginAdmin">
//         <div className="divFormLoginAdmin">
//           <h1> Login Admin</h1>
//           <form action="" className="formLoginAdminBayby">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               id="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button className="buttonAdmin" onClick={handleAdminLogin}>
//               Login Admin
//             </button>
//             <button className="buttonAdmin" onClick={handleAdminLogout}>
//               Thoát
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
