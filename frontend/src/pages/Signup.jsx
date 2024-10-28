import React,{useState} from 'react'
import signupImg from "../assets/images/signup.gif"
import avatar from "../assets/images/doctor-img01.png"
import { Link } from 'react-router-dom'

const Signup = () => {


  const [selectedFile,setselectedFile] = useState(null)

  const [previewUrl,setPreviewUrl] = useState('')

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:selectedFile,
    gender:'',
    role:'patient'
  })

  const handleInputHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0].path
    console.log(file)
  }

  const submitHandler = async(e) => {
    e.preventDefault()
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* IMAGE BOX */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg '>
            <figure className='rounded-l-lg '>
              <img src={signupImg} alt="" className='w-full rounded-l-lg'/>
            </figure>
          </div>

          {/* SIGNUP FORM */}
          <div className='rounded-r-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] font-bold mb-10'>Create an <span className='text-primaryColor'>account</span></h3>

            <form onSubmit={submitHandler}>
              <div className='mb-5'>
                <input type="text" placeholder='Enter your name' name='name' value={formData.name} onClick={handleInputHandler} className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] text-headingColor placeholder:text-textColor 
                cursor-pointer' required/>
              </div>

              <div className='mb-5'>
                <input type="email" placeholder='Enter your email' name='email' value={formData.email} onClick={handleInputHandler} className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] text-headingColor placeholder:text-textColor 
                cursor-pointer' required/>
              </div>

              <div className='mb-5'>
                <input type="password" placeholder='Enter your password' name='password' value={formData.password} onClick={handleInputHandler} className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] text-headingColor placeholder:text-textColor 
                cursor-pointer' required/>
              </div>

              <div className='flex items-center justify-between mb-4'>
                <label htmlFor="" className='text-headingColor font-bold text-[16px]'>
                  You are a : 
                  <select name="role" value={formData.role} onClick={handleInputHandler} id="" className='text-textColor font-semibold text-[15px] px-4 py-3 focus:outline-none'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label htmlFor="" className='text-headingColor font-bold text-[16px]'>
                  Gender : 
                  <select name="gender" id="" value={formData.gender} onClick={handleInputHandler}  className='text-textColor font-semibold text-[15px] px-4 py-3 focus:outline-none'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] h-[60px] rounded-full  border-2 flex items-center justify-center border-solid border-primaryColor'>
                  <img src={avatar} alt="" className='w-full rounded-full'/>
                </figure>

                <div className='relative w-[130px] h-[50px]'>
                  <input type="file" name="photo" id="customFile" accept='.jpg, .png, .jpeg' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' onChange={handleFileInputChange} />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
                </div>
              </div>
              <div className='mt-7'>
              <button type='submit' className='w-full bg-primaryColor text-white text-[18px] rounded-lg px-4 py-3'>Signup</button>
            </div>
            <p className='mt-5 text-center text-textColor'>Already have an account? <Link to='/login' className='text-primaryColor font-medium'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup