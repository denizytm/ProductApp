import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGetProducts } from '../../modules/products/hooks/useGetProducts';
import { useFetchProducts } from '../../modules/products/hooks/useFetchProducts';
const { Column, ColumnGroup } = Table;

const Hello2 = () => {

    const navigate = useNavigate();

    const fetchProducts = useFetchProducts();

    fetchProducts();

    const products = useGetProducts();

    if(products.lenght);
    return (
        <Table dataSource={products} rowKey="id" style={{ marginLeft: "50px" }} bordered>
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
            render={(discountPer, record) => (
                record.discount ? `${discountPer}%` : ""
            )}
        />
    
        <Column
            title="Discounted Price"
            key="discountedPrice"
            render={(text, record) => (
                record.discount ? ((record.discountPer * record.price) / 100).toFixed(2) : ""
            )}
        />
    
        <Column
            title="Action"
            key="action"
            render={(_, record) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        onClick={() => navigate(`/admin/products/${record.id}`)}
                    >
                        See
                    </Button>
                </Space>
            )}
        />
    </Table>
    );
}
export default Hello2;