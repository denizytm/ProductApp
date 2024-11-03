import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Divider, Row, Select, Space, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGetProducts } from '../hooks/useGetProducts';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useGetFavorites } from '../../favorites/hooks/useGetFavorites';
import { useDeleteFavorite } from '../../favorites/hooks/useDeleteFavorite';

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

    useEffect(()=>{
        console.log(products)
    },[products])

    if(products.length)
    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
                <Select 
                    defaultValue="name" 
                    style={{ width: 120, marginRight: 10 }} 
                    onChange={(value) => setFilteredValue(value)}
                >
                    <Option value="name">Name</Option>
                    <Option value="category">Category</Option>
                </Select>
                
                <Input 
                    placeholder={`Search by ${filteredValue}`}
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    style={{ width: 200 }}
                />
            </div>
          <Row gutter={[16, 24]}> 
            {filteredProducts.map(product => {
                return (
                    <Col
                        span={6}
                        xs={{ order: 1 }}
                        sm={{ order: 2 }}
                        md={{ order: 3 }}
                        lg={{ order: 4 }}
                    >
                        <Card
                          title={product.name}
                          style={{
                            width : "70%",
                            height : "100%"
                          }}
                        >
                            <p style={{fontWeight : "bold"}} >{product.category}</p>
                            <p>{ product.text.length > 100 ? product.text.slice(0,100) + "..." : product.text }</p>
                            <Space style={{display : "flex", margin : "0"}} >
                                <h4 style={product.discount ? {textDecoration : "line-through",margin : 0} : {} } >{ product.price }$</h4>
                                <h2 style={{fontWeight : "bold", margin : 0}} >{ product.discount ? product.discountPer + "% Discount" : "" }</h2>
                            </Space>
                            {product.discount && (
                                <h1 style={{margin : 0}} >{product.price * (100 - product.discountPer) / 100}$</h1>
                            ) }
                            <Space>
                                <Button onClick={()=>navigate(`/products/${product.id}`)}  >See Details</Button>
                                <Button onClick={()=>handleRemove(product)}  >Remove</Button>
                            </Space>
                        </Card>
                    </Col>
                )
            })}
          </Row>
        </>
    );
    else return (
        <>
            <h1>Your favorite list seems empty</h1>
        </>
    ) 
}

