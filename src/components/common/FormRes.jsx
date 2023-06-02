import { useState } from "react";
import "../../scss/pagecss/Format.scss";
import axios from "axios";
export default function FormRes({ doctorId, doctorName,onSubmitSuccess ,selectedOption ,selectedTime }) {
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  // const [namebenhnhan, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      doctorId,
      doctorName,
      namebenhnhan: namebenhnhan,
      phone: phone,
      reason: reason,
      note: note,
      selectedOption: selectedOption,
      selectedTime: selectedTime,
    };
    console.log( "ehheheh", selectedOption + selectedTime);
    axios
      .post("http://localhost:3000/schedule", formData)
      .then((response) => {
        console.log(response.data); // In ra thông tin đặt hẹn mới
      })
      .catch((error) => {
        console.error("Error adding appointment", error);
      });
  };


const namebenhnhan= JSON.parse(localStorage.getItem("username")) || JSON.parse(localStorage.getItem("admin"));
  return (
    <>
      <div> Điền form đăng kí  </div>
      <form action="" className="formInput" onSubmit={handleSubmit}>
        <label htmlFor="name">Họ Và Tên </label>
        <input
          type="text"
          required
          value={namebenhnhan}
        
          placeholder="Nhập họ tê đầy đủ"
          id="name"
        /> 
        <label htmlFor="phone"  >Số điện thoại </label>
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          id="phone"
          onChange={(e) => setPhone(e.target.value)  }
          value={phone}
        
        />
        <label htmlFor="because">Lý do khám </label>
        <input
          type="text"
          placeholder="Lý do khám"
          id="because"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <label htmlFor="note">Ghi chú </label>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Ghi chú"
          id="note"
        />
        <button type="submit" > Xác Nhận</button>
      </form>
    </>
  );
}
