import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Divider, Form, Input, Space } from 'antd';
import useCreateUser from '../hooks/useCreateUsers';

export const AddUserForm = () => {

    const navigate = useNavigate();

    const createUser = useCreateUser();

    const [formData,setFormData] = useState({
        username : "",
        name : "",
        surname : "",
        email : "",
        address : ""
    }); 

    const handleFinish = () => {
        if(Object.values(formData).every(value => value != "" && value != null)){
            createUser(formData);
            navigate("/admin/users");
        }
    }
    
    return (
        <Divider style={{margin : "50px"}} >
            <h1 style={{textAlign : "center"}} >New User</h1>
            <Card title={"Create User"} style={{ width: 400, margin: '20px auto' }}>
                <Form
                    layout="vertical"
                    onFinish={handleFinish}
                    initialValues={formData} 
                >
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[{ required: true, message: 'Please enter your username' }]}
                    >
                        <Input
                            defaultValue={formData.username} 
                            value={formData.username} 
                            onChange={(e)=>setFormData(oV => ({...oV,username : e.target.value}))}
                        />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input
                            defaultValue={formData.name} 
                            value={formData.name} 
                            onChange={(e)=>setFormData(oV => ({...oV,name : e.target.value}))}
                        />
                    </Form.Item>

                    <Form.Item
                        name="surname"
                        label="Surname"
                        rules={[{ required: true, message: 'Please enter your surname' }]}
                    >
                        <Input
                            defaultValue={formData.surname} 
                            value={formData.surname} 
                            onChange={(e)=>setFormData(oV => ({...oV,surname : e.target.value}))}
                        />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[{ required: true, message: 'Please enter your address' }]}
                    >
                        <Input
                            defaultValue={formData.address} 
                            value={formData.address} 
                            onChange={(e)=>setFormData(oV => ({...oV,address : e.target.value}))}
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                    >
                        <Input
                            defaultValue={formData.email} 
                            value={formData.email} 
                            onChange={(e)=>setFormData(oV => ({...oV,email : e.target.value}))} 
                        />
                    </Form.Item>

                    <Space style={{ display: 'flex', gap: 20 }}>
                        <Button type="primary" htmlType="submit">Update</Button>
                        <Button onClick={() => navigate(`/admin/users`)}>Cancel</Button>
                    </Space>
                </Form>
            </Card>
        </Divider>
    )
}