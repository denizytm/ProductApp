// Packages
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Carousel } from 'antd';
// Hooks
import { useGetProducts } from '../hooks/useGetProducts';
import { useCreateFavorite } from '../../favorites/hooks/useCreateFavorite';
import { useGetFavorites } from '../../favorites/hooks/useGetFavorites';
import { useDeleteFavorite } from '../../favorites/hooks/useDeleteFavorite';
// Assets
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.webp";
// Styling
import "../styles/CustomerProductDetails.css";

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
      if(selectedProduct) 
        navigate("/products");
    },[selectedProduct])

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
        <div className='container' >
          <Button onClick={()=>navigate("/products")}> Go Back </Button>
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
              <h3 className='discounted'>{selectedProduct.price} $ </h3>
              <h2>{ selectedProduct.price * (100 - selectedProduct.discountPer) / 100} $ </h2>
            </>
          ) : <h2>{selectedProduct.price} $ </h2> }
          <div className='bottom-container' >
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
