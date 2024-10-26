import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const ServiceCard  = ({service,index}) => {
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] border-2px-2 py-2 flex-grow">
        <h1 className='text-[24px] font-[700]'>{service.name}</h1>
        <p className='mt-[20px]'>{service.desc}</p>
        <div className='flex items-center justify-between mt-[30px]'>
          <div className='w-[34px] h-[34px] rounded-full flex items-center justify-center border-2 border-black group hover:bg-primaryColor hover:border-none'>
            <HiArrowRight className='group-hover:text-white'/>
          </div>
          <div style={{backgroundColor:service.bgColor, color:service.textColor}} className='w-[44px] h-[44px] flex items-center justify-center font-[600]'>{index + 1}</div>
        </div>
    </div>
  )
}

export default ServiceCard