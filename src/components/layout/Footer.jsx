import "./Footer.scss"


export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div>
          {" "}
          <img  className="imgLogo" src="/images/logo-white.png" alt="" />{" "}
        </div>
        <div>
          <div> LIÊN HỆ CHÚNG TÔI </div>
          <p>
            {" "}
            Hotline: <span> 0123456789</span>{" "}
          </p>
          <p>
            {" "}
            Website: <span> daovanhieuwebhay.com </span>
          </p>
          <p>
            {" "}
            Mail : <span>daovanhieu204@gmail.com</span>
          </p>
        </div>
        <div>
          <div> CÁC CƠ SỞ CỦA NHA KHOA DAOHIEU</div>
          <p> khe khau -van duc -chi linh-hai duong </p>
          <p> dinh thon - mi dinh -nam tu liem-ha noi</p>
          <p> con son-kiep bac-chi linh -hai duong </p>
        </div>
      </div>
    </>
  );
}
