import React from 'react'
import Description from '../containers/Description';
import Quantity from '../containers/Quantity';
import ImageContent from '../containers/ImageContent'

function MainContainer({data, decreaseQuantity, increaseQuantity , productList}) {

    return(
        <>
            <ImageContent img={data.imageURL} discount={data.offerText} />
            <Description data={data} increaseQuantity={increaseQuantity} />
            <Quantity data={data} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
        </> 
    )
}

export default MainContainer;