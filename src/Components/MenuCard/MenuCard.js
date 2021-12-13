import React from 'react';
import "./menuCard.css";

function MenuCard({menuData, onAdd}) {
    //console.log(menuData);
    return(
        <>
        <section className="main-card--container">

            {menuData.map((eachElement)=> {
                return (
                    <div className="card-container" key={eachElement.id} > 
                    <div className="card">
                        <div className="card-body">
                        <span className="card-number card-circle subtle" >{eachElement.id} </span>
            
                        <h2 className="card-title">{eachElement.name}</h2>
                        <span> {eachElement.description} </span>
                        <img
                        className="card-media" 
                        src={eachElement.image} 
                        alt="img"

                        />
                        <button className="card-button" onClick={()=> onAdd(eachElement)} > Order Now</button>
                    </div>
                </div>
            </div>
                )
            })}
        </section>
        </>
    )
     
    
}

export default MenuCard;
