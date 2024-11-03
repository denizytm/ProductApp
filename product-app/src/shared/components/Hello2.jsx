import React from 'react';
import { Button, Card, Col, Divider, Row, Space } from 'antd';
import { useFetchProducts } from '../../modules/products/hooks/useFetchProducts';
import { useGetProducts } from '../../modules/products/hooks/useGetProducts';
import { useNavigate } from 'react-router-dom';

const Hello2 = () => {

    const fetchProducts = useFetchProducts();
    fetchProducts();

    const navigate = useNavigate();

    const products = useGetProducts();

    return (
        <>
          <Row gutter={[16, 24]}> {/* 16px yatay, 24px dikey boşluk */}
            {products.map(product => {
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
                            height : "300px"
                          }}
                        >
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
                            </Space>
                        </Card>
                    </Col>
                )
            })}
          </Row>
        </>
    );
}

export default Hello2;
