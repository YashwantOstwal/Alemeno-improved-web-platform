import whatwedo from "./contentforWwd.jsx"

export default function WhatWeDo(){
return(
<div className = 'md:grid md:grid-cols-2 md:pt-7'>
  <div className = 'flex md:bg-black justify-center py-7'>
    <div className = 'bg-black md:border-2 md:border-white rounded-xl w-4/5 p-7'>
      <div className = 'md:hidden poppins-semibold text-clamp text-[#a9ff03] py-4'>What We Do:</div>
      <ul className = 'grid grid-rows-4 gap-5'>
        {whatwedo.map(e => {return <WwdTemplate key={e.id} title={e.title} description={e.description}/>})}
      </ul>
    </div>
  </div>
  <div className  ='hidden md:block'>
    <div className = 'text-clamp poppins-bold bg-[#1b1b1b] text-[#a9ff03] h-full flex flex-col justify-center'>
      <div className = 'flex justify-center'>
        // What We Do
      </div>
    </div>
  </div>
</div>
);
}

function WwdTemplate({title,description}){
return(
<li className = 'flex justify-center '>
  <div className = 'w-full rounded-lg border-2 border-[#1b1b1b] hover:border-[#bb7bff] bg-[#1b1b1b] text-white text-bold text-clamp2 py-3'>
    <div className = 'font-semibold px-3'> {title}</div>
    <p className = 'font-light px-3'>{description}</p>
  </div>
</li>
);
}
  