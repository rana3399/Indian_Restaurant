import React from 'react'

function Navbar({filterItem, menuList}) {
    //console.log(menuList);
    return (
        <>
        <div>
            {menuList.map((eachElement)=>{
              return  (
                <div key={eachElement}>
                    <button onClick={()=> filterItem(eachElement)} className="navbar-links" >{eachElement}</button>
                </div> 
              )
            }) }
        </div>
        </>

    ) 
}

export default Navbar;

