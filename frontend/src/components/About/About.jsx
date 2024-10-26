import React from 'react'
import about from "../../assets/images/about.png"
import aboutCard from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
  <section>
    <div className="container">
      <div className='flex flex-col lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-[0] justify-between '>
        {/*====== ABOUT IMAGE ======*/}
        <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] '>
            <img src={about} alt="" />
            <div className='absolute bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutCard} alt="" />
            </div>
        </div>
        {/*============= ABOUT COTENT =========*/}
        <div className='w-full lg:w-1/2 xl:w-[670px] '>
          <h2 className='heading'>Proud to be one of the nations best</h2>

          <p className='text_para'>For 30 years in a row, U.S. News and World Report has recognized us as one of the best publics hosital in the nation and #1 in Texas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti odio quae perspiciatis alias a laboriosam dolor explicabo id possimus debitis.</p>

          <p className="text_para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus recusandae aperiam placeat unde at maiores quos, impedit, magnam deleniti nemo, minus reiciendis sit velit fuga itaque incidunt natus libero.</p>

          <Link to="/"><button className="btn">Learn More</button></Link>

        </div>
      </div>
    </div>
  </section>
  )

}

export default About