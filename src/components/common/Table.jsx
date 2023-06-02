function Table({data}) {
    return ( 
  <>   {data.map((item) => (
    <div key={item.id} className="divDoctorDetail">
      <div className="divDoctorimg">
        <img
          src={item.img}
          alt=""    
        />
      </div>
      <p  className="itemName"> {item.name}</p>
      <p className="itemMajor"> {item.major}</p>
      <p style={{color:"blue",fontWeight:"500"}}>   XEM THÊM </p>
    </div>
  ))}
 </>
     );
}

export default Table;