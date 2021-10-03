import React from 'react'

function MenuCard({menuData}) {
    //console.log(menuData);

    return(
        <>
        <section className="main-card--container">

            {menuData.map((eachElement, key)=> {
                return <div className="card-container" key={eachElement.id} > 
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
                        alt="menu-picture" 

                        />
                        <div className="card-tag"> Order Now</div>
                    </div>
                </div>
            </div>
            })}
        </section>
        </>
    )
     
    
}

export default MenuCard;
