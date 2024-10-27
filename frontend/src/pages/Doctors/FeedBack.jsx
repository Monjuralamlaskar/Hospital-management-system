import React,{useState} from 'react'
import avatarIcon from "../../assets/images/avatar-icon.png"
import {formDate} from "../../utils/formDate"
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const FeedBack = () => {

  const [feedbackForm, setFeedbackForm] = useState(false)

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] text-headingColor font-bold mb-[30px]'>All reviews (270)</h4>
        <div className='flex justify-between mb-[30px] gap-10'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatarIcon} alt="" className='w-full'/>
            </figure>
            <div>
              <h5 className='text-primaryColor text-[16px] font-bold'>Ahmed Ali</h5>
              <p className='text-[14px] text-textColor'>{formDate('05-14-2020')}</p>
              <p className='text_para text-[15px] font-medium mt-3 '>Very good doctor, i recommend his to all of you</p>
            </div>
          </div>
  
          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_,index) => {
              return <AiFillStar key={index} color='#0067FF'/>
            })}
          </div>
        </div>
      </div>
      {feedbackForm && <FeedbackForm/>}
      <div className='text-center'>
           {!feedbackForm && <button className="btn" onClick={() => setFeedbackForm(!feedbackForm)}>Give Feedback</button>}
      </div>
    </div>
  )
}

export default FeedBack