import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";


const Createdonation = () => {
    const { register, handleSubmit,} = useForm()
    const {user}=useAuth()

 const onSubmit=async(data)=>{

 }



    return (
        <div className=' bg-orange-700 w-full  my-6' >
          
          <div className="text-center">
            <p>Requester Email:<span className="text-xl  text-white">{user?.email}</span></p>
            <p>Requester Name:<span className="text-xl  text-white">{user?.displayName}</span></p>
          </div>
        <form className="p-12 flex" onSubmit={handleSubmit(onSubmit)}>
  

 


  <div className="">

        <div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Recipient name </span>

</label>
<input {...register('email',{required:true})} type="text" placeholder=" email" className="input  input-bordered input-primary w-full " />

</div>




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
<input {...register('name',{required:true})}  type="text" placeholder="name" className="input  input-bordered input-primary w-full " />

</div>


</div>

























<div className="">



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




</div>







<div className="text-center my-6">




<button className="btn bg-slate-500 text-white hover:bg-black" type="submit">Resistration</button>


</div>

 
</form>
    </div>
    );
};

export default Createdonation;