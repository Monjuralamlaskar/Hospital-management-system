import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube,AiFillGithub,AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path:"#",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"#",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"#",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"#",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
  }
]

const quickLinks01 = [
  {
    path:"/",
    display:"Home"
  },
  {
    path:"/about",
    display:"About us"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/",
    display:"blog"
  }
]

const quickLinks02 = [
  {
    path:"/find-a-doctor",
    display:"Find a doctor"
  },
  {
    path:"/",
    display:"Request an appointment"
  },
  {
    path:"/",
    display:"Find a location"
  },
  {
    path:"/",
    display:"Get a opinion"
  }
]
const quickLinks03 = [
  {
    path:"/",
    display:"Donate"
  },
  {
    path:"/contact",
    display:"Contact us"
  }
]


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex flex-col md:flex-row flex-wrap justify-between gap-[30px]'>
          <div className='md:w-[450px]'>
            <img src={logo} alt="" />
            <p className='text-[16px] font-[400] text-textColor mt-4'>Copyright © {year} developed by Monjur Alam Laskar all right reserved</p>

            <div className='flex items-center mt-4 gap-3 '>
            {
              socialLinks.map((link,index) => {
                return <Link to={link.path} key={index} className='h-9 w-9 border border-solid border-[#181A1E] rounded-full group hover:border-none hover:bg-primaryColor flex items-center justify-center'>{link.icon}</Link>
              })
            }
          </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-[20px] font-[700] mb-6 text-headingColor'>Quick links</h4>
            <ul>
              {
                quickLinks01.map((link,index) => {
                  return <li key={index} className='mb-4'><Link to={link.path} className='text-[16px] font-[400] text-textColor'>{link.display}</Link></li>
                })
              }
            </ul>
          </div>
          
          <div className='flex flex-col gap-4'>
            <h4 className='text-[20px] font-[700] mb-6 text-headingColor'>I want to :</h4>
            <ul>
              {
                quickLinks02.map((link,index) => {
                  return <li key={index} className='mb-4'><Link to={link.path} className='text-[16px] font-[400] text-textColor'>{link.display}</Link></li>
                })
              }
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-[20px] font-[700] mb-6 text-headingColor'>Support</h4>
            <ul>
              {
                quickLinks03.map((link,index) => {
                  return <li key={index} className='mb-4'><Link to={link.path} className='text-[16px] font-[400] text-textColor'>{link.display}</Link></li>
                })
              }
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer