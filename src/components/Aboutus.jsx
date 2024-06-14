import footerLogo from "../assets/Images/footerLogo.png"
import { FaLocationDot  } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
export default function Aboutus(){
    return(
        <div className="flex justify-around bg-black py-10 text-white border-y-4 border-white">
            <div className="grid grid-rows-2 px-4">
                <img src={footerLogo} />
                <p>Copyright Alemeno Private Limited©2022. All Rights Reserved</p>
            </div>
            <div className='grid grid-rows-3 gap-4'>
                <div>
                    <FaLocationDot />
                    101, Matis Villa, Majiwada,Thane, Maharashtra, 400601
                </div>
                <div className='underline decoration-white decoration-dashed underline-offset-2'>
                    <IoCall/>
                    +91 7042835383.
                </div>
                <div>
                    <IoIosMail/>
                    deepak@alemeno.com
                </div>
            </div>
        </div>
    );
}