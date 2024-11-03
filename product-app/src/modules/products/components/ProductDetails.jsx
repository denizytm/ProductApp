import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Modal } from 'antd';
import { useDeleteProduct } from '../hooks/useDeleteProduct';
import { useGetProducts } from '../hooks/useGetProducts';

export const ProductDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const deleteProduct = useDeleteProduct();

    const products = useGetProducts();
    
    const [open, setOpen] = useState(false);

    useEffect(()=>{
      if(id <= 0 || id > products.length ) 
        navigate("/admin/products");
    },[])

    const selectedProduct = products.find(product => product.id == id);

    const handleDelete = () => {
      deleteProduct(id)
      navigate("/admin/products");
    }

    const showModal = () => {
      setOpen(true);
    };
    const hideModal = () => {
      setOpen(false);
    };

    if(selectedProduct)
      return (
        <div style={{margin : "50px"}} >
          <h1>ProductDetails</h1>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.text}</p>
          <p>{selectedProduct.category}</p>
          {selectedProduct.discount ? (  /* eğer ürününün indirimi varsa indirimli fiyatı gözüküp orjinal fiyatının üzeri çizili olacaktır. */
            <>
              Discounted !
              <p style={{textDecoration : "line-through"}} >{selectedProduct.price} $ </p>
              <p>{(selectedProduct.price * selectedProduct.discountPer) / 100} $ </p>
            </>
          ) : <p>{selectedProduct.price} $ </p> }
          <div style={{display : "flex", gap : 20}} >
            <Button onClick={()=>navigate(`/admin/products/edit/${selectedProduct.id}`)} > Edit </Button>
            <Button type="primary" onClick={showModal}> Delete </Button>
          </div>
          <>
            <Modal
              title="Delete Product "
              open={open}
              onOk={handleDelete}
              onCancel={hideModal}
              okText="Delete"
              cancelText="Cancel"
              closeIcon={false}
            >
              <p>Are you sure that you want to delete this product ? (It's category will be remain)</p>
            </Modal>
          </>
        </div>
      )
}
