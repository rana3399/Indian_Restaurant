import React, { useState } from 'react'
import Menu from './menuApi'
//import Navbar from './Navbar';
import MenuCard from './MenuCard';

function Restaurant() {
    const [menuData, setMenuData]= useState(Menu)
    //console.log(menuData);

    const filterItem=(category)=>{
        const updatedList =  Menu.filter((eachMenu)=> {
             return eachMenu.category === category;
         })
 
         setMenuData(updatedList);
         //console.log(menuData);
     
    }

    return (
        <>
        <div>
         <nav>
            <div className="navbar">
                <button onClick={()=> filterItem("breakfast")} className="navbar-links" >Breakfast </button>
                <button onClick={()=> filterItem("lunch")} className="navbar-links" >Lunch </button>
                <button onClick={()=> filterItem("evening")} className="navbar-links" >Evening</button>
                <button onClick={()=> filterItem("dinner")} className="navbar-links" >Dinner </button>
            </div>
         </nav>
        </div>

        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant;