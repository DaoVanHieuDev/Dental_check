import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    return (
    <>
    <div className="Header"> 
    <img className="imgLogo" src="/images/logo-white.png" alt="" /> 
    <div className="menuOption">
         <p> TRANG CHỦ </p>       
         <p> QUY TRÌNH </p>   
         <p>HỆ THỐNG</p>
         <div className="inputType"> 
            <input type="text" placeholder="Nhấp vào đây" /> 
            <FontAwesomeIcon className="fontSearch" icon={faMagnifyingGlass} beat/>
         </div>
    </div>
   <div className="users"> 
    <div> Đăng Ký</div>
    <div> | </div>
    <div> Đăng Nhập</div>
   </div>

    </div>
    
    </>  );
}
