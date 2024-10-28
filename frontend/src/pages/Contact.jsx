import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 max-w-screen-md mx-auto'>
        <h2 className="heading text-center">Contact Us</h2>
        <p className='para_para font-light text-center mb-8 lg:mb-16'>Got a technical issue ? Want to send feedback about a beta features ? Let us know</p>
        <form action="" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form_label'>Your email : </label>
            <input type="email" id="email" placeholder='example@gmail.com' className='form_input mt-1' />
          </div>

          <div>
            <label htmlFor="subject" className='form_label'>Subject : </label>
            <input type="text" id="subject" placeholder='Let us know how we can help you' className='form_input mt-1' />
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form_label'>Your message : </label>
            <textarea rows='6' type="text" id="message" placeholder='Leave a comment ....' className='form_input mt-1' />
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact