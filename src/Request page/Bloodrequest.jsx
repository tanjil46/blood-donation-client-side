import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Showrequest from "./Showrequest";


const Bloodrequest = () => {
const axiosPublic=useAxios()

  const{data:requests=[]}=useQuery({
    queryKey:['request'],
    queryFn:async()=>{
     const res=await axiosPublic.get('/request')
     return res.data
    }
  })


  console.log(requests)

    return (
        <div>
            <p className="text-white text-2xl text-center my-8">All Donation Request</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-4 p-6 gap-4">
                {
                    requests.map(req=><Showrequest req={req} key={req._id}></Showrequest>)
                }
            </div>
        </div>
    );
};

export default Bloodrequest;