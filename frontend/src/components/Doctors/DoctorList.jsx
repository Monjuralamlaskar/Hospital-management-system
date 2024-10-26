import React from 'react'
import {doctors} from "../../assets/data/doctors"
import DoctorCard from './DoctorCard'

const DoctorList = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-5  lg:gap-[55px] mt-[30px] lg:mt-[55px]'>
        {
            doctors.map((doctor,index) => {
                return <DoctorCard key={index} doctor={doctor}></DoctorCard>
            })
        }
    </div>
  )
}

export default DoctorList