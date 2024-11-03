import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Segmented,
  Select,
  Space,
} from 'antd';

import { useCreateProduct } from '../hooks/useCreateProduct';
import { useNavigate } from 'react-router-dom';
import { useGetCategories } from '../hooks/useGetCategories';

const { Option } = Select;

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

export const AddProductForm = () => {

    const createProduct = useCreateProduct();
    const navigate = useNavigate();

    const categories = useGetCategories();

    const [componentVariant, setComponentVariant] = useState('filled');
    const [formData,setFormData] = useState({
        name : "",
        price : "",
        text : "",
        category : "",
        discount : false,
        discountPer : 0,
        amount : 0,
    });
    const [newCategory,setNewCategory] = useState("");

    const onFormVariantChange = ({ variant }) => {
      setComponentVariant(variant);
    };
    

    const handleSubmit = () => {
        if(Object.values(formData).every(value => value !== "" && value !== null)) {  // Form verisinde girilenden boş olan var mı diye bakıyoruz
          if(formData.category === "Other")
            createProduct({...formData,category : newCategory}) // eğer boş olan bir input değeri yoksa dispatch aracılığıyla ürünü state.procuts'a ekliyoruz
          else createProduct(formData)
          navigate("/admin/products");
        }
        else alert("There are empty inputs") // eğer boş olan bir veri varsa ürünü eklemeyip kullanıcıyı uyaracaktır
    }

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
                message: 'Please enter a name for the product',
              },
            ]}
          >
            <Input
              value={formData.name}
              onChange={(e)=>setFormData(oV=>({...oV,name : e.target.value}))}
            />
          </Form.Item>
    
          <Form.Item
           label="Category"
           name="category"
           rules={[{ required: true, message: 'Please enter a new category' }]}
          >
            <Select
              onChange={(value) => setFormData({ ...formData, category: value })}
            >
              <Option value="Other">Other</Option>
              {categories.map(category => (
                <Option key={category} value={category}>{category}</Option>
              ))}
            </Select>
          </Form.Item>

          {formData.category === "Other" && (
            <Form.Item
              label="Category"
              name="newCategory"
              rules={[
                {
                  required: true,
                  message: 'Please enter a new category',
                },
              ]}
            >
              <Input
               value={newCategory}
               onChange={(e) => setNewCategory(e.target.value)} 
              />
            </Form.Item>
          )}

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
              value={formData.price}
              onChange={(e)=>setFormData(oV=>({...oV,price : e}))}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
    
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: 'Please enter an amount for the product',
              },
            ]}
          >
            <InputNumber
              value={formData.amount}
              onChange={(e)=>setFormData(oV=>({...oV,amount : e}))}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            label="Explanation"
            name="text"
            value={formData.text}
                onChange={(e)=>setFormData(oV=>({...oV,text : e.target.value}))}
            rules={[
              {
                required: true,
                message: 'Please enter an explanation for the product',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Space>
              <Button onClick={handleSubmit} type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={()=>navigate("/admin/products")} htmlType="submit">
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      );
}
