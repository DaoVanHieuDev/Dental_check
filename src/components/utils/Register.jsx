import "../../scss/aptask/Register.scss";
import { useState } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import SocialLogin from "../common/SocialLogin";
import { Link } from "react-router-dom";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [validatorMsg,setValidationMsg]=useState('  ')
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateAll = () => {
      const msg = {};
      if (!username) {
        msg.name = 'Bạn phải nhập tên';
      } else if (username.length<8) {
        msg.name = 'Tên chưa đúng bạn phải dài hơn 8 kí tự';
      }
      if (!email) {
        msg.email = 'Bạn phải nhập email';
      } else if (!isEmail(email)) {
        msg.email = 'Email chưa đúng định dạng';
      }
      if (!password) {
        msg.password = 'Bạn phải nhập  mật khẩu';
      } else if (password.length<6) {
        msg.password = 'Độ dài mật khẩu phải lớn hơn 6 kí tự';
      }
      setValidationMsg(msg);
      if (Object.keys(msg).length > 0) {
        return false;
      }
      return true;  
    };
    const isValid =validateAll();
    if(isValid){
          const newUser = {
        username: username,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:3000/users", newUser)
        .then((response) => {
          console.log(response.data);
          // Thực hiện các hành động khác sau khi đăng ký thành công
          window.location.href = "/login";
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  return (
    <>
      <div className="registerHey">
        <form className="formRegister" onSubmit={handleSubmit}>
          <h3>Register</h3>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="inputName"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Full Name"
            id="username"
          />
          <p className="errorMessage">
            {validatorMsg.name}
          </p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="inputEmail"
            placeholder=" Email"
            id="email"
          />
          <p className="errorMessage">{validatorMsg.email} </p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="inputPassword"
            placeholder="Password"
          />
          <p className="errorMessage">
          {validatorMsg.password}
          </p>
          <button type="submit">Register</button>
          <div style={{display:"flex",gap:"30px"}}> Đã có tài khoản
           <Link to="/login"        
          style={{textDecoration:"none"}}> Đăng nhập ?</Link> </div>
          <div className="social">
         <SocialLogin/>
          </div>
        </form>
      </div>
    </>
  );
}
