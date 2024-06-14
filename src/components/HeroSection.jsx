import { useState } from "react";
import HeroImage from "../assets/Images/HomeImage.png"
import Logo from "../assets/Images/Logo.png"
import PopUp from "../components/PopUp.jsx"

export default function HeroSection(){
    return(
      <div className='max-md:bg-heroImage max-md:bg-cover'>
      <div className = 'md:grid md:grid-cols-2 py-2'>
      <div className = 'px-6 pt-2'>
        <img className = 'my-4' src = {Logo} />
        <div>
          <p className = 'md:py-8 px-8 text-black anton-regular text-clamp tracking-wide' >
                TRANSFORM YOUR BUSINESS USING TECHNOLOGY 
          </p>
          <p className = 'md:py-8 px-8 pt-5 text-black source-code-pro-alemeno text-clamp2 tracking-wide font-semibold'>
                 // We provide technology support to help organizations achieve their vision
          </p>
          <ContactButton />
        </div>
      </div>
      <div className = 'flex flex-col justify-center'>
        <img className = 'hidden md:block w-full' src = {HeroImage}  />
      </div>
      </div>
      </div>

    );
  }
  function ContactButton(){
    const [pop,setPop] = useState(false);
    const handleClick = () => {
      setPop((prevState) => { return !prevState})
    }
    return(
      <div className = 'flex justify-center'>
        <button onClick = {handleClick} className = ' border-4 border-black mt-3 w-3/5 rounded-md py-2 text-clamp2 hover:bg-black hover:text-white transtion delay-100 duration-100'>
          <div className = 'flex justify-center anton-regular tracking-wide'>
          Book a FREE assessment 
          </div>
          {pop && <PopUp/>}
        </button>
      </div>
    );
  }