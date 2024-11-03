import React from 'react';
import { Carousel } from 'antd';

import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.webp";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
    <Carousel arrows infinite={false}>
        <div>
            <div>
                <img src={image1} height={300} style={{width : "100%"}} />
            </div>
        </div>
        <div>
            <div>
                <img src={image2} height={300} style={{width : "100%"}} />
            </div>
        </div>
        <div>
            <div>
                <img src={image3} height={300} style={{width : "100%"}} />
            </div>
        </div>
    </Carousel>
);
export default App;