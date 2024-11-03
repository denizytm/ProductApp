import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Modal, Carousel } from 'antd';
import { useDeleteProduct } from '../hooks/useDeleteProduct';
import { useGetProducts } from '../hooks/useGetProducts';

import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.webp";
import { useCreateFavorite } from '../../favorites/hooks/useCreateFavorite';

export const CustomerProductDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const products = useGetProducts();
    
    const [width, setWidth] = useState(window.innerWidth);

    const selectedProduct = products.find(product => product.id == id);

    const addToFavorites = useCreateFavorite();

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(()=>{
      if(id <= 0 || id > products.length ) 
        navigate("/products");
    },[])

    const handleAdd = () => {
        addToFavorites(selectedProduct);
        navigate("/products/favorites");
    }

    if(selectedProduct)
      return (
        <div style={{margin : "50px"}} >
          <Button onClick={()=>navigate("/products")}> Go Back </Button>
          <h1>ProductDetails</h1>
          {width > 900 && (
            <Carousel draggable={true} style={{width : "40%"}} arrows infinite={true}>
              <div>
                <img src={image1} height={300} style={{width : "100%"}} /> {/* Database'de ürün fotosu kaydedemedğimden static foto ekledim */}
              </div>
              <div>
                <img src={image2} height={300} style={{width : "100%"}} />
              </div>
              <div>
                <img src={image3} height={300} style={{width : "100%"}} />
              </div>
            </Carousel>
          ) }
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.text}</p>
          <p>{selectedProduct.category}</p>
          {selectedProduct.discount ? (  /* eğer ürününün indirimi varsa indirimli fiyatı gözüküp orjinal fiyatının üzeri çizili olacaktır. */
            <>
              <h3> Discounted ! ({selectedProduct.discountPer} %) </h3>
              <h3 style={{textDecoration : "line-through"}} >{selectedProduct.price} $ </h3>
              <h2>{ selectedProduct.price * (100 - selectedProduct.discountPer) / 100} $ </h2>
            </>
          ) : <h2>{selectedProduct.price} $ </h2> }
          <div style={{display : "flex", gap : 20}} >
            <Button type='primary' onClick={handleAdd} > Add To List </Button>
          </div>
        </div>
      )
}
