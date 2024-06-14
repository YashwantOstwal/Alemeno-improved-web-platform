import allProjects from "./contentforprojects";
import downIcon from "../../assets/Images/downIcon.png"
import upIcon from "../../assets/Images/upIcon.png"
import { useState } from "react";

export default function Projects(){
    return(
      <div className='flex justify-center bg-black py-10'>
        <div className=' relative w-2/3 p-2 border-4 border-[#bb7bff] rounded-xl bg-[#1b1b1b]'>
            {allProjects.map(e => {return <CollapseComponent key={e.id} e={e}/>})}
            <div className=' w-fit bg-[#bb7bff] absolute -top-5 left-2.5 md:text-2xl sm:text-xl lilita-one-regular text-black px-3'> our Projects</div>
        </div>
      </div>
    );
}

function CollapseComponent(props){
  const[isOpen,setIsOpen] = useState(false)

  return(
    <div>
      <div className = 'my-2 lilita-one-regular text-white bg-zinc-700 border-[3px] border-gray-900 rounded-xl grid grid-cols-6 py-2'>
        <div className='px-4 col-span-5 text-clamp2'>
            {props.e.title}
        </div>
        <ShowHide isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <ShowContent className='flex justify-center' isOpen={isOpen} setIsOpen={setIsOpen} href={props.e.href} img={props.e.img}>
        {props.e.description}
      </ShowContent>
    </div>
  );
}
function ShowHide(props){
    const handleClick = () =>{
      props.setIsOpen((prevState) => {return !prevState})
    }
    return(
      <>
        {props.isOpen?
        (<button onClick={handleClick}> <img className='col-span-1 w-6 ' src={upIcon} /></button>):
        (<button onClick={handleClick}> <img className='col-span-1 w-6' src={downIcon} /></button>)}
      </>
    );
  }
  const ShowContent = (props) =>{
    console.log( typeof props.img)
  const[show,setShow]=useState(false)
  function handleClick(){
    setShow((prevState)=>{return !prevState})
  }
  return(
    <div>
      {props.isOpen && 
      <div className=' flex justify-center border-white p-1 rounded-lg '>
      <div className='w-11/12  '>
        <p className={`my-4 text-clamp2 text-white ${!show && ('max-md:line-clamp-3')}`}>
          {props.children}
        </p>
        <div className= 'flex justify-end md:hidden py-2'>
          <button className='text-white text-clamp3 underline' onClick={handleClick}>
            show {show?("less"):("more")}
          </button>
        </div>
        {props.href?(
        <iframe 
        src={`https://www.youtube.com/embed/${props.href}`} title="YouTube video player" modestbranding="1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        className= 'w-1/2 aspect-video rounded-md'>
        </iframe>):
        (
            <div className='flex justify-center'> <img className='w-3/5 rounded-xl' src={props.img}/> </div>
        )}
        
        </div>
      </div>}
    </div>
  );
}