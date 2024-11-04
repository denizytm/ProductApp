import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Carousel } from 'antd';
import { useGetProducts } from '../hooks/useGetProducts';

import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.webp";
import { useCreateFavorite } from '../../favorites/hooks/useCreateFavorite';
import { useGetFavorites } from '../../favorites/hooks/useGetFavorites';
import { useDeleteFavorite } from '../../favorites/hooks/useDeleteFavorite';

export const CustomerProductDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const products = useGetProducts();
    const favorites = useGetFavorites();
    
    const [width, setWidth] = useState(window.innerWidth);

    const selectedProduct = products.find(product => product.id == id);

    const addToFavorites = useCreateFavorite();
    const deleteFavorite = useDeleteFavorite();

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

    const handleRemove = () => {
      deleteFavorite(selectedProduct.id);
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
            {favorites.find(favorite => favorite.id == selectedProduct.id) ? (
              <Button type='primary' onClick={handleRemove} > Remove From Favorites </Button>
              ) : 
              (
                <Button type='primary' onClick={handleAdd} > Add To Favorites </Button>
              )
            }
          </div>
        </div>
      )
}
