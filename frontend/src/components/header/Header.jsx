import React,{useRef,useEffect} from 'react'
import Logo from "../../assets/images/logo.png"
import { NavLink,Link } from 'react-router-dom'
import Avatar from "../../assets/images/avatar-icon.png"
import { BiMenu } from 'react-icons/bi'

const navLinks = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/doctors",
    display:"Find a doctor"
  },
  {
    path:"/about",
    display:"About"
  },
  {
    path:"/contact",
    display:"Contact"
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () =>{
    window.addEventListener("scroll",function(){
      if(this.window.scrollY > 100 || this.document.documentElement.scrollTop > 100){
        headerRef.current.classList.add("sticky__header")
      }else{
        headerRef.current.classList.remove("sticky__header")
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    
    return () => {
      window.removeEventListener("scroll",handleStickyHeader)
    }
  })


  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu")
  }

  return <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*============= LOGO ===========*/}
          <div>
          <img src={Logo} alt="" />
          </div>
          {/*============== menu ==========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link,index) =>{
                  return <li key={index}>
                    <NavLink to={link.path} className={navClass => navClass.isActive ? "text-primaryColor":"text-textColor hover:text-primaryColor"}>{link.display}</NavLink>
                  </li>
                })
              }
            </ul>
          </div>
          {/*================ NAV RIGHT ===========*/}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to="/">
                <figure className='w-[35px] h-[35px] rounded-full'>
                  <img src={Avatar} className='w-full h-full rounded-full' alt="" />
                </figure>
              </Link>
            </div>

            <div>
              <Link to="/login" className='bg-primaryColor text-white px-4 py-2 h-[44px] rounded-full'>Login</Link>
            </div>
            
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
            
          </div>
        </div>
      </div>
  </header>
}

export default Header