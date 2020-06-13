import React from 'react'

function ImageContent({img,discount}) {
    return(
        <div>
            <div className="image">
                 <img className="img" src={img} alt="" />
            </div>
            {discount}
         </div>
    )
}

export default ImageContent;