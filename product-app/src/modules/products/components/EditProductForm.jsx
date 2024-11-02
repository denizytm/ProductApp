import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Segmented,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditProduct } from '../hooks/useEditProduct';


const { Option } = Select;

export const EditProductForm = () => {

  const editProduct = useEditProduct();

  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector(state => state.products.products);
  const categories = useSelector(state => state.products.categories);

  if (id <= 0 || id > products.length - 1) navigate("/admin/products");

  const selectedProduct = products[id - 1];

  const [formData, setFormData] = useState({
    id: id,
    name: "",
    price: "",
    text: "",
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
      style={{ maxWidth: 600,margin : 25 }}
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
          style={{ width: '100%' }}
          onChange={(value) => setFormData({ ...formData, price: value })}
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
            style={{ width: '100%' }}
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
          {categories.map(category => (
            <Option key={category} value={category}>{category}</Option>
          ))}
          <Option value="Other">Other</Option>
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
