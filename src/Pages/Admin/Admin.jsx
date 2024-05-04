import React from 'react'
import "./Admin.css"
import oqitishimgone from "../../assets/one/laptop.png"


function Admin() {
  return (
    <div className='text-[#000] h-[800px]'>
     <div className="one "> 
       {/* <div className="container"> */}
        <div className="one-inner">
            <div className="one-text mb-[40px] ml-[100px] mt-[20px] ">
            <h1 className='text-[#000] font-bold text-3xl '>Sizga tafsiya qilamiz</h1>
            </div>        
            <div className="one-item flex gap-20 ml-[100px] w-[760px] h-[200px]  ">
                <div className="one-item-bir w-[400px] h-[290px] bg-[#F9F9F9] ">
                    <img src={oqitishimgone} alt="" className=' w-[200px] h-[200px] ' />
                    <button class="one-button w-[100px] h-[25px] bg-[#B28C54] mt-[10px] ml-[10px] text-[#FFF] ">dizayn</button>  
                    <h1 className='text-[#4A484A] mt-[10px] ml-[10px] border-none'>Moushin dizayn</h1>
                </div>
                {/* <NavLink to="/salom"className="">salom</NavLink> */}
                <div className="one-item-ikki  w-[400px] h-[290px] bg-[#F9F9F9]  " >
                    <img src={oqitishimgone} alt="" className=' w-[200px] h-[200px] ' />
                    <button className='w-[100px] h-[25px] ml-[10px] mt-[10px] bg-[#101525] text-[#FFF] ' >Dasturlash</button> 
                    <h1 className=' text-[#4A484A] ml-[10px]' >Dasturlash Foundation</h1>
                </div>
                <div className="one-item-uch  w-[400px] h-[290px] bg-[#F9F9F9]">
                    <img src={oqitishimgone} alt="" className='w-[200px] h-[200px]' />
                    <button className='w-[100px] h-[25px] bg-[#07AE7A] text-[#FFF] mt-[10px] ml-[10px] '>Marketing</button> 
                    <h1 className='text-[#4A484A] mt-[10px] ml-[10px]  '>Social media marketing</h1>
                </div>
            </div>  

           

        </div>
       </div>
      
   </div>
     
  )
}

export default Admin