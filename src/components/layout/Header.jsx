import "./Header.scss";
import { NavLink } from "react-router-dom";
import Search from "../common/Search";

export default function Header() {
 
  const stored= JSON.parse(localStorage.getItem("username")) || JSON.parse(localStorage.getItem("admin"));

  return (
    <>
      <div className="Header">
        <img className="imgLogo" src="/images/logo-white.png" alt="" />
        <div className="menuOption">
          <NavLink className="navlink" to="/">
            {" "}
            TRANG CHỦ{" "}
          </NavLink>
          <NavLink className="navlink" to="/format">
            {" "}
            QUY TRÌNH{" "}
          </NavLink>
          <NavLink className="navlink" to="/system">
            HỆ THỐNG
          </NavLink>
          <div className="inputType">
          <Search/>           
          </div>
        </div> 
        {stored ?(  
        <div className="users">
        <NavLink to ="/admin"style={{color:"white",textDecoration:"none",lineHeight:"70px"}} > Xin chào {stored} </NavLink>
        </div>
        )
        :(    <div className="users">
        <NavLink to="/register" className="dangkine">Đăng Ký </NavLink>
        <div> | </div>
        <NavLink to="/login" className="dangnhapne"> Đăng Nhập</NavLink>
      </div>)}
      </div>
    </>
  );
}
