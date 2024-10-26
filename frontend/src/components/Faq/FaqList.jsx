import React from 'react'
import FaqItem from "./FaqItem"
import {faqs} from "../../assets/data/faqs"

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
      {
        faqs.map((faq,index) => {
          return <FaqItem key={index} faq={faq}></FaqItem>
        })
      }
    </ul>
  )
}

export default FaqList