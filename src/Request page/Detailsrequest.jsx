import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";

import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const Detailsrequest = () => {
    const axiosPublic=useAxios()
    const{id}=useParams()
    const{user}=useAuth()
    
    const navigate=useNavigate()
  const{data:requests=[]}=useQuery({
    queryKey:['request'],
    queryFn:async()=>{
     const res=await axiosPublic.get('/request')
     return res.data
    }
  })

const matchDetailId=requests.find(req=>req._id===id)
  console.log(matchDetailId)
 




 const upadteStatus=(matchDetailId)=>{
console.log(matchDetailId._id)
const status='Inprogress'
const requestInfo={status}
axiosPublic.patch(`/request/${matchDetailId._id}`,requestInfo)
.then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount>0){
        Swal.fire(
            'Success',
            'Donation InProgress',
            'success'
        )
        navigate('/request')
    }
})
 }










    return (
        <div>
          <div className="card w-[90%] mx-auto p-4 h-[600px] bg-blue-500 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Name:{matchDetailId?.name}</h2>
    <p>{matchDetailId?. message}</p>
    <div className="">
       <p>{matchDetailId?.hospital}</p>
       <p>{matchDetailId?. address}</p>
    </div>
    <div className="card-actions justify-end">
     
      {/* MODAL FROM HERE */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>DONATE</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-slate-600 text-center">
  <p className="">Donor Name:{user?.displayName}</p>
  <p>Donor Email:{user?.email}</p>
 <div className="text-center my-6">
    <button onClick={()=>upadteStatus(matchDetailId)} className="btn text-white bg-gradient-to-t from-pink-500 to-purple-500">Confrim Donate</button>
 </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  </div>
</div>  
        </div>
    );
};

export default Detailsrequest;