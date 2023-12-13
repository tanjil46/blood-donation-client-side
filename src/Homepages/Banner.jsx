
import video from '../img/VID_20231205214620.mp4'


const Banner = () => {
    return (
        <div className='my-6 p-5'>
            <div className="relative h-screen">
      <video
        className="object-cover mx-auto w-[100%] h-full  rounded-lg hover:opacity-90"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
    </div> 
        </div>
    );
};

export default Banner;