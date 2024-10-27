import React from 'react'
import {services} from "../assets/data/services"
import ServiceCard from "../components/Services/ServiceCard"

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className='flex flex-col md:flex-row md:flex-wrap gap-[30px] items-center justify-center md:justify-center
      '>
          {
              services.map((service,index) => {
                  return <ServiceCard key={index} service={service} index={index}></ServiceCard>
              })
          }
        </div>
      </div>
    </section>
  )
}

export default Services