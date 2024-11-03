import React from 'react';
import { Col, Divider, Row, Card } from 'antd';
import { useGetProducts } from '../../modules/products/hooks/useGetProducts';
import { useFetchProducts } from '../../modules/products/hooks/useFetchProducts';
const App = () => {

  const fetchProducts = useFetchProducts();

  fetchProducts();

  const products = useGetProducts();
  
  if(products.length);
  return  (
    <>
      <Divider orientation="left">Products</Divider>
      <Row>
        {products.map(product => {
          return (
            <Col
             span={6}
             xs={{
              order: 1,
             }}
             sm={{
               order: 2,
             }}
             md={{
               order: 3,
             }}
             lg={{
               order: 4,
             }}
            >
              <Card
               title={product.name}
               extra={<a href="#">More</a>}
               style={{
                 width: "80%",
               }}
              >
                <p>{product.name}</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              
            </Col>
          )
        })}
      </Row>
    </>
  );
}
export default App;