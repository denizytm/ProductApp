// Packages
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Divider, Form, Input, Space } from 'antd';
// Hooks
import { useGetUsers } from '../hooks/useGetUsers';
import { useEditUser } from '../hooks/useEditUser';
// Styling
import "../styles/EditUserForm.css";

export const EditUserForm = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const users = useGetUsers();

    const selectedUser = users.find(user => user.id == id);

    const updateUser = useEditUser();

    const [ready,setReady] = useState(false);
    const [formData,setFormData] = useState({
        username : "",
        name : "",
        surname : "",
        email : "",
        address : ""
    }); 
    
    useEffect(()=>{
        if(!selectedUser) 
            navigate("/admin/products");
    },[]);
    
    useEffect(()=>{
        if(selectedUser) {
            setFormData({
                username : selectedUser.username,
                name : selectedUser.name,
                surname : selectedUser.surname,
                email : selectedUser.email,
                address : selectedUser.address
            });
            setReady(true);
        }
    },[selectedUser])

    const handleFinish = () => {
        if(Object.values(formData).every(value => value != "" && value != null)){
            updateUser({...formData,id : selectedUser.id});
            navigate(`/admin/users/${selectedUser.id}`);
        }
    }
    
    if(selectedUser && ready)
      return (
        <Divider className='divider' >
            <h1 >Edit Profile</h1>
            <Card className='card' title={selectedUser.username + "'s Profile"}>
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

                    <Space>
                        <Button type="primary" htmlType="submit">Update</Button>
                        <Button onClick={() => navigate(`/admin/users`)}>Cancel</Button>
                    </Space>
                </Form>
            </Card>
        </Divider>
      )
}