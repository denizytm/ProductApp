import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Modal } from 'antd';
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
            navigate("/admin/products");
    },[]);

    const selectedUser = users.find(user => user.id == id);

    const handleDelete = () => {
      deleteUser(id)
      navigate("/admin/products");
    } 

    const showModal = () => {
      setOpen(true);
    };
    const hideModal = () => {
      setOpen(false);
    };

    if(selectedUser)
      return (
        <div style={{margin : "50px"}} >
          <h1>{selectedUser.nickname}'s Profile </h1>
        
          <div style={{display : "flex", gap : 20}} >
            <Button onClick={()=>navigate(`/admin/users/edit/${selectedUser.id}`)} > Edit </Button>
            <Button type="primary" onClick={showModal}> Delete </Button>
          </div>
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
        </div>
      )
}