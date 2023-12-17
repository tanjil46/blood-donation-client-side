import { Link } from "react-router-dom";


const Showrequest = ({req}) => {
    const{name,time,date,hospital,address,distric,upzila,message,RequesterName,RequesterEmail,status,_id}=req

















    return (
        <div>
            <div className="card md:w-96 w-full bg-gradient-to-t from-pink-600 to-purple-500 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Requester Name:<span>{RequesterName}</span></h2>
    <div className="flex">
        <p>{date}</p>
        <p>{time} PM</p>
    </div>
    <p>Location:{address}</p>
    <p>Status:<span className="text-xl text-yellow-500">{status}</span></p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`} className="btn">VIEW</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Showrequest;