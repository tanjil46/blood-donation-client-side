
import { Link, NavLink, Outlet } from "react-router-dom";
import { CgHome, CgProfile } from "react-icons/cg";
import { FaHandsHelping, FaHome } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import logo from '../img/blood-donation.jpg'
const Dashboard = () => {
    return (
        <div className="flex">
           <div className="w-32 bg-slate-400 min-h-screen">
               <img className="" src={logo}></img>
               <div className="my-4 menu space-y-10 ">
                <Link className="mx-auto"><CgProfile className=" text-3xl text-white"></CgProfile></Link>
                <Link className="mx-auto"><CgHome className=" text-3xl text-white"></CgHome></Link>
                <Link className="mx-auto"><FaHandsHelping  className=" text-3xl text-white"></FaHandsHelping></Link>
                <NavLink to='/dashboard/create' className="mx-auto"><IoIosAddCircleOutline className=" text-3xl text-white"></IoIosAddCircleOutline></NavLink>
               </div>
               <div className="my-12 border-t-2 border-yellow-400 ">
                <Link to='/' className=''><FaHome className="text-3xl mx-auto "></FaHome></Link>
               </div>
           </div>
           <div className="max-w-6xl mx-auto">
           <Outlet></Outlet>
           </div>
          
        </div>
    );
};

export default Dashboard;