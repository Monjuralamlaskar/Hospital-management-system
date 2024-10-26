import React from 'react'
import startIcon from "../../assets/images/Star.png"
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

const DoctorCard = ({doctor}) => {
  return (
    <div className='p-3 lg:p-5 flex-grow'>
        <div>
            <img src={doctor.photo} alt="" className='w-full'/>
        </div>
        <h2 className='text-[18px] lg:text-[26px] mt-3 lg:mt-5 text-headingColor font-[700]'>{doctor.name}</h2>
        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
            <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] rounded lg:text-[16px] font-semibold'>{doctor.specialization}</span>

            <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-headingColor '><img src={startIcon} alt="" />{doctor.avgRating}</span>

                <span className='flex items-center gap-[6px] text-[14px] lg:text-[16px] font-[400] text-textColor '>({doctor.totalRating})</span>
            </div>
        </div>

        <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
            <div>
                <h3 className='text-[16px] lg:text-[18px] font-semibold text-headingColor'>+ {doctor.totalPatients} Patients</h3>
                <p className='text-[16px] font-[400] text-textColor'>At {doctor.hospital}</p>
            </div>
            <Link to="/doctors/1" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <HiArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
        </div>
    </div>
  )
}

export default DoctorCard