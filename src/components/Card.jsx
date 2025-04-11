import React from 'react'
import './Card.css'
function Card({produto, descricao, link}){
    return(
    <div className="card" data-status="">
            <img src={link} className="Q"/>
            <button className="buy-button">Comprar</button>
            <h3>{produto}</h3>
            <p className="price">{descricao}</p>
    </div>
        
    )
}

export default Card