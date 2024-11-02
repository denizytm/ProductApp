import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export const ProductList = () => {
    
    const navigate = useNavigate();

    const products = useSelector(state=>state.products.products)
    
    const categories = useSelector(state=>state.products.categories)

    if(products.length)
    return (
      <div>
        <table style={{marginLeft : "50px"}} border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product=>(
                    <tr key={product.id} >
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td> <Button onClick={()=>{
                            navigate(`/admin/products/${product.id}`)
                        }}  type='primary' >See</Button>  </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
    return (<div>Loading...</div>)
}