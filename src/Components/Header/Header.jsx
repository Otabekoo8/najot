import najot from "../../assets/img/najot.png"
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#f3f3f3] pt-[50px] flex items-center justify-center">
    <div className="xl:w-[450px] xl:h-[530px] bg-[#fff] md:w-550px">
        <img src={najot} alt="" className=" 50px]h-[30px] md:w-[350px] lg:w-[550px] lg:px-[100px]"/>
        <h3 className="text-[35px] text-[#000] font-bold text-center">Najot Talim</h3>

          <input type="text" placeholder="Oquvchi  ID" className="w-[90%] h-[35px] border-[1px] border-[#aaa] ml-[25px] mt-[20px] pl-[15px]"/>
          <i className='bx bxs-envelope relative ml-[-25px] text-[20px]'></i>
              <br />
              <input type="text" placeholder="Parol" className="w-[90%] h-[35px] border-[1px] border-[#aaa] ml-[25px] mt-[20px] pl-[15px]"/>
          <i className='bx bxs-lock-alt relative ml-[-25px] text-[20px]'></i>        

            <hr  className="mt-[25px]"/>
        <div className="bt flex justify-between w-[90%] ml-[25px] h-[75px] items-center">
        <div className="btn flex gap-2">
              <input type="checkbox"  className="w-[20px] h-[20px]"/> <legend>Eslab qolish</legend>
          </div> 
          {/* <button className="w-[235px] h-[35px] bg-[#2828d3] text-[#fff]">Kirish</button> */}
          <Link to="/kirish" className="w-[235px] h-[35px] bg-[#2828d3] text-[#fff] text-center pt-[5px]"><span>Kirish</span></Link>
        </div>
    </div>
    </div>
  )
}

export default Header