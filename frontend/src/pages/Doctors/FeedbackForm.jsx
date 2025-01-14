import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';


const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [hover,setHover] = useState(0)
    const [reviewText, setReviewText] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault()

        // later we will use our api
    }

  return (
    <form action="" onSubmit={submitHandler}>
        <div>
            <h3 className='text-headingColor text-[16px] font-semibold mb-4'>How Would rate the overall experience ?</h3>
            <div>
                {[...Array(5).keys()].map((_,index)=>{
                    index+=1;
                    return (
                        <button key={index} type='button' onClick={() => setRating(index)} className={`${index <= ((rating && hover) || hover)? "text-yellowColor":"text-gray-400"} bg-transparent border-none text-[22px] outline-none cursor-pointer`} onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(rating)} onDoubleClick={()=>{setHover(0),setRating(0)}}>
                            <span>
                                <AiFillStar></AiFillStar>
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>

        <div>
             <h3 className='text-headingColor text-[16px] font-semibold mb-4'>Share your feedback or suggestions</h3>
             <textarea className='border border-solid border-[#0066ff34] focus:outlilne outline-primaryColor w-full py-3 px-4 rounded-md' rows="5" placeholder='Write your message...' onChange={e => setReviewText(e.target.value)}></textarea>
        </div>

        <button type="submit" className="btn">Submit Feedback</button>
    </form>
    
  )
}

export default FeedbackForm