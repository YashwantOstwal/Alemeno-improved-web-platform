import Internshala from "../assets/Images/Internshala.png"
import Contify from "../assets/Images/Contify.png"
import Mylab from "../assets/Images/Mylab.png"
import ClientsOnLarge from "../assets/Images/ClientsOnLarge.png"

export default function OurClients(){
    return (
      <div className='flex justify-center'>
        <div className="bg-ourclientsm bg-cover w-2/3 aspect-square content-center md:hidden my-5">
            <div className='text-black flex justify-center anton-regular text-clamp sm:text-5xl py-2'>
             // Our clients
            </div>
            <div className=' flex justify-around flex-wrap content-around w-fit aspect-[2/1]'>
              <img src={Internshala} className=' w-1/3 aspect-[4/1] mx-4 mt-6 '/>
              <img src={Contify} className='w-1/3 aspect-[4/1] mx-4 mt-6'/>
              <img src={Mylab} className='w-1/3 aspect-[4/1] mx-4 mt-6'/>
            </div>
        </div>
        <img src={ClientsOnLarge} className='hidden md:block w-4/5 '/>
      </div>
    );
  }