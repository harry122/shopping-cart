import React, { Component } from 'react'
import './App.css'
import MainCotainer from './MainCotainer'
import Footer from '../containers/Footer'
import Firebase from 'firebase';

class App extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        items: [],
        amount: 0,
        itemQuantity: 0
    }
    }

    componentDidMount() {
        this.Inputitems(); 
    }

    Inputitems = () => {
        let rootRef = Firebase.database().ref('/');
        rootRef.on('value', snapshot => {
          const state = snapshot.val();
          this.setState({
              items: state
          })
        });
        console.log(this.state.items);
    }

    increaseQuantity = (id, cost) => {
        this.setState({
            items: this.state.items.filter(item => {
            if(item.id === id) {
                 item.orderItem = item.orderItem + 1;
            }
            return true;
         })
        });
        
        this.state.items.filter(item => {
                if(item.id === id) {       
                 this.setState(preState => ({
                   amount: preState.amount + cost,
                   itemQuantity: preState.itemQuantity + 1
                 }))
                }
                return true;
            })
       }
    
    decreaseQuantity = (id, cost) => {
        this.setState({
            items: this.state.items.filter(item => {
            if( item.id === id && item.orderItem > 0 ) {
                 item.orderItem = item.orderItem - 1;
            }
            else if(item.id === id  && item.orderItem === 0) {
                item.orderItem = 0
            }
            return true
        })
    })


    this.state.items.filter(item => {
        if( item.id === id && item.orderItem > 0 ) {
            this.setState(preState => ({
                amount: preState.amount - cost,
                itemQuantity: preState.itemQuantity - 1
              }))
        }
        else if(item.id === id  && item.orderItem === 0) {
            this.setState(preState => ({
                amount: preState.amount - cost,
                itemQuantity: preState.itemQuantity - 1
              }))
        }
        return true
    })
     }
    
    renderList = () => {
     return this.state.items.map(cart => {
            return(
                <div key={cart.id}>
                <div className="container">
                    <MainCotainer data={cart} decreaseQuantity={this.decreaseQuantity} increaseQuantity={this.increaseQuantity} />
                </div>
                <hr style={{ position: "relative",top: "15px"}}/>

                </div>
                )
        })
    }

    render() {
        const {itemQuantity, amount} = this.state;
        console.log(this.state.items)
        return(
            <div className="app">
                  {this.renderList()}
                   <Footer amount={amount} itemQuantity={itemQuantity} />
            </div>
        )
    }
}

export default App;