import React, { useEffect, useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Segmented,
  I
} from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const { Option } = Select;

export const EditProductForm = () => {

    const navigate = useNavigate();

    const products = useSelector(state=>state.products.products);
    const categories = useSelector(state=>state.products.categories);

    const {id} = useParams();
    if(id <= 0 || id > products.length -1) navigate("/admin/products");

    const selectedProduct = products[id-1];

    const [componentVariant, setComponentVariant] = useState('filled');
    const onFormVariantChange = ({ variant }) => {
      setComponentVariant(variant);
    };

    const [formData,setFormData] = useState({
        name : "",
        price : "",
        text : "",
        category : "",
        discount : "",
        discountPer : ""
    })

    useEffect(()=>{
        if(selectedProduct) {
            setFormData({
                name : selectedProduct.name,
                price : selectedProduct.price,
                text : selectedProduct.text,
                category : selectedProduct.category,
                discount : selectedProduct.discount,
                discountPer : selectedProduct.discountPer
            })
        }
    },[selectedProduct])

    useEffect(()=>{
        console.log(formData);
    },[formData])



    if(selectedProduct && formData && formData.name)
        return (
            <Form
              {...formItemLayout}
              onValuesChange={onFormVariantChange}
              variant={componentVariant}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                variant: componentVariant,
              }}
            >
              <Form.Item label="Form variant" name="variant">
                <Segmented options={['outlined', 'filled', 'borderless']} />
              </Form.Item>
        
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please set a new name for the product',
                  },
                ]}
              >
                <Input
                  defaultValue={formData.name}
                  value={formData.name}
                  onChange={(e)=>setFormData(oV=>({...oV,name : e.target.value}))}
                />
              </Form.Item>
        
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: 'Please enter a price for the product',
                  },
                ]}
              >
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  defaultValue={formData.price}
                  value={formData.price}
                  onChange={(e)=>setFormData(oV=>({...oV,price : e}))}
                />
              </Form.Item>
        
              <Form.Item
                label="Discounted"
                name="discount"
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Select
                 defaultValue={formData.discount ? "Yes" : "No"}
                 value={formData.discount ? "Yes" : "No" }
                 onChange={(e)=>setFormData(oV=>({...oV,discount : e}))} >
                    <Option value="Yes" >Yes</Option>
                    <Option value="No" >No</Option>
                </Select>
              </Form.Item>

                {formData.discount === "Yes" && (
                     <Form.Item
                     label="Discount Rate"
                     name="discountPer"
                     rules={[
                       {
                         required: true,
                         max : 100,
                         min : 0,
                         message: 'Please enter a discount rate for the product',
                       },
                     ]}
                   >
                     <InputNumber
                       style={{
                         width: '100%',
                       }}
                       defaultValue={formData.discountPer}
                       value={formData.discountPer}
                       onChange={(e)=>setFormData(oV=>({...oV,discountPer : e}))}
                     />
                   </Form.Item>
                )}
             
              <Form.Item
                label="Explanation"
                name="text"
                rules={[
                  {
                    required: true,
                    message: 'Please an explanation for the product',
                  },
                ]}
              >
                <Input.TextArea
                  defaultValue={formData.text}
                  value={formData.text}
                  onChange={(e)=>setFormData(oV => ({...oV,text : e.target.value}) )}
                />
              </Form.Item>
              
              <Form.Item
                label="Select"
                name="Select"
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Select
                 defaultValue={formData.category} 
                 onChange={(e)=>setFormData(oV=>({...oV,category : e}))} >
                    {categories.map(category => (
                        <Option value={category}>{category}</Option>
                    ))}
                    <Option value="Other" >Other</Option>
                </Select>
              </Form.Item>
        
              {formData.category === "Other" && (
                <Form.Item
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: 'Please enter a new category',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              )}

              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          );
}
