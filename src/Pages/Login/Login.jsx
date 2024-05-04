
import oqitishimgone from "../../assets/two/laptop.png"

function Login(){
   
    return(
      <div className='text-[#000] h-[800px]'>
      <div className="one "> 
        {/* <div className="container"> */}
         <div className="one-inner">
             <div className="one-text mb-[50px] mb-[40px] ml-[100px] mt-[20px] ">
             <h1 className="text-[#000] font-bold text-3xl">Barcha Kursalar</h1>
             </div>        
             <div className="two-button flex gap-10 ml-[100px] mb-[50px] ">
                    <button className=" w-[100px] h-[50px] rounded-full bg-[#F7F7F5] hover:bg-[#BA8C62] hover:text-[#fff] " >Barchasi</button>
                    <button className=" w-[100px] h-[50px] rounded-full bg-[#F7F7F5] hover:bg-[#BA8C62] hover:text-[#fff]" >Dizayn</button>
                    <button className=" w-[100px] h-[50px] rounded-full bg-[#F7F7F5] hover:bg-[#BA8C62] hover:text-[#fff]">Marketing</button>
                    <button className=" w-[100px] h-[50px] rounded-full bg-[#F7F7F5] hover:bg-[#BA8C62] hover:text-[#fff]">Boshqa</button>
                    <button className=" w-[100px] h-[50px] rounded-full bg-[#F7F7F5] hover:bg-[#BA8C62] hover:text-[#fff]">Dasturlash</button>
            </div>
             <div className="one-item flex gap-20 ml-[100px] w-[760px] h-[200px]  ">
                 <div className="one-item-bir w-[400px] h-[290px] bg-[#F9F9F9] ">
                     <img src={oqitishimgone} alt="" className=' w-[200px] h-[200px] ' />
                     <button class="one-button w-[100px] h-[25px] bg-[#B28C54] mt-[10px] ml-[10px] text-[#FFF] ">Dizayn</button>  
                     <h1 className='text-[#4A484A] mt-[10px] ml-[10px] border-none'>Moushin Dizayn</h1>
                 </div>
                 
                 <div className="one-item-ikki  w-[400px] h-[290px] bg-[#F9F9F9]  " >
                     <img src={oqitishimgone} alt="" className=' w-[200px] h-[200px] ' />
                     <button className='w-[100px] h-[25px] ml-[10px] mt-[10px] bg-[#101525] text-[#FFF] ' >Dasturlash</button> 
                     <h1 className=' text-[#4A484A] ml-[10px]' >Dasturlah Foundation</h1>
                 </div>
                 <div className="one-item-uch  w-[400px] h-[290px] bg-[#F9F9F9]">
                     <img src={oqitishimgone} alt="" className='w-[200px] h-[200px]' />
                     <button className='w-[100px] h-[25px] bg-[#07AE7A] text-[#FFF] mt-[10px] ml-[10px] '>Marketing</button> 
                     <h1 className='text-[#4A484A] mt-[10px] ml-[10px]  '>Social Media Marketing</h1>
                 </div>
             </div>  
 
             <div className="one-item flex gap-20 ml-[100px] w-[100vh] h-[200px] mt-[140px]  ">
                 <div className="one-item-tor  w-[200px] h-[265px] bg-[#F9F9F9] ml-[0px] ">
                     <img src={oqitishimgone} alt="" className=' w-[200px] h-[200px]  '/>
                     <button className='w-[100px] h-[25px] bg-[#B28C54] mt-[10px] ml-[10px] text-[#FFF]'>Dizayn</button> 
                     <h1 className='text-[#4A484A]  ml-[10px] border-none'>Adobe Illustration</h1>
                 </div>
                 <div className="one-item-besh w-[200px] h-[265px] bg-[#F9F9F9]  "> 
                     <img src={oqitishimgone} alt="" className=' w-[200px] h-[200px] ' />
                     <button className='w-[100px] h-[25px] bg-[#101525] mt-[10px] ml-[10px] text-[#FFF]'>Dasturlash</button> 
                     <h1 className='text-[#4A484A]  ml-[10px] border-none'>Node.js</h1>
                 </div>
                 <div className="one-item-uch  w-[200px] h-[265px] bg-[#F9F9F9]">
                     <img src={oqitishimgone} alt="" className='w-[200px] h-[200px]' />
                     <button className='w-[100px] h-[25px] bg-[#07AE7A] text-[#FFF] mt-[10px] ml-[10px] '>Marketing</button> 
                     <h1 className='text-[#4A484A] mt-[10px] ml-[10px]  '>Social Media Design</h1>
                 </div>
                 
             </div>
 
         </div>
        </div>
       
    </div>
      
    )
}

export default Login;