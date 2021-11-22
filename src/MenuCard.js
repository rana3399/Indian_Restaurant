import React from 'react'

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
                        <span className="card-author subtle" >{eachElement.name} </span>
                        <h2 className="card-title">{eachElement.name}</h2>
                        <span> {eachElement.description} </span>
                        <div className="card-read">Read More...</div>
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
