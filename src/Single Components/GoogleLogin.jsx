import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleLogIn}=useAuth()
    const axiosPublic=useAxios()
   const navigate=useNavigate()

const googleHadler=()=>{
    googleLogIn()
    .then((result)=>{
      console.log(result.user)
      const userInfo={
       email:result.user.email,
        name:result.user.displayName,
      photo:result.user.photoURL,
    
    }
     axiosPublic.post('/users',userInfo)
  .then(res=>{
        console.log(res.data)
  })


navigate('/')


    })
    .catch(error=>console.log(error.message))
    
    



}








    return (
        <div>
              <button onClick={googleHadler} className="btn bg-yellow-500 "><FaGoogle className="text-2xl"></FaGoogle></button> 
        </div>
    );
};

export default GoogleLogin;