import { NavLink } from "react-router-dom";


function Footer() {

  
    return (
      <div>
        <div>
          <div className="sidebar w-[250px] h-[115vh] ">
        <div className="z-5">
          <div className="grid gap-5">
          <NavLink to="/kirish" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[60px] pl-[25px] font-bold text-[19px] hover:bg-[#000] hover:text-[#fff]">
          <i className='bx bx-home-alt text-[25px]'></i>
            Bosh sahifa</NavLink>
          <NavLink to="/ma'lumot" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[60px] pl-[25px] font-bold text-[19px] hover:bg-[#000] hover:text-[#fff]">
          <i className='bx bx-code-block text-[25px]'></i>
            Mening kurslarim</NavLink>
          <NavLink to="/login" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[60px] pl-[25px] font-bold text-[19px] hover:bg-[#000] hover:text-[#fff]">
          <i className='bx bxs-credit-card-front text-[25px]'></i>
            Barcha kurslar</NavLink>
          <NavLink to="/xabarlar" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[60px] pl-[25px] font-bold text-[19px] hover:bg-[#000] hover:text-[#fff]">
          <i className='bx bxs-videos text-[25px]'></i>
            Videolar</NavLink>
          <NavLink to="/tizim" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[60px] pl-[25px] font-bold text-[19px] hover:bg-[#000] hover:text-[#fff]">
          <i className='bx bx-certification text-[25px]'></i>
            Sertifikatlarim</NavLink>
          <NavLink to="/" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[60px] mt-[350px] pl-[25px] font-bold text-[19px] ">
          <i className='bx bx-log-in text-[25px]'></i>
            <h1 className="text-[red]">Chiqish</h1></NavLink>
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  