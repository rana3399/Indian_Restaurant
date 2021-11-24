import React, { useState } from 'react'
import Menu from './menuApi'
import Navbar from './Navbar';
import MenuCard from './MenuCard';
import Header from './Header';
import Basket from './Basket'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./header.css";

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
               // console.log(Menu);
                return Menu;
                
            }else {
                return eachMenu.category === category;
            }
            //  
         })
        setMenuData(updatedList);
    }

    const [cartItems, setCartItems] = useState([])   // CART ITEMS

    // -----ADD BUTTON -------------------

    const onAdd = (product) =>{

        const exist = cartItems.find(item => item.id === product.id);
        console.log(exist);
        if(exist){
            const incrementItem = cartItems.map((item)=>{
              return  item.id === product.id ? {...exist, qty: exist.qty + 1
            } : item
            })
            
            setCartItems(incrementItem)
            console.log(incrementItem);
        }else{
            const newProduct = {
                ...product, 
                qty: 1 
            }
            setCartItems([...cartItems, newProduct])
            console.log(cartItems);
        }
    }
    
    // -----REMOVE BUTTON ------  --------------

    const onRemove =(product)=>{

        const exist = cartItems.find((item) => item.id === product.id)
        console.log(exist);
        if (exist.qty === 1){
           const itemNotRemoved = cartItems.filter((item) => {
              return  item.id !== product.id
            })
            setCartItems(itemNotRemoved)

        }else{
            const decresingItems = cartItems.map((item) => {
                console.log(item);
            return  item.id === product.id ? { ...exist, qty: exist.qty -1}: item
            })
            setCartItems(decresingItems) 
        }             
    }


    return (
        <BrowserRouter>
        <>
        
        <Header />
        <Navbar filterItem={filterItem} menuList={menuList}  cartItems={cartItems}/>
        <MenuCard menuData={menuData} onAdd={onAdd} />

        <Routes>
           
           <Route exact path="/basket" element={ <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />   
          
        </Routes>
        
       </>
        </BrowserRouter>
    )
}

export default Restaurant;
