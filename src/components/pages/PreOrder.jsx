import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../../scss/pagecss/System.scss";
import "../../scss/pagecss/Format.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TimeCalendar from "../common/TimeCalendar";
import FormRes from "../common/FormRes";
export default function PreOrder() {
  const [docter, setDocter] = useState("");
  // const [doctor, setDoctor] = useState(null);
  const { id } = useParams();
  // const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/doctor/${id}`)
      .then((res) => setDocter(res.data));
  }, [id]);

  const handleDateClick = () => {
    const currentDay = new Date();
    const hours = currentDay.getHours();
    setSelectedTime(hours.toString());
  };

  const handleDateTimeSelect = (option, time) => {
    setSelectedOption(option);
    setSelectedTime(time);
    console.log("fff",(setSelectedOption(option)+setSelectedTime(time)));
  };
  return (
    <>
      <Header />
      <div className="detailOrder">
        <h1> Trang chi tiết nha sĩ bạn muốn đặt lịch </h1>
        {docter && (
          <>
            <div key={docter.id} className="divDoctorCheck">
              <div>
                <img  style={{width:"200px",height:"200px"}} src={docter.img} alt="" />
              </div>
              <div>
                <div>
                  <div
                    style={{
                      color: "black",
                      fontWeight: "500",
                      fontSize: "25px",
                    }}
                  >
                    {docter.name}
                  </div>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    {docter.major}
                  </p>
                </div>
                <TimeCalendar // Truyền giá trị selectedOption
                  selectedOption={selectedOption}
                  selectedTime={selectedTime} 
                  onOptionChange={handleOptionChange}
                  onTimeChange={handleTimeChange}
                  date={handleDateClick}
                  onDateTimeSelect={handleDateTimeSelect}
                doctorId={docter.id}


                />
              </div>
            </div>
          </>
        )}
        <div className="hihi">
          {docter && (
            <div className="hav1">
              <p>{docter.trip}</p>

              <p>{docter.specialize}</p>
            </div>
          )}
          <div className="formdangkikham">
            {docter && (
              <FormRes // Truyền giá trị selectedOption
              selectedOption={selectedOption}
               selectedTime={selectedTime}
                doctorId={docter.id}
                doctorName={docter.name}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
