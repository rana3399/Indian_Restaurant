import React from 'react'
import { Link } from 'react-router-dom';

import "./navbar.css";

function Navbar({filterItem, menuList, cartItems}) {
    //console.log(menuList);
    return (
        <>
        <div className="nav-main-container ">

          {menuList.map((eachElement)=>{
            return  (
              <>
                <div className="button-group-container " key={eachElement.id}>
                  <button onClick={()=> filterItem(eachElement)} className="navbar-button" >{eachElement}</button> 
                </div>
                
              </>
            )
          })}

          <div className="cart" type='badge'>
          <Link to="/Basket" className='cart-link'> <strong>Cart 🛒 {cartItems.length} </strong> </Link>
         
          
          </div>

        </div>
        </>
    ) 
}

export default Navbar;

