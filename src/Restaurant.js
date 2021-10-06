import React, { useState } from 'react'
import Menu from './menuApi'
import Navbar from './Navbar';
import MenuCard from './MenuCard';


const uniqueList = [
        ...new Set(
            Menu.map((eachItem)=> {
        return eachItem.category;
    })
    ),
    "All"
    
];

function Restaurant() {
    const [menuData, setMenuData]= useState(Menu)
    const [menuList , setMenuList]= useState(uniqueList)


    const filterItem=(category)=>{
        const updatedList =  Menu.filter((eachMenu)=> {
            if(category == "All" ){
                console.log(Menu);
                return Menu;
                

            }else {
                return eachMenu.category === category;
            }
            //  
         })
 
         setMenuData(updatedList);
    }
    
    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant;