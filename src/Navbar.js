import React from 'react'

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
          <a href="&"> <strong>Cart {cartItems.length}</strong>  </a> 
          </div>

        </div>
        </>
    ) 
}

export default Navbar;

