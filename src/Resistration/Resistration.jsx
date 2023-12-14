

import { useForm } from 'react-hook-form';

import './Resitration.css'
import useAxios from '../Hooks/useAxios';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
   const Resistration = () => {
    const { register, handleSubmit,reset} = useForm()
    const axiosPublic=useAxios()
    const{user}=useAuth()


     const onSubmit=async(data)=>{

       const email=data.email
       const name=data.name
      
       const bloodGroup=data.group
       const distric=data.distric
       const upzila=data.upzila
      const status='active'

        const resistrationInfo={email,name,bloodGroup,distric,upzila,status}



       console.log(resistrationInfo)
        
       axiosPublic.post('/resistration',resistrationInfo)
       .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Resistration Created Succesfully",
            showConfirmButton: false,
            timer: 1500
          })
        }
       })











     }

    return (
        <div className='bg-set max-w-6xl mx-auto  my-6' >
          
            <form className="p-12" onSubmit={handleSubmit(onSubmit)}>
      







      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Email*</span>
   
  </label>
  <input {...register('email',{required:true})} defaultValue={user?.email} type="text" placeholder=" email" className="input  input-bordered input-primary w-full " />
  
</div>




<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Name*</span>
   
  </label>
  <input {...register('name',{required:true})} defaultValue={user?.displayName} type="text" placeholder="name" className="input  input-bordered input-primary w-full " />
  
</div>
































<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Select Your Blood Group*</span>
   
  </label>
 

  <select defaultValue='default' {...register('group',{required:true} )}    className="select select-bordered w-full ">
  <option disabled value='default'>Select Blood Group</option>
  <option value="a+">A+</option>
  <option value="b+">B+</option>
  <option value="a-">A-</option>
  <option value="b-">B-</option>
  <option value="o+">O+</option>
  <option value="o-">O-</option>
  <option value="ab+">AB+</option>
  <option value="ab-">AB-</option>
</select> 
  
</div>




<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Select Your Distric*</span>
   
  </label>
 

  <select defaultValue='default' {...register('distric',{required:true} )}    className="select select-bordered w-full ">
  <option disabled value='default'>Select Your Distric</option>
  <option value="dhaka">Dhaka</option>
  <option value="tangail">Tangail</option>
  <option value="comilla">Comilla</option>
  <option value="barishal">Barishal</option>
  <option value="rangpur">Rangpur</option>
  <option value="rajshahi">Rajshahi</option>
  <option value="kisorganj">Kisorganj</option>
  <option value="chittagong">Chittagong</option>
  <option value="shyllet">Shyllet</option>
  <option value="khulna">Khulna</option>
</select> 
  
</div>





<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Select Your Upazila*</span>
   
  </label>
 

  <select defaultValue='default' {...register('upzila',{required:true} )}    className="select select-bordered w-full ">
  <option disabled value='default'>Select upazila</option>
  <option value="mirpur">Mirpur</option>
  <option value="lokkhipur">Lokhhipur</option>
  <option value="zoshor">Zoshor</option>
  <option value="pabna">Pabna</option>
  <option value="nilphamari">Nilphamari</option>
  <option value="mymenshigh">Mymenshigh</option>
  <option value="noakhali">Noakhali</option>
  <option value="bandhorbon">Bandhorbon</option>
  <option value="rangamati">Rangamati</option>
  <option value="moulovibazar">Moulovibazar</option>
</select> 
  
</div>












<div className="text-center my-6">




<button className="btn bg-slate-500 text-white hover:bg-black" type="submit">Resistration</button>


</div>

     
    </form>
        </div>
    );
   };
   
   export default Resistration;