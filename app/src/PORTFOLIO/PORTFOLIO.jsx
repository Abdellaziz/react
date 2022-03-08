
import './Portfoliostyle.css'
import cabin from '../image/cabin.png'
import cake from '../image/cake.png'
import circus from '../image/circus.png'
import game from '../image/game.png'
import safe from '../image/safe.png'
import submarine from '../image/submarine.png'
import $, { useState } from "react"




export default function PORTFOLIO() {





const [model,setModel]=useState(false)
const toggleModel =() => {
    setModel(!model)

}



  return (<>
   







   <div className='port mb-5'>

<h2>PORTFOLIO</h2>
<div className='icon'>
<i className="fa-solid fa-star"></i>

</div>
<div className='container mt-4'>
<div className='row'>
<div className='col-md-4 mt-3' data-bs-toggle="modal" data-bs-target="#exampleModal" >
    <div className="port-img" >
    <img src={cabin} className="w-100  " alt="" />
    <div className='back-img' id='baa'><i className="fa-solid fa-plus text-light "></i></div>
    </div>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header m-auto">
      <div>
     <h2>LOG CABIN</h2>
     <div className='icon text-center'>
<i className="fa-solid fa-star"></i>

</div>
 </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='item1 text-center'>
            <img src={cabin} className="w-100  "  alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn  btn-info m-auto" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>



</div>


<div className='col-md-4 mt-3' data-bs-toggle="modal" data-bs-target="#examplecacke" >
    <div className="port-img" >
    <img src={cake} className="w-100  " alt="" />
    <div className='back-img' id='baa'><i className="fa-solid fa-plus text-light "></i></div>
    </div>

    <div className="modal fade" id="examplecacke" tabIndex="-1" aria-labelledby="examplecacke1" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header m-auto">
      <div id="examplecacke1">
     <h2 >TASTY CAKE</h2>
     <div className='icon text-center'>
<i className="fa-solid fa-star"></i>

</div>
 </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='item1 text-center'>
            <img src={cake} className="w-100  "  alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn  btn-info m-auto" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>



</div>



<div className='col-md-4 mt-3' data-bs-toggle="modal" data-bs-target="#examplecircus" >
    <div className="port-img" >
    <img src={circus} className="w-100  " alt="" />
    <div className='back-img' id='baa'><i className="fa-solid fa-plus text-light "></i></div>
    </div>

    <div className="modal fade" id="examplecircus" tabIndex="-1" aria-labelledby="examplecacke2" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header m-auto">
      <div id="examplecacke2">
     <h2 >CIRCUS TENT</h2>
     <div className='icon text-center'>
<i className="fa-solid fa-star"></i>

</div>
 </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='item1 text-center'>
            <img src={circus} className="w-100  "  alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn  btn-info m-auto" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>



</div>


<div className='col-md-4 mt-3' data-bs-toggle="modal" data-bs-target="#examplegame" >
    <div className="port-img" >
    <img src={game} className="w-100  " alt="" />
    <div className='back-img' id='baa'><i className="fa-solid fa-plus text-light "></i></div>
    </div>

    <div className="modal fade" id="examplegame" tabIndex="-1" aria-labelledby="examplecacke3" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header m-auto">
      <div id="examplecacke3">
     <h2 >CONTROLLER</h2>
     <div className='icon text-center'>
<i className="fa-solid fa-star"></i>

</div>
 </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='item1 text-center'>
            <img src={game} className="w-100  "  alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-info m-auto" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>



</div>




<div className='col-md-4 mt-3' data-bs-toggle="modal" data-bs-target="#examplesafe" >
    <div className="port-img" >
    <img src={safe} className="w-100  " alt="" />
    <div className='back-img' id='baa'><i className="fa-solid fa-plus text-light "></i></div>
    </div>

    <div className="modal fade" id="examplesafe" tabIndex="-1" aria-labelledby="safe" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header m-auto">
      <div id="safe">
     <h2 >LOCKED SAFE</h2>
     <div className='icon text-center'>
<i className="fa-solid fa-star"></i>

</div>
 </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='item1 text-center'>
            <img src={safe} className="w-100  "  alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn  btn-info m-auto" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>



</div>





<div className='col-md-4 mt-3' data-bs-toggle="modal" data-bs-target="#submarine" >
    <div className="port-img" >
    <img src={submarine} className="w-100  " alt="" />
    <div className='back-img' id='baa'><i className="fa-solid fa-plus text-light "></i></div>
    </div>

    <div className="modal fade" id="submarine" tabIndex="-1" aria-labelledby="submarine1" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header m-auto">
      <div id="submarine1">
     <h2 >SUBMARINE
</h2>
     <div className='icon text-center'>
<i className="fa-solid fa-star"></i>

</div>
 </div>
        <button type="button" className="btn-close btn btn-info" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='item1 text-center'>
            <img src={submarine} className="w-100  "  alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-info m-auto " data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>



</div>











</div>
</div>


</div>









  
  </>
  )
}
