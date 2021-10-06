import React from 'react'

function Navbar({filterItem, menuList}) {
    console.log(menuList);
    return (
        <>
        <div className="button-group-container ">
            {menuList.map((eachElement)=>{
              return  (
                
                <div key={eachElement}>
                    <button onClick={()=> filterItem(eachElement)} className="navbar-button" >{eachElement}</button>
                </div> 
              )
            }) }
        </div>
        </>

    ) 
}


export default Navbar;

