// Packages
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Divider, Modal, Row, Space } from 'antd';
// Hooks
import { useGetUsers } from '../hooks/useGetUsers';
import { useDeleteUser } from '../hooks/useDeleteUser';
// Styling
import "../styles/UserDetails.css";

export const UserDetails = () => {

    const deleteUser = useDeleteUser();
    const users = useGetUsers();
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [open, setOpen] = useState(false);
    const selectedUser = users.find(user => user.id == id);

    useEffect(()=>{
        if(!selectedUser) 
            navigate("/admin/users");
    },[]);


    const handleDelete = () => {
      deleteUser(id)
      navigate("/admin/users");
    } 

    const showModal = () => {
      setOpen(true);
    };
    const hideModal = () => {
      setOpen(false);
    };

    if(selectedUser)
      return (
        <Divider className='divider'>
            <h1 >Profile Details</h1>
            <Card className='card' title={selectedUser.username+"'s Profile"} >
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <p><strong>Username:</strong> {selectedUser.username}</p>
                    </Col>
                    <Col span={24}>
                        <p><strong>Name:</strong> {selectedUser.name}</p>
                    </Col>
                    <Col span={24}>
                        <p><strong>Surname:</strong> {selectedUser.surname}</p>
                    </Col>
                    <Col span={24}>
                        <p><strong>Address:</strong> {selectedUser.address}</p>
                    </Col>
                    <Col span={24}>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                    </Col>
                    <Col>
                        <Space className='space' >
                          <Button onClick={()=>navigate(`/admin/users/edit/${selectedUser.id}`)} > Edit </Button>
                          <Button type="primary" onClick={showModal}> Delete </Button>
                        </Space>
                    </Col>
              </Row>
            </Card>
            <>
              <Modal
                title="Delete Product "
                open={open}
                onOk={handleDelete}
                onCancel={hideModal}
                okText="Delete"
                cancelText="Cancel"
                closeIcon={false}
              >
                <p>Are you sure that you want to delete this user ?</p>
              </Modal>
            </>
        </Divider>
      )
}