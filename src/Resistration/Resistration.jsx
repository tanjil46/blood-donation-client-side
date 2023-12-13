

import { useForm } from 'react-hook-form';
import backImage from '../img/istockphoto-1248542684-612x612.jpg'
import './Resitration.css'
   const Resistration = () => {
    const { register, handleSubmit} = useForm()




     const onSubmit=async(data)=>{

       const email=data.email
       const name=data.name
       const image=data.image
       const bloodGroup=data.group
       const distric=data.distric
       const upzila=data.upzila
      const status='active'

        const resistrationInfo={email,name,image,bloodGroup,distric,upzila,status}



       console.log(resistrationInfo)












     }

    return (
        <div className='bg-set max-w-6xl mx-auto bg-gradient-to-t from-pink-400 via-purple-400 to-yellow-400 my-6' >
            <form className="p-12" onSubmit={handleSubmit(onSubmit)}>
      







      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Email*</span>
   
  </label>
  <input {...register('email',{required:true})} type="text" placeholder=" email" className="input  input-bordered input-primary w-full " />
  
</div>




<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Name*</span>
   
  </label>
  <input {...register('name',{required:true})} type="text" placeholder="name" className="input  input-bordered input-primary w-full " />
  
</div>




















<div className="my-6 mx-auto ">

<label className="label">
    <span className="label-text">Avatar*</span>
   
  </label>



<input type="file" {...register('image',{required:true} )} className="file-input file-input-bordered w-full max-w-xs" />


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




<button className="btn bg-slate-500 " type="submit">Add Post</button>


</div>

     
    </form>
        </div>
    );
   };
   
   export default Resistration;