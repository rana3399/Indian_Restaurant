import React, { useState } from 'react';

import Menu from './Components/MenuCard/menuApi';
import Navbar from './Components/Navbar/Navbar';
import MenuCard from './Components/MenuCard/MenuCard';
import Header from './Components/Header/Header';
import Basket from './Components/Basket/Basket';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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


    const filterItemHandeler=(category)=>{
        const updatedList =  Menu.filter((eachMenu)=> {
            if(category == "All" ){
                return Menu;
                
            }else {
                return eachMenu.category === category;
            }
         })
        setMenuData(updatedList);
    }

    const [cartItems, setCartItems] = useState([])   // CART ITEMS

    // -----ADD BUTTON -------------------

    const onAddHandeler = (product) =>{

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
    // -----REMOVE BUTTON ------ 

    const onRemoveHandeler =(product)=>{

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
            <Header />
            <Navbar
            filterItem={filterItemHandeler}
            menuList={menuList} 
            cartItems={cartItems}                
            />

            <Routes>
                <Route path= "/" element={ <MenuCard menuData={menuData} onAdd={onAddHandeler} />}  />
                <Route path="/basket" element={ <Basket cartItems={cartItems} onAdd={onAddHandeler} onRemove={onRemoveHandeler} />} />           
            </Routes>
            
        </BrowserRouter>
    )
}

export default Restaurant;
