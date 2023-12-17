import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios"
import Swal from "sweetalert2";

const Createdonation = () => {
    const { register, handleSubmit,reset} = useForm()
    const {user}=useAuth()
    const axiosPublic=useAxios()
 const onSubmit=async(data)=>{

 const name=data.name
 const date=data.date 
 const time=data.time 
 const distric=data.distric 
 const upzila=data.upzila
 const hospital=data.hospital 
 const address=data.address 
 const message=data.message
 const status='pending'
const RequesterEmail=user?.email 
const RequesterName=user?.displayName
 const donationInfo={name,date,time,distric,upzila,hospital,address,message,RequesterEmail,RequesterName, status}
console.log(donationInfo)

const res=await axiosPublic.post('/request',donationInfo)
         console.log(res.data)
             if(res.data.insertedId){
              reset()
              Swal.fire(
                'succes',
                'Requested Succesfully',
                'success'
              )
             }






 }



    return (
        <div className=' bg-orange-700 w-full  my-6' >
          <p className="text-center text-xl font-bold text-white py-6">Make Your Donation Request</p>
          <div className="text-center">
            <p>Requester Email:<span className="text-xl  text-white">{user?.email}</span></p>
            <p>Requester Name:<span className="text-xl  text-white">{user?.displayName}</span></p>
          </div>
        <form className="p-12 " onSubmit={handleSubmit(onSubmit)}>
  

 


  <div className="flex gap-4">

        <div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Recipient name </span>

</label>
<input {...register('name',{required:true})} type="text" placeholder="name" className="input  input-bordered input-primary w-full " />

</div>




  <div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Date</span>

</label>
<input {...register('date',{required:true})} type="date" placeholder=" email" className="input  input-bordered input-primary w-full " />

</div>




<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Time</span>

</label>
<input {...register('time',{required:true})}  type="time" placeholder="hospital name" className="input  input-bordered input-primary w-full " />

</div>


</div>

























<div className="">







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









</div>




<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Hospital Name</span>

</label>
<input {...register('hospital',{required:true})}  type="text" placeholder="hospital name" className="input  input-bordered input-primary w-full " />

</div>




<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Address</span>

</label>
<input {...register('address',{required:true})}  type="text" placeholder="address" className="input  input-bordered input-primary w-full " />

</div>


<div className="form-control">
  <label className="label">
    <span className="label-text">Requester Message</span>
   
  </label>
  <textarea {...register('message',{required:true} )} className="textarea textarea-bordered h-24" placeholder="Post description"></textarea>
  
  </div>




<div className="text-center my-6">




<button className="btn bg-slate-500 text-white hover:bg-black" type="submit">Request </button>


</div>

 
</form>
    </div>
    );
};

export default Createdonation;