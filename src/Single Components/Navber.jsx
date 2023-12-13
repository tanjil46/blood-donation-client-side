import { useState } from "react";
import './Navbar.css'
import logo from '../img/blood-drop-plus-heart-shape-600nw-2238094877.webp'
import { Link } from "react-router-dom";

const Navber = () => {
  const[come,setCome]=useState(false)

const handler=()=>{
setCome(!come)
}
console.log(come)


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

  <li className="hover:border-b-2 hover:border-yellow-500" >DONATION REQUEST</li>

  <li className="hover:border-b-2 hover:border-yellow-500">BLOG</li>
  <Link className="hover:border-b-2 hover:border-yellow-500" to='/resistration'>RESISTRATION</Link>
 </ul>
 </div>

 <div className="lg:block hidden">
 <ul className="flex space-x-5 text-white items-center">
  <Link  to='/login' className=" border-2 border-yellow-500 px-3 py-2">Login</Link>

  <Link className="hover:border-b-2 hover:border-yellow-500" to='/resister'>Resister</Link>

 
 </ul>
 </div>

 






  <div className=  {` bg-red-600 my-8 w-full h-[600px] p-4 lg:hidden block   ${come ? 'block' : 'hidden'}   `} >
  <ul className=''>
    <li className="text-xl text-center">Home</li>
  
    <li className="text-xl text-center clor">Home</li>
  
    <li className="text-xl text-center">Home</li>
    <li className="text-xl text-center">Home</li>
   </ul>
  
  


  </div>

  <button onClick={handler} className="btn btn-primary lg:hidden block">X</button>



   





</div>




      
    </div>
  );
};

export default Navber;