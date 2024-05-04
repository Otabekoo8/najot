
import { Outlet } from 'react-router-dom';
import "./Layout.css"
import Nav from '../Components/Footer/Nav';



const Layout = () => {
   
    return (
        <div className='layout'>
        <div>
            <Nav />
        </div>


        <main className='bg-[#eee] h-[115vh] w-[100%] mt-[100px]'>
            <div>
                <Outlet/>
            </div>
            
        </main>
    </div>
    );
};

export default Layout;