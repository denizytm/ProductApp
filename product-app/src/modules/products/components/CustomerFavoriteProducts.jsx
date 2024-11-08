// Packages
import React, { useState } from 'react';
import { Button, Card, Col, Row, Select, Space, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
// Components
import { useGetFavorites } from '../../favorites/hooks/useGetFavorites';
import { useDeleteFavorite } from '../../favorites/hooks/useDeleteFavorite';
// Styling
import "../styles/CustomerFavoriteProducts.css";

const { Option } = Select;

export const CustomerFavoriteProducts = () => {

    const navigate = useNavigate();

    const [searchData, setSearchData] = useState("");
    const [filteredValue, setFilteredValue] = useState("name");

    const products = useGetFavorites();

    const filteredProducts = products.filter(product => 
        product[filteredValue].toString().toLowerCase().includes(searchData.toLowerCase()) // filtered Value değerine göre product'ları filtreliyoruz
    );

    const deleteFavorite = useDeleteFavorite();

    const handleRemove = (product) => {
        deleteFavorite(product.id);
    }

    if(products.length)
    return (
       <>
            <div className='top-container'>
                <Select 
                    className='select'
                    defaultValue="name" 
                    onChange={(value) => setFilteredValue(value)}
                >
                    <Option value="name">Name</Option>
                    <Option value="category">Category</Option>
                </Select>
                
                <Input 
                    className='input'
                    placeholder={`Search by ${filteredValue}`}
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                />
            </div>
            <Row className='bottom-container' gutter={[16, 24]}>
              {filteredProducts.map(product => (
                  <Col
                      xs={24}     
                      sm={18}     
                      md={12}     
                      lg={6}      
                      key={product.id}
                  >
                      <Card
                        className='card'
                        title={product.name}
                        actions={[
                            <Space>
                                <Button onClick={()=>navigate(`/products/${product.id}`)}  >See Details</Button>
                                <Button onClick={()=>handleRemove(product)}  >Remove</Button>
                            </Space> 
                        ]}
                        >
                          <div className='card-header'>
                              <p className='category'>{product.category}</p>
                              <p>{product.text.length > 100 ? product.text.slice(0, 100) + "..." : product.text}</p>
                          </div>
                          
                          <div className='card-body' >
                              <Space className='space'>
                                  {product.discount ? 
                                      (<h4 className='discount' >{product.price}$</h4>)
                                          : 
                                      (<h1 className='orginal-price' >{product.price}$</h1>) 
                                  }
                                  <h2 className='discount-per' >{product.discount ? product.discountPer + "% Discount" : ""}</h2>
                              </Space>
                              {product.discount && (
                                  <h1 className='discounted-price'> {product.price * (100 - product.discountPer) / 100}$</h1>
                              )}
                          </div>
                      </Card>
                  </Col>
              ))}
            </Row>
        </>
    );
    else return (
        <>
            <h1>Your favorite list seems empty</h1>
        </>
    ) 
}

