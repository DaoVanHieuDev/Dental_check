import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../../scss/pagecss/Format.scss"
import Animation from "../common/Animation";
export default function Format() {
  return (
    <>
      <Header />
      <div className="containerFormat">
        <h1 className="taitelFormat">
          Quy Trình Đặt Lịch Khám Răng Tại Nha Khoa Hiếu Đào
        </h1>
        <div className="nohope">
          <img
            src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/04/pk.png"
            alt=""
          />
          <div className="div1Format">
            <h3> Cách đặt lịch ở đây </h3>
            <div className="classBuoc">
              <p> Bước 1 : Người dùng đăng kí và đăng nhập</p>
              <p> Bước 2 : Qua trang hệ thống xem danh sách nha sĩ</p>
              <p> Bước 3 : Khi tìm được nha sĩ phù hợp bạn chọn nha sĩ đó</p>
              <p> Bước 4 : Đặt ngày và giờ hẹn lịch khám</p>
              <p> Bước 5 : Nếu trùng lịch khám sẽ không đặt được</p>
              <p> Bước 1 : Khi xác nhận thông tin hãy ấn nút xác nhận</p>
            </div>
            <Animation/>
          </div>
           
        </div>
       
      </div>
      <Footer />
    </>
  );
}
