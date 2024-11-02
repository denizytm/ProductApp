import React from 'react'
import { useSelector } from 'react-redux'

export const ProductList = () => {
    
    const products = useSelector(state=>state.products.products)
    
    if(products.length)
    return (
      <div>
        <ul>
            {products.map(product=>(
                <li>
                    <p>
                        {product.name} / {product.price} $
                    </p>
                </li>
            ))}
        </ul>
    </div>
    )
    return (<div>Loading...</div>)
}