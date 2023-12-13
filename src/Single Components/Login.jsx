import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FaGoogle } from "react-icons/fa6";
const Login = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit=async(data)=>{}




    return (
        <div className="bg-slate-400 h-[500px]  max-w-lg rounded-xl py-8 mx-auto">
            
        <p className="text-center text-xl text-white ">Welcome Back</p>

       

            <form className=" my-6" onSubmit={handleSubmit(onSubmit)}>

       
      



    <div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold text-slate-900">Your Email</span>
   <input type="text" {...register('email',{required:true})} placeholder="Your Email"  className="input input-bordered input-sm w-full max-w-xs  " required/>
    </div>






    <div className="flex flex-col p-4 space-y-3">
   <span className="label-text font-bold text-slate-900">Password</span>
   <input type="password" {...register('name',{required:true})} placeholder="Password"  className="input input-bordered input-sm w-full max-w-xs " required/>

 <div className="">
 <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
 </div>







    </div>
    <div className="ml-5 my-4">
    <button type="submit" className=" py-2 px-4  w-full max-w-xs bg-lime-500">Login</button>
    </div>
    


 </form>

     <div className="text-center my-3">
      <p className="font-bold text-slate-500  text-center">Or Login with</p>
         <button className="btn bg-yellow-500 "><FaGoogle className="text-2xl"></FaGoogle></button>

     </div>








       </div>
    );
};

export default Login;