import Header from "../layout/Header";
import Footer from "../layout/Footer";

import Doctor from "../common/Doctor";
import Options from "../common/Options";
import "../../scss/pagecss/Home.scss";
import Animation from "../common/Animation";
export default function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <div className="Container">
          <div className="Options">
            <h1 className="h1Taitel"> Nha Khoa  Hiếu Đào Luxury</h1>
            <div className="divOptionsCheck-up">
              <Options />
            </div>
            <div className="divDoctor">
              <h2> News </h2>
              <div className="listDoctor">
                <Doctor />
              </div>
            </div>
          </div>
        </div>
        <div className="animation">
          <Animation />
        </div>
      
        <Footer />
      </div>
    </>
  );
}
