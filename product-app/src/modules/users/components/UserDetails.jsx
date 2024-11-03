import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Divider, Modal, Row, Space } from 'antd';
import { useGetUsers } from '../hooks/useGetUsers';
import { useDeleteUser } from '../hooks/useDeleteUser';


export const UserDetails = () => {

    const deleteUser = useDeleteUser();
    const users = useGetUsers();
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(id <= 0 || id > users.length ) 
            navigate("/admin/users");
    },[]);

    const selectedUser = users.find(user => user.id == id);

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
        <Divider style={{margin : "50px"}} >
            <h1 style={{textAlign : "center"}} >Profile Details</h1>
            <Card title={selectedUser.username+"'s Profile"} style={{ width: 400, margin: '20px auto' }}>
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
                        <Space style={{display : "flex", gap : 20}} >
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