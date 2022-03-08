import React from 'react'
import './aboutstyle.css'




export default function About() {
  return (
    <div className='about-back vh-100'>
        <div className=' container'>

<div className='row'>
  <h2 className='text-center text-light'> ABOUT</h2>
  <div className='icon2 text-center'>
  <i className="fa-solid fa-star  text-light"></i>
  </div>
 
<div className='col-md-6 text-center'>
  <p className='text-light fs-4 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
  <div className='col-md-6 text-center'>
  <p className='text-light fs-4'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
  </div>
</div>
        </div>

    </div>
  )
}
