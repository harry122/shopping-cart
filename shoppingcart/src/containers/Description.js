import React from 'react'

function Description({data, increaseQuantity}) {

if(data) {

    return(
        <div className="description">
               <div className="title">{data.brandName}</div>
               <div>{data.productName}</div>
               <div>{data.quantity}</div>
               <div>MRP: {data.MRP}</div>
               <div><span style={{fontWeight:700}}>Rs. {data.price}</span></div>
               <button className="add_cart" id="myBtn" onClick={() => increaseQuantity(data.id,data.price)}>Add cart</button>
         </div>

    )
}
    return  null;   

}

export default Description;