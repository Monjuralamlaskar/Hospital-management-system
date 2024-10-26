import React,{useState} from 'react'
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({faq}) => {

    const [isOpen,setIsOpen] = useState(false)

    const isOpenHandler = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
        <div className='flex items-center justify-between gap-5'>
            <h4 className='text-[16px] lg:text-[22px] text-headingColor'>{faq.question}</h4>
            
            <div className={`${isOpen && 'border-none bg-primaryColor text-white'} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`} onClick={isOpenHandler}>
                {isOpen ? <AiOutlineMinus/>:<AiOutlinePlus/>}
            </div>
        </div>

        {isOpen && <div className='mt-4'>
                        <p className='text-[14px] lg:text-[16px] font-[400] text-textColor'>{faq.content}</p>
            </div>}
    </div>
  )
}

export default FaqItem