import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text_para mt-0 font-semibold '>Ticket Price</p>
        <span className='text-[16px] lg:text-[22px] text-headingColor font-bold'>1000 BDT</span>
      </div>
      <div className='mt-[30px]'>
        <p className='text_para text-headingColor font-semibold'>Available Time slots :</p>
        <ul className='mt-3'>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] text-textColor font-semibold'>Sunday</p>
            <p className='text-[15px] text-textColor font-semibold'>4:00 PM - 9:30 PM</p>
          </li>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] text-textColor font-semibold'>Monday</p>
            <p className='text-[15px] text-textColor font-semibold'>4:00 PM - 9:30 PM</p>
          </li>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] text-textColor font-semibold'>Wednesday</p>
            <p className='text-[15px] text-textColor font-semibold'>4:00 PM - 9:30 PM</p>
          </li>
        </ul>
      </div>
      <button className='btn px-2 w-full rounded-md'>Book Appointment</button>
    </div>
  )
}

export default SidePanel