import React from 'react'

function Quantity({data, increaseQuantity , decreaseQuantity }) {

const hideContent = (e) => {
  let ids = document.querySelector(`.id${data.id}`);
  let btn = document.querySelector(`#id${data.id}`)
  if((parseInt(ids.value) === 0) && e.target.id === btn.id) {
  return true
  }
    decreaseQuantity(data.id, data.price)
}

    return(
        <div className="quantity">
            <div className="btns">
                <button className="plus-btn" type="button" name="button"  onClick={(e) => increaseQuantity(data.id, data.price)}>
                  <img src="images/plus.svg" alt="plus" style={{height: "19px", width: "14px"}}/>
                </button>

                <input
                  className={`content id${data.id}`} 
                  type="text" 
                  name="name"
                  value={data.orderItem}
                  readOnly
                />

                <button className="minus-btn" id={`id${data.id}`} type="button" name="button" onClick={(e) => hideContent(e) }>
                  <img src="images/minus.png" alt="minus" id={`id${data.id}`} style={{height: "19px", width: "16px"}} />
                </button>
            </div>
      </div>
    )
}

export default Quantity;