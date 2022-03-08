import React from 'react'
import "./contact.css"
export default function Conatact() {
  return (
    <div className='con vh-100'>
        <div className='text-center'>
        <h2>CONTACT ME</h2>
       
        </div>
        <div className='icon-cont text-center'>
        <i className="fa-solid fa-star  text-dark"></i>
        </div>
        <div className='container mt-5 '>
            <div className='w-75 m-auto'>
                <input type="text"className='form form-control' placeholder='NAME' />
                <input type="email"className='form form-control mt-5' placeholder='EMAIL' />
                <input type="number"className='form form-control mt-5' placeholder='PHONE NUMBER' />
                <textarea className='form form-control mt-5 ' placeholder='MESSAGE' />

          
          
            </div>

        </div>


   






    </div>


    

        






  )
}
