import React from 'react'
import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/doctor-img02.png"
import heroImg03 from "../assets/images/doctor-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import featureImg from "../assets/images/feature-img.png"
import aboutCard from "../assets/images/about-card.png"
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import About from "../components/About/About"
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import faqImg from "../assets/images/faq-img.png"
import FaqList from '../components/Faq/FaqList'
import TestimonialList from '../components/Testimonial/TestimonialList'

const Home = () => {
  return (
    <>
    {/* HERO SECTION  */}
      <section className='hero___section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col gap-[90px] items-center justify-center lg:flex-row'>
              {/* ===== HERO CONTENT LEFT ====== */}
              <div>
                <div className='lg:w-[570px]'>
                    <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We help patients to live a healthy, longer life</h1>
                    <p className='text_para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos nihil magni consequatur voluptates vero, ullam neque illo, consectetur, iusto corrupti accusamus eaque eveniet dolores alias.</p>
                    <button className='btn'>Request an Appoitment</button>
                </div>
                {/*======= HERO COUNTER ======*/}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor mt-[-14px] block rounded-full'></span>
                  <p className='text_para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor mt-[-14px] block rounded-full'></span>
                  <p className='text_para'>Clinic Location</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor mt-[-14px] block rounded-full'></span>
                  <p className='text_para'>Patient Satisfaction</p>
                </div>
              </div>
              </div>    
              {/*====== HERO CONTENT RIGHT*/}
              <div className='flex gap-[30px] justify-end'>
                <div>
                  <img className='w-full' src={heroImg01} alt="" />
                </div>
                <div className='mt-[30px]'>
                  <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
                  <img src={heroImg03} alt="" className='w-full'/>
                </div>
              </div>
          </div>
        </div>
      </section>
    {/* HERO SECTION END  */}

    {/*====== HOW IT WORKS SECTION ======== */}
      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services</h2>
            <p className='text_para text-center'>World class care for everyone. Our health system offers unmatched, expert health care</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

              <div className='py-[30px] px-5 '>
                <div className='flex items-center justify-center'>
                  <img src={icon01} alt="" />
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                      Find a Doctor
                  </h2>

                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      World-class care for everyone. Our health system offers unmatched, expert health care. From lab to the clinic
                  </p>

                  <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <HiArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>

              <div className='py-[30px] px-5 '>
                <div className='flex items-center justify-center'>
                  <img src={icon02} alt="" />
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                      Find a Location
                  </h2>

                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      World-class care for everyone. Our health system offers unmatched, expert health care. From lab to the clinic
                  </p>

                  <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <HiArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>

              <div className='py-[30px] px-5 '>
                <div className='flex items-center justify-center'>
                  <img src={icon03} alt="" />
                </div>
                <div className='mt-[30px] text-center'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                      Book Appointment
                  </h2>

                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      World-class care for everyone. Our health system offers unmatched, expert health care. From lab to the clinic
                  </p>

                  <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <HiArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>
              
          </div>
        </div>
      </section>
    {/*====== HOW IT WORKS SECTION END ======== */}

    {/*=========  ABOUT SECTION START ===========*/}
      <About />
    {/*=========== ABOUT SECTION END */}

    {/*========== SERVICES SECTION START ========*/}
      <section>
        <div className="container">
          <div className='xl:w-[470px] lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text_para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis nisi voluptas ex nam odit debitis vel, at quaerat similique?</p>
          </div>

          <ServiceList></ServiceList>

        </div>
      </section>
    {/*========== SERVICES SECTION END ========*/}

    {/*============= FEATURE SECTION START  ==============*/}
    <section>
      <div className="container ">
        <div className='flex flex-col lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-[0] justify-between'>
          {/*====== FEATURE SECTION CONTENT ========*/}
          <div className='w-full lg:w-1/2 xl:w-[670px] '>
            <h2 className='heading'>Get virtual treatment anytime</h2>

            <p className='text_para'>For 30 years in a row, U.S. News and World Report has recognized us as one of the best publics hosital in the nation and #1 in Texas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti odio quae perspiciatis alias a laboriosam dolor explicabo id possimus debitis.</p>

            <p className="text_para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus recusandae aperiam placeat unde at maiores quos, impedit, magnam deleniti nemo, minus reiciendis sit velit fuga itaque incidunt natus libero.</p>

            <Link to="/"><button className="btn">Learn More</button></Link>
          </div>
          {/*====== FEATURE SECTION IMAGE ========*/}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px]  '>
            <img src={featureImg} alt="" className='float-left lg:float-right'/>
              <div className='absolute right-[-30%] md:right-[-7%] bottom-4 w-[200px] md:w-[300px] lg:left-[10%]'>
                <img src={aboutCard} alt="" />
              </div>
          </div>

        </div>
      </div>
    </section>
    {/*============= FEATURE SECTION END ===============*/}

    {/* =========== OUR GREAT DOCTORS START ============== */}
    <section>
      <div className="container">
        <div className='xl:w-[470px] lg:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Our great doctors</h2>
              <p className='text_para text-center'>World class care for everyone, Our health system offers unmatched expert health care</p>
        </div>

        <DoctorList></DoctorList>
      </div>
    </section>
    {/* =========== OUR GREAT DOCTORS END ============== */}

    {/* ========= FAQ SECTION START ============= */}
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[0]'>
          <div className='w-1/2 hidden md:block '>
            <img src={faqImg} alt="" />
          </div>

          <div className='w-full md:w-1/2'>
            <h2 className='heading'>Most questions by our beloved patients</h2>
            <FaqList></FaqList>
          </div>
        </div>
      </div>
    </section>
    {/* ========= FAQ SECTION END ============= */}

    {/* ========= TESTIMONIAL SECTION START ============= */}
    <section>
      <div className="container">
        <div className='xl:w-[470px] lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>What our patient say</h2>
          <p className='text_para text-center'>World class care for everyone, Our health system offers unmatched expert health care</p>
        </div>

        <TestimonialList></TestimonialList>
      </div>
    </section>
    {/* ========= TESTIMONIAL SECTION END ============= */}



    </>
  )
}

export default Home