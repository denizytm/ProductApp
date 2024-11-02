import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'antd';

export const ProductDetails = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const products = useSelector(state=>state.products.products);
    
    if(id <= 0 || id > products.length -1) navigate("/admin/products");

    const selectedProduct = products[id-1];

    if(selectedProduct)
        return (
          <div style={{margin : "50px"}} >
              <h1>ProductDetails</h1>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.text}</p>
              <p>{selectedProduct.category}</p>
              {selectedProduct.discount ? (
                <>
                    Discounted !
                    <p style={{textDecoration : "line-through"}} >{selectedProduct.price} $ </p>
                    <p>{(selectedProduct.price * selectedProduct.discountPer) / 100} $ </p>
                </>
                ) : <p>{selectedProduct.price} $ </p> }
            <Button onClick={()=>navigate(`/admin/products/edit/${selectedProduct.id}`)} >Edit</Button>
          </div>
        )
}
