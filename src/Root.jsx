import { Outlet } from "react-router-dom";
import Navber from "./Single Components/Navber";
import { useEffect, useState } from "react";


const Root = () => {
    const[spinner,setSpinner]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
       setSpinner(false)
      
      
      
        },4000)
        
    },[])



    return (
        <div>

          {
            spinner? <div className="min-h-screen text-center flex opacity-90 bg-white">
       <span className="loading loading-infinity loading-lg text-black mx-auto"></span>
        

            </div>: <div className="">
        <Navber></Navber>
            <Outlet></Outlet>
            </div>
          }



           
        </div>
    );
};

export default Root;