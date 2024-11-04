import React, { useState } from 'react';
import { Button, Card, Col, Input, Row, Select, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGetProducts } from '../hooks/useGetProducts';

const { Option } = Select;

export const CustomerProductList = () => {

    const navigate = useNavigate();

    const [searchData, setSearchData] = useState("");
    const [filteredValue, setFilteredValue] = useState("name");

    const products = useGetProducts();

    const filteredProducts = products.filter(product => 
        product[filteredValue].toString().toLowerCase().includes(searchData.toLowerCase()) 
    );

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
              {filteredProducts.map(product => (
                  <Col
                      xs={24}     
                      sm={18}     
                      md={12}     
                      lg={6}      
                      key={product.id}
                  >
                      <Card
                        title={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                        actions={[
                            <Button onClick={() => navigate(`/products/${product.id}`)}>See Details</Button>
                        ]}
                      >
                          <div style={{ height: 180, overflowY: "auto" }}>
                              <p style={{ fontWeight: "bold" }}>{product.category}</p>
                              <p>{product.text.length > 100 ? product.text.slice(0, 100) + "..." : product.text}</p>
                          </div>
                          
                          <div>
                              <Space style={{ display: "flex", justifyContent: "space-between", margin: "0" }}>
                                  {product.discount ? 
                                      (<h4 style={{ textDecoration: "line-through", margin: 0 }}>{product.price}$</h4>)
                                          : 
                                      (<h1 style={{ margin: 0 }}>{product.price}$</h1>) 
                                  }
                                  <h2 style={{ fontWeight: "bold", margin: 0 }}>{product.discount ? product.discountPer + "% Discount" : ""}</h2>
                              </Space>
                              {product.discount && (
                                  <h1 style={{ margin: 0, textAlign: 'right' }}> {product.price * (100 - product.discountPer) / 100}$</h1>
                              )}
                          </div>
                      </Card>
                  </Col>
              ))}
            </Row>
        </>
    );
}
