import Footer from "./Footer"
import logo from "../../assets/img/najot.png"



function Nav() {
  return (
    <div className="w-[100%] h-[100vh] 	justify-content: space-between;">
      <div className="nav xl:w-[300px] xl:h-[100vh] bg-[#fff]">
        <div className="logo xl:w-[1920px] xl:h-[100px] bg-[#ffffff] flex justify-between flex justify-between md:w-100px">
          <div className="one  xl:w-[350px] xl:h-[100px] ml-[25px]  flex items-center">
            <img src={logo} alt=""  className="   xl:w-[80px] xl:h-[100px]md:w-100px"/>
            <h1 className="text-[20px] font-bold ">Najot Talim</h1>
          </div>
          <div className="two w-[280px] h-[100px] flex mr-[400px] mt-[20px] " >
          <i className='bx bx-bell text-[25px] text-[#868686] mr-[10px] mt-[5px] '></i>
          <i className='bx bx-user-circle text-[37px] text-[#868686]'></i>
          <div className="text mr-[10px] ml-[10px] ">
            <h2 className="text-[18px] font-bold ">Topilova Madina</h2>
            <p className="text-[#868686]">O'quvchi</p>
          </div>
          </div>
        </div>
          <hr  className="w-[1920px]"/>
        <div className="reja xl:w-[]">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Nav