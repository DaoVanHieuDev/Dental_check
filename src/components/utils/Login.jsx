import "../../scss/aptask/Login.scss";
import { useState,  } from "react";
import SocialLogin from "../common/SocialLogin";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [validatorMsg, setValidationMsg] = useState("");
  const [isAdmin,setIsAdmin]=useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const validateAll = () => {
      const msg = {};
      if (email == "") {
        msg.email = "Bạn phải nhập email";
      } else if (!email) {
        msg.email = "Email chưa đúng định dạng";
      }
      if (!password) {
        msg.password = "Bạn phải nhập mật khẩu";
      } else if (password.length < 6) {
        msg.password = "Độ dài mật khẩu phải lớn hơn 6 kí tự";
      }
      setValidationMsg(msg);
      if (Object.keys(msg).length > 0) {
        return false;
      }
      return true;
    };
    const isValid = validateAll();
    if (isValid) {
      const user = {
        email: email,
        password: password,
      };
      axios
        .get("http://localhost:3000/users")
        .then((response) => response.data)
        .then((data) => {
          const foundUser = data.find(
            (item) =>
              item.email === user.email && item.password === user.password
          );
          if (foundUser ) {
            setUsername(foundUser.username);
            if (foundUser.isadmin === 1) {
              setIsAdmin(true);
              window.location.href="/admin"
              alert("Đăng nhập thành công!",console.log(1111));
              localStorage.setItem("username",JSON.stringify(
                foundUser.username 
              ))

            } else{
                window.location.href = "/";  
                alert("Đăng nhập thành công!",console.log(1111));
               localStorage.setItem("username",JSON.stringify(
                 foundUser.username 
               ))
            }
             
          } else {
            setErrorMessage("Thông tin đăng nhập không chính xác.");
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("Đã xảy ra lỗi khi kết nối đến máy chủ.");
        });
    }
  };

  return (
    <>
      <div className="loginHey">
        <form className="formLogin" onSubmit={handleSubmit}>
          <h3>Login </h3>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="inputEmail"
            value={email}
            onChange={(e) => handleEmailChange(e)}
            placeholder=" Email"
            id="email"
          />
          <p className="errorMessage"> {validatorMsg.email} </p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="inputPassword"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
            placeholder="Password"
            id="password"
          />
          <p className="errorMessage"> {validatorMsg.password}</p>
          <button type="submit">Log In</button>
          <div style={{ display: "flex", gap: "30px" }}>
            Bạn chưa có tài khoản.
            <Link style={{ textDecoration: "none" }} to="/register">
              Đăng kí ?
            </Link>
          </div>
          <div className="social">
            <SocialLogin />
          </div>
        </form>
      </div>
    </>
  );
}
