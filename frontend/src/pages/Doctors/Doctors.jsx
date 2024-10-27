import React from 'react'
import DoctorCard from "../../components/Doctors/DoctorCard"
import {doctors} from "../../assets/data/doctors"
import TestimonialList from '../../components/Testimonial/TestimonialList'

const Doctors = () => {
  return (
    <>
      <section className='bg-[#fff9e2]'>
        <div className="container text-center">
          <h2 className='heading'>Find a doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input type="search" placeholder='Keep searching...' className='w-full focus:outline-none placeholder:text-textColor cursor-pointer py-4 pl-4 pr-2' />
            <button className='btn mt-0 rounded-none'>Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                doctors.map((doctor,index) => {
                    return <DoctorCard key={index} doctor={doctor}></DoctorCard>
                })
            }
          </div>
        </div>
      </section>

      <section>
      <div className="container">
        <div className='xl:w-[470px] lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>What our patient say</h2>
          <p className='text_para text-center'>World class care for everyone, Our health system offers unmatched expert health care</p>
        </div>

        <TestimonialList></TestimonialList>
      </div>
    </section>
    </>
  ) 
}

export default Doctors




// flex flex-col md:flex-row lg:w-1/4 justify-between gap-5  lg:gap-[30px] mt-[30px] lg:mt-[55px]