import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"

import { HiStar } from 'react-icons/hi'
import patientAvatar from "../../assets/images/patient-avatar.png"

const TestimonialList = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} pagination={{clickable:true}} breakpoints={
            {
                640:{
                    slidesPerView:1,
                    spaceBetween:0
                },
                768:{
                    slidesPerView:2,
                    spaceBetween:20
                },
                1024:{
                    slidesPerView:3,
                    spaceBetween:30
                }
            }
        }>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3 ]'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] font-semibold text-headingColor'>Mahibur Rahaman</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate optio! Doloremque obcaecati quaerat asperiores.""
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3s '>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] font-semibold text-headingColor'>Mahibur Rahaman</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] mt-4 text-textColor font-[400]'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate optio! Doloremque obcaecati quaerat asperiores.""
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3s '>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] font-semibold text-headingColor'>Mahibur Rahaman</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] mt-4 text-textColor font-[400]'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cupiditate optio! Doloremque obcaecati quaerat asperiores.""
                    </p>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3s '>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] font-semibold text-headingColor'>Mahibur Rahaman</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                                <HiStar className='text-yellowColor w-[18px] h-5'></HiStar>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] mt-4 text-textColor font-[400]'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, cupiditate optio! Doloremque obcaecati quaerat asperiores.""
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default TestimonialList