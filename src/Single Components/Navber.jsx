import {  useState } from "react";
import './Navbar.css'
import logo from '../img/blood-drop-plus-heart-shape-600nw-2238094877.webp'
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaBars } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Navber = () => {
  const[come,setCome]=useState(false)
const{user,userLogOut}=useAuth()
const axiosPublic=useAxios()

const handler=()=>{
setCome(!come)
}



  const{data:resistration=[]}=useQuery({
    queryKey:['resistration',user?.email],
    queryFn:async()=>{
     const res=await axiosPublic.get(`/resistration/${user?.email}`)
     return res.data
    }
  })


  const isSameUser=resistration.map(resis=>resis.email==user?.email)


console.log(isSameUser[0])



 const logOutHandler=()=>{
  userLogOut()
  .then(()=>{
    Swal.fire(
      'succes',
      'Succesfully LogOut',
      'success'
    )
  })
  .catch(error=>console.log(error.message))
 }












  return (
    <div>

    <div className='flex justify-between items-center p-5'>


 <div className="flex items-center">
  <img className="w-[50px] rounded-full" src={logo}></img>
  <p className=" "><span className="text-red-500 font-bold">BLOOD</span> DONATION</p>
 </div>

 <div className="lg:block hidden py-3">
 <ul className="flex space-x-5 text-white text-lg ">
  <Link to='/' className="hover:border-b-2 hover:border-yellow-500">HOME</Link>
{
  user?<Link to='/request' className="hover:border-b-2 hover:border-yellow-500" >DONATION REQUEST</Link>:''
}
  

  <li className="hover:border-b-2 hover:border-yellow-500">BLOG</li>
  {
    isSameUser[0]?'':<Link className="hover:border-b-2 hover:border-yellow-500" to='/resistration'>RESISTRATION</Link>
   
  } 
  
 </ul>
 </div>

 <div className="lg:block hidden">
 <ul className="flex space-x-5 text-white items-center">
  {
    user?'':<Link  to='/login' className=" border-2 border-yellow-500 px-3 py-2">Login</Link>
  }
  {
    user?<div className="dropdown dropdown-end">
    <div tabIndex={0} ><img className="w-[60px] rounded-full" src={user?.photoURL}></img></div>
    <ul tabIndex={0} className="dropdown-content space-y-5 text-center z-[1] menu py-3 px-6  bg-gradient-to-t from-slate-500 to-pink-500 rounded-box w-52">
     <Link to='/dashboard' className="text-xl text-slate-300 font-bold hover:border-b-2 hover:border-white">DASHBOARD</Link>
     <button onClick={logOutHandler} className="btn text-center"><FaArrowRightLong className="text-2xl"></FaArrowRightLong></button>
    </ul>
  </div> :<Link className="hover:border-b-2 hover:border-yellow-500" to='/resister'>Resister</Link>

  }

  
 
 </ul>
 </div>

 

 <button onClick={handler} className="text-3xl font-bold text-white lg:hidden block">{come?'X':<FaBars className="text-3xl text-white"></FaBars> }</button>


  


  </div>

  

  <div className=  {` bg-slate-600 my-8 w-full h-[400px] p-4 lg:hidden block   ${come ? 'block' : 'hidden'}   `} >
<ul className='text-center flex flex-col text-white font-bold space-y-8'>
<Link to='/' className="hover:border-b-2 hover:border-yellow-500">HOME</Link>
{
  user?<Link to='/request' className="hover:border-b-2 hover:border-yellow-500" >DONATION REQUEST</Link>:''
}
  

<Link className="hover:border-b-2 hover:border-yellow-500">BLOG</Link>
 {
    isSameUser[0]?'':<Link className="hover:border-b-2 hover:border-yellow-500" to='/resistration'>RESISTRATION</Link>
   
  } 
{
    user?'':<Link  to='/login' className=" border-2 border-yellow-500 px-3 py-2">Login</Link>
  }
  {
    user?<div className="dropdown dropdown-end">
    <div  tabIndex={0} ><img className="w-[60px] mx-auto rounded-full" src={user?.photoURL}></img></div>
    <ul tabIndex={0} className="dropdown-content space-y-5 text-center z-[1] menu py-3 px-6  bg-gradient-to-t from-slate-500 to-pink-500 rounded-box w-52">
     <Link  to='/dashboard' className="text-xl text-slate-300 font-bold hover:border-b-2 hover:border-white">DASHBOARD</Link>
     <button onClick={logOutHandler} className="btn text-center"><FaArrowRightLong className="text-2xl"></FaArrowRightLong></button>
    </ul>
  </div> :<Link className="hover:border-b-2 hover:border-yellow-500" to='/resister'>Resister</Link>

  }

</ul>
</div>



   





</div>




      
    
  );
};

export default Navber;


