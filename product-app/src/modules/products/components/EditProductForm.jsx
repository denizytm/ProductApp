// Packages
import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
// Hooks
import { useEditProduct } from '../hooks/useEditProduct';
import { useGetProducts } from '../hooks/useGetProducts';
import { useGetCategories } from '../hooks/useGetCategories';
// Styling
import "../styles/EditProductForm.css";

const { Option } = Select;

export const EditProductForm = () => {

  const editProduct = useEditProduct();

  const navigate = useNavigate();
  const { id } = useParams();

  const products = useGetProducts();
  const categories = useGetCategories();

  if (id <= 0 || id > products.length ) navigate("/admin/products");

  const selectedProduct = products.find(product => product.id == id);

  const [formData, setFormData] = useState({
    id: id,
    name: "",
    price: "",
    text: "",
    amount : "",
    category: "",
    discount: "",
    discountPer: "",
    newCategory : ""
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        text: selectedProduct.text,
        amount : selectedProduct.amount,
        category: selectedProduct.category,
        discount: selectedProduct.discount,
        discountPer: selectedProduct.discountPer,
        newCategory : ""
      });
    }
  }, [selectedProduct]);

  const handleSubmit = () => {
    if(formData.category === "Other")
      editProduct({...formData,category : formData.newCategory});
    else editProduct({...formData});
    navigate("/admin/products");
  }

  if(selectedProduct && formData && formData.name)
  return (
    <Form
      className='form'
      initialValues={formData} // Initial values are set here
      onFinish={handleSubmit} // Handle form submission
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please set a new name for the product' }]}
      >
        <Input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please enter a price for the product' }]}
      >
        <InputNumber
          className='input'
          onChange={(value) => setFormData({ ...formData, price: value })}
        />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Please enter an amount for the product' }]}
      >
        <InputNumber
          className='input'
          onChange={(value) => setFormData({ ...formData, amount : value })}
        />
      </Form.Item>

      <Form.Item
        label="Discounted"
        name="discount"
        rules={[{ required: true, message: 'Please input!' }]}
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
          rules={[{ required: true, message: 'Please enter a discount rate for the product' }]}
        >
          <InputNumber
            className='input'
            onChange={(value) => setFormData({ ...formData, discountPer: value })}
          />
        </Form.Item>
      )}

      <Form.Item
        label="Explanation"
        name="text"
        rules={[{ required: true, message: 'Please an explanation for the product' }]}
      >
        <Input.TextArea
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
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
           value={formData.newCategory}
           onChange={(e) => setFormData(oV=> ({...oV,newCategory : e.target.value}))} 
          />
        </Form.Item>
      )}

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={()=>navigate(`/admin/products/${selectedProduct.id}`)} htmlType="submit">
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
