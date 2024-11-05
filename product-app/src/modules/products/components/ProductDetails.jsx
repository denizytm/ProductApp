// Packages
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Modal, Carousel } from 'antd';
// Hooks
import { useDeleteProduct } from '../hooks/useDeleteProduct';
import { useGetProducts } from '../hooks/useGetProducts';
// Assets
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.webp";
// Styling
import "../styles/ProductDetails.css";

export const ProductDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const deleteProduct = useDeleteProduct();
    const products = useGetProducts();
    
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const selectedProduct = products.find(product => product.id == id);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(()=>{
      if(!selectedProduct) 
        navigate("/admin/products");
    },[selectedProduct])

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
        <div className='container' style={{margin : "50px"}} >
          <Button onClick={()=>navigate("/admin/products")}> Go Back </Button>
          <h1>ProductDetails</h1>
          {width > 900 && (
            <Carousel className='carousel' draggable={true} arrows infinite={true}>
              <div>
                <img src={image1} /> {/* Database'de ürün fotosu kaydedemedğimden static foto ekledim */}
              </div>
              <div>
                <img src={image2} />
              </div>
              <div>
                <img src={image3} />
              </div>
            </Carousel>
          ) }
          <h2>{selectedProduct.name}</h2>
          <h3>{selectedProduct.category}</h3>
          <p>{selectedProduct.text}</p>
          {selectedProduct.discount ? (  /* eğer ürününün indirimi varsa indirimli fiyatı gözüküp orjinal fiyatının üzeri çizili olacaktır. */
            <>
              <h3> Discounted ! ({selectedProduct.discountPer} %) </h3>
              <h3 className='price' >{selectedProduct.price} $ </h3>
              <h2>{ selectedProduct.price * (100 - selectedProduct.discountPer) / 100} $ </h2>
            </>
          ) : <h2>{selectedProduct.price} $ </h2> }
          <div className='button-container' >
            <Button type='primary' onClick={()=>navigate(`/admin/products/edit/${selectedProduct.id}`)} > Edit </Button>
            <Button type='primary' danger onClick={showModal}> Delete </Button>
          </div>
          <>
            <Modal
              title="Delete Product "
              open={open}
              onOk={handleDelete}
              onCancel={hideModal}
              okType='danger'
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
