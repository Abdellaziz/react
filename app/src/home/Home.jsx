import React, { Component } from 'react'
import img1 from '../image/avataaars.svg'



export default class Home extends Component {
  render() {
    return <>
    <div className='head vh-100'>
        <div className='head1'>
      <img src={img1} alt="" />
     
        </div>
        <h1>START REACT</h1>
       
     
        <div className='mvp1'>  
         <i className="fa-solid fa-star"></i>
         <div className='mvp'></div>
       
          </div>
          <p className='mb-5'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
    

    
    </>
  }
}
