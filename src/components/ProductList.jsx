import React from 'react'
import './ProductList.css'
function ProductList({produto, descricao, link}){
    return(
        <div className="card" data-status="Esgotado">
            <img src={link} className="Q"/>
            <button className="buy-button">Comprar</button>
            <h3>{produto}</h3>
            <p className="price">{descricao}</p>
        </div>
    )
}

export default ProductList