import React,{useState} from 'react'
import doctorImg from "../../assets/images/doctor-img01.png"
import starIcon from "../../assets/images/Star.png"
import DoctorAbout from './DoctorAbout'
import FeedBack from './FeedBack'

const DoctorDetails = () => {

  const [tab,setTab] = useState("about")

  return (
    <section>
      <div className='max-w-[1170px] mx-auto px-5'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2 '>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg} alt="" className='w-full'/>
              </figure>
              <div>
                <span className='bg-[#ccf0f3] text-irisBlueColor font-semibold py-1 px-6 lg:py-2 text-[12px] lg:text-[16px] rounded'>
                  Surgeon
                </span>
                <h3 className='text-headingColor text-[22px] font-bold mt-3'>Muhibur Rahman</h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-headingColor'>
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className='text-[14px] lg:text-[16px] text-textColor font-[400]'>
                    (270)
                  </span>
                </div>
                <p className='text_para text-[14px] md:text-[15px] lg:leading-6 lg:max-w-[390px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, soluta?</p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button className={`${tab === "about" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] text-headingColor font-semibold`} onClick={()=>setTab("about")}>About</button>
              <button className={`${tab === "feedback" && "border-b border-solid border-primaryColor"} py-2 px-5 text-[16px] text-headingColor font-semibold`} onClick={()=>setTab("feedback")}>Feedback</button>
            </div>

            <div className='mt-[50px] '>
              {
                tab === "about" && <DoctorAbout></DoctorAbout>
              }
              {
                tab === "feedback" && <FeedBack></FeedBack>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails