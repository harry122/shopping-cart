import React, { Component } from 'react'
import './Footer.css'
import ShowModal from './Modal'

class Footer extends Component{
    state= {
        toggle: false
    }

    toggleModal = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

 render() {


    return(
        <div className="footer">
            <div className="showRes">
                <div style={{color: "black",padding:'5px 0'}}>Qty: {this.props.itemQuantity}</div>
                <div style={{color: "black"}}>Total: {this.props.amount} </div>
            </div>
            <div className="checkout">
                <button className="check" onClick={this.toggleModal}>checkout</button>
            </div>
            {
            this.state.toggle ?
            <ShowModal amount={this.props.amount} itemQuantity={this.props.itemQuantity} togg={this.toggleModal} /> 
            : null
            }

        </div>
    )
}
}
export default Footer;