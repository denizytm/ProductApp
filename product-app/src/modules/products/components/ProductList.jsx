import React, { useState } from 'react';
import { Button, Table, Space, Tag, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGetProducts } from '../hooks/useGetProducts';

const { Column } = Table;
const { Option } = Select;

export const ProductList = () => {

    const navigate = useNavigate();
    const products = useGetProducts();

    const [searchData, setSearchData] = useState("");
    const [filteredValue, setFilteredValue] = useState("name");

    const filteredProducts = products.filter(product => 
        product[filteredValue].toString().toLowerCase().includes(searchData.toLowerCase()) // filtered Value değerine göre product'ları filtreliyoruz
    );

    return products.length ? (
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
            
            <Table dataSource={filteredProducts} rowKey="id" style={{ marginLeft: "50px" }} bordered>
                <Column title="Amount" dataIndex="amount" key="amount" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Category" dataIndex="category" key="category" />
                <Column title="Price" dataIndex="price" key="price" />
                
                <Column
                    title="Discounted"
                    dataIndex="discount"
                    key="discount"
                    render={(discount) => (
                        <Tag color={discount ? 'green' : 'volcano'}>
                            {discount ? "Yes" : "No"}
                        </Tag>
                    )}
                />
            
                <Column
                    title="Discount Per"
                    dataIndex="discountPer"
                    key="discountPer"
                    render={(discountPer, product) => (
                        product.discount ? `${discountPer}%` : ""
                    )}
                />
            
                <Column
                    title="Discounted Price"
                    key="discountedPrice"
                    render={(text, product) => (
                        product.discount ? ( product.price * ( 100 - product.discountPer) / 100).toFixed(2) : ""
                    )}
                />
            
                <Column
                    title="Action"
                    key="action"
                    render={(_, product) => (
                        <Space size="middle">
                            <Button
                                type="primary"
                                onClick={() => navigate(`/admin/products/${product.id}`)}
                            >
                                See
                            </Button>
                        </Space>
                    )}
                />
            </Table>
        </>
    ) : (
        <div>Loading...</div>
    );
};
