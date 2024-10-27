import React from 'react'
import { formDate } from '../../utils/formDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] text-headingColor font-semibold flex items-center gap-2'>
                Doctor about
                <span className='text-irisBlueColor text-[24px] font-bold'>Mahibur Rahman</span>
            </h3>
            <p className='text_para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et quibusdam, repudiandae hic itaque iste ipsa eligendi incidunt inventore asperiores omnis saepe consequatur dolore quisquam illo molestiae esse similique aut blanditiis earum perspiciatis. Dolore, eos.
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] text-headingColor font-semibold'>Education</h3>
            <ul className='pt-4 md:pt-5 '>
                <li className='flex flex-col md:flex-row sm:justify-between sm:items-start md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] font-semibold'>{formDate("10-26-2024")}</span>
                        <p className='text-[15px] font-medium text-textColor'>PHD in Surgeon</p>
                    </div>
                    <p className='text-[15px] font-medium text-textColor'>New Apollo Hospital, New York</p>
                </li>
                <li className='flex flex-col md:flex-row sm:justify-between sm:items-start md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] font-semibold'>{formDate("10-27-2024")}</span>
                        <p className='text-[15px] font-medium text-textColor'>PHD in Surgeon</p>
                    </div>
                    <p className='text-[15px] font-medium text-textColor'>New Apollo Hospital, New York</p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] text-headingColor font-semibold flex items-center gap-2'>
                Experience
            </h3>
            
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:pt-5'>
                <li className='p-4 rounded bg-[#fff9e2]'>
                    <span className='text-[15px] text-yellowColor font-semibold'>
                        [{formDate('06-12-2000')} - {formDate('07-18-2024')}]
                    </span>
                    <p className='text-[15px] font-medium text-textColor'>Sr. surgeon</p>
                    <p className='text-[15px] font-medium text-textColor'>New Apollo Hospital, New York</p>

                </li>

                <li className='p-4 rounded bg-[#fff9e2]'>
                    <span className='text-[15px] text-yellowColor font-semibold'>
                        [{formDate('06-12-2000')} - {formDate('07-18-2024')}]
                    </span>
                    <p className='text-[15px] font-medium text-textColor'>Sr. surgeon</p>
                    <p className='text-[15px] font-medium text-textColor'>New Apollo Hospital, New York</p>

                </li>
            </ul>

        </div>
    </div>
  )
}

export default DoctorAbout