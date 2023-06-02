import { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker, Space } from "antd";
import "../../scss/pagecss/Home.scss";

export default function TimeCalendar({ onOptionChange, onTimeChange,disable,doctorId})  {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  // const [selectedDoctor, setSelectedDoctor] = useState("");


  const [disabled, setDisabled] = useState(false);
  const [isTime1Disabled, setTime1Disabled] = useState(false); 
  const [isTime2Disabled, setTime2Disabled] = useState(false); 
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/schedule");
        if (response.ok) {
          const data = await response.json();   
          let isDisabled = false; 
           for( let i=0;i<data.length;i++ ) {
          if (
            data[i].selectedOption === selectedOption &&
            data[i].selectedTime === selectedTime     && data[i].doctorId===doctorId
          ) 
          { 
            isDisabled=true;
            break;
          } } 
          setDisabled(isDisabled)
          if (selectedTime === "1") {
            setTime1Disabled(isDisabled );
         
          } else if (selectedTime === "2") {
            setTime2Disabled(isDisabled);
          }
        }
        else{
          console.error("Lỗi:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [selectedOption, selectedTime,doctorId]);

  const handleSelectTimeChange = (event) => {
    const selectedValue = event.target.value.trim();
    setSelectedTime(selectedValue);
    onTimeChange(selectedValue);
    console.log(selectedValue);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setSelectedOption(dateString);
  onOptionChange(dateString )

  };
  const handleAlert = () => {
    setShowAlert(true); // Kích hoạt hiển thị cảnh báo
    alert("Lịch này đã được đặt");
  };
  return (
    <>
      <div className="dateForm">
        <div>
        <Space direction="vertical">
          {disable ? (<DatePicker  disabled={true} onChange={onChange} /> ): (  
         <DatePicker  disabled={false} onChange={onChange} />  )}
        </Space>  
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            paddingTop: "20px",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          <div
            className={`hehe ${isTime1Disabled ? "disable":""}`}
            onClick={isTime1Disabled ? handleAlert:null}
            style={{
              cursor: "pointer",
              backgroundColor: "yellow",
              width: "150px",
              height: "40px",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            <input
              type="radio"
              name="1"
              value="1"
              checked={selectedTime === "1"}
              onChange={handleSelectTimeChange}
               disabled={isTime1Disabled}
            />
            Ca Sáng
          </div>
          <div
              className={`${isTime2Disabled ? "disabled" : ""}`}
              onClick={isTime2Disabled ? handleAlert :null}
            style={{
              cursor: "pointer",
              backgroundColor: "yellow",
              width: "150px",
              height: "40px",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            <input
              type="radio"
              name="2"
              value="2"
              checked={selectedTime === "2"}
              onChange={handleSelectTimeChange}
              disabled={isTime2Disabled}
            />
            Ca chiều
          </div>
        </div>
      </div>
    </>
  );
}
