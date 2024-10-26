import React from 'react'
import data from "../../assets/data/services"
import ServiceCard from './ServiceCard'

const ServiceList = () => {
  return (
  <div className='flex flex-col md:flex-row md:flex-wrap gap-[30px] mt-[55px] items-center justify-center md:justify-center
'>
    {
        data.map((service,index) => {
            return <ServiceCard key={index} service={service} index={index}></ServiceCard>
        })
    }
  </div>
  )
}

export default ServiceList


// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]


// flex flex-col md:flex-row md:flex-wrap gap-[30px] mt-[30px] items-center justify-center md:justify-center