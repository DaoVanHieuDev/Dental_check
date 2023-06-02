import { useEffect,useState } from "react";
import "../../scss/pagecss/Animation.scss"

export default function Animation () {
    const [dam,setDam]=useState(false)
  
    useEffect(() => {
        const timer = setTimeout(() => {
          setDam(true);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);
      const redirectToPage = (url) => {
        window.location.href = url;
    }

    return ( 
        <>
        <div className="nobody"> 
        {dam &&(
        <div  className="ad-banner"
        onClick={() => redirectToPage('http://localhost:3001/system')} >   
        <img  src="https://banner2.cleanpng.com/20180622/tzv/kisspng-helen-keller-hospital-google-calendar-calendar-dat-hotel-reservations-5b2ce3b2ac59e0.743937711529668530706.jpg" alt="" /> 
      <p> Đặt lịch khám với Nha Sĩ</p>
        </div> )}
        </div>
        </>
     );
}

