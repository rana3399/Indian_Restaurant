import React from 'react'
import "./Basket.css";

export default function Basket({cartItems, onAdd, onRemove}) {

    // ----------INVOICE AREA ---------

    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const delivaryPrice = itemPrice > 2000 ? 0 : 4.99;
    const totalprice = itemPrice + taxPrice + delivaryPrice;
    // ----------INVOICE AREA END ---------

    return (
        <div>
            <div> {cartItems.length === 0 && <h3 className='empty-cart'>Cart is empty</h3> }</div>
            
            <div className="bascket-main-container">
                <div className ="left_div">
                
                    {cartItems.map((item)=> {
                        return (
                        <div className= "main_row" >
                            <div key={item.id} className="bascket-child-container">
                                
                                <div className="bascket-item-image">
                                    <img className="busket-img"  src={item.image} alt={item.name} />
                                </div>

                                <div className="basket-item-info">
                                    <h4>{item.name}</h4>
                                </div>
                        
                                <div className="btn-main-conatainer">
                                    <button onClick ={()=> onRemove(item)} className="remove"> - </button>
                                    <button onClick={()=> onAdd(item)} className="add"> + </button>
                                </div>

                                <div className="price">
                                    <p> Price:  {item.qty} x {item.price} </p>
                                </div>
                            
                            </div>
                        </div>
                        )
                    })}
                </div>

                 {/* ----------  ORDER SUMMERY ---------- */}
            
                {cartItems.length > 0 && (
                    <div className="order-summery right_div">
                        <div>
                            
                            <div className = "row"> 
                                <div className="col-2">Item Price </div>
                                <div className="col-1"> € {itemPrice.toFixed(2) }  </div>
                            
                            </div>

                            <div className = "row"> 
                                <div className="col-2">Tax </div>
                                <div className="col-1"> € {taxPrice.toFixed(2) }  </div>
                            
                            </div>

                            <div className = "row"> 
                                <div className="col-2"> Delivary </div>
                                <div className="col-1"> € {delivaryPrice}  </div>
                            
                            </div>

                            <hr />

                            <div className = "row"> 
                                <div className="col-2"> <strong>Total</strong></div>
                                <div className="col-1 final-price"> <strong> €</strong> {totalprice.toFixed(2)  }  </div>
                
                            </div>

                        </div>

                        
                        <button className='checkout-btn' >Checkout</button>
                        
                    </div>
                    
                )}
            </div>
            
        
        </div>
    )
}
