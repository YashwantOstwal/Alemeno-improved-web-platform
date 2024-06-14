import reviews from "./contentForReviews"
import reviewFace1 from "../../assets/Images/reviewFace1.png"
import reviewFace2 from "../../assets/Images/reviewFace2.png"
import star from "../../assets/Images/star.png"

export default function Reviews(){
    return(
      <>
      <div className='flex justify-center freeman-regular text-clamp bg-black text-[#a9ff03]'> Reviews :</div>
      <div className='bg-black flex justify-center py-5'>
        <ReviewTemplate index={0} reviewFace={reviewFace1}/>
        <ReviewTemplate index={1} reviewFace={reviewFace2}/>
      </div>
      </>
    )
  }
  function ReviewTemplate({index,reviewFace}){
    return(
      <>
      <div className='md:w-1/3 w-2/3 rounded-lg m-5 bg-[#1b1b1b] p-2'>
        <div className='text-white text-clamp3'>
          <img className='w-1/5' src={reviewFace}/>
          <div className=' flex justify-start lilita-one-regular'> <img className='pr-1' src={star} /> {reviews[index].author}</div>
          <div className='source-code-pro-alemeno'>//{reviews[index].authorDescription}</div>
          <div className='p-2 '>{reviews[index].review}</div>
        </div>
      </div>
      </>
    )
  }