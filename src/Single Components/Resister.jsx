import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";


const bbImage_hosting_key='6d2bae620663c80614c87636edfc98c3';
const bbImage_hosting_api=`https://api.imgbb.com/1/upload?key=${bbImage_hosting_key} `
const Resister = () => {
    const { register, handleSubmit } = useForm()
    const {createUser,userProfile}=useAuth()
    const axiosPublic=useAxios()

    const onSubmit=async(data)=>{
      const imageUrl={image:data.image[0]}
      
  const res=await axios.post(bbImage_hosting_api,imageUrl,{
    headers:{
      'content-Type':'multipart/form-data'
    }
    
  })

     const name=data.name 
     const email=data.email
     const image=res.data.data.display_url
     const password=data.password
     const userInfo={name,email,image}
     console.log(userInfo)
     
  
   createUser(email,password)
   .then(()=>{
 
   userProfile(name,image)
   .then(()=>{
    
    axiosPublic.post('/users',userInfo)
    .then(response=>{
      console.log(response.data)
    })
  
   })



   })
   .catch(error=>console.log(error.message))








    }



    return (
        <div className="bg-slate-400 h-[600px]  max-w-lg rounded-xl py-8 mx-auto">
            
         <p className="text-center text-xl text-white ">Create an Account</p>

             <form className=" my-6" onSubmit={handleSubmit(onSubmit)}>

        
            <div className="flex flex-col  p-4 space-y-3 ">
    <span className="label-text font-bold text-slate-900">USERNAME</span>
    <input type="text" {...register('name',{required:true})} placeholder="Username"  className="input input-bordered input-sm w-full max-w-xs" required/>
     </div>
       



     <div className="flex flex-col  p-4 space-y-3">
    <span className="label-text font-bold text-slate-900">Your Email</span>
    <input type="email" {...register('email',{required:true})} placeholder="Your Email"  className="input input-bordered input-sm w-full max-w-xs  " required/>
     </div>




     <div className="flex flex-col p-4 space-y-3">
    <span className="label-text font-bold text-slate-900">Your Image</span>
    <input type="file"{...register('image',{required:true})} className="file-input file-input-bordered file-input-sm w-full max-w-xs" required />
     </div>


     <div className="flex flex-col p-4 space-y-3">
    <span className="label-text font-bold text-slate-900">Password</span>
    <input type="password" {...register('password',{required:true})} placeholder="Password"  className="input input-bordered input-sm w-full max-w-xs " required/>
     </div>
     <div className="ml-5 my-4">
     <button type="submit" className=" py-2 px-4  w-full max-w-xs bg-lime-500">Resister</button>
     </div>
    


  </form>

      <div className="">
        <p className="font-bold text-center text-slate-500">Have An Account? <Link to='/login' className="text-lime-400">LOGIN</Link></p>
      </div>








        </div>
    );
};

export default Resister;