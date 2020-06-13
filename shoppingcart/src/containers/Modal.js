import React from 'react'
import './Modal.css'

const ShowModal = ({amount, itemQuantity, togg}) => {  

        
    window.onclick = function(event) {  
        var modal = document.getElementById("myModal");
        if (event.target === modal) {
          modal.style.display = "none";
          togg();
        }
      }

    return(  
    <div id="myModal" className="modal">
        <div className="modal-content">
        { 
        (itemQuantity && amount) ?
         <div>
            <p style={{color: "black", fontSize:"25px", fontWeight:600}}>Your Transaction is successfull !</p>
            <p style={{color: "black", marginTop:"10px", fontSize:"20px"}}>Total cost is <span style={{fontWeight:600, fontSize:"21px"}}>{amount}</span></p>
        </div>
         : <p style={{color: "black", fontSize:"25px", fontWeight:500}}>No item in your cart.</p>   
        }
         <button className="close" onClick={togg}>Ok</button>
</div>
</div>
    )
}


export default ShowModal;