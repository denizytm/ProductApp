import React, { useState } from 'react';
import { Button, Table, Space, Tag, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGetUsers } from '../hooks/useGetUsers';

const { Column } = Table;
const { Option } = Select;

export const UserList = () => {

    const navigate = useNavigate();
    const users = useGetUsers();

    const [searchData, setSearchData] = useState("");
    const [filteredValue, setFilteredValue] = useState("name");

    const filteredUsers = users.filter(user => 
        user[filteredValue].toString().toLowerCase().includes(searchData.toLowerCase()) // filtered Value değerine göre kullanıcıları filtreliyoruz
    );

    return users.length ? (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
                <Select 
                    defaultValue="name" 
                    style={{ width: 120, marginRight: 10 }} 
                    onChange={(value) => setFilteredValue(value)}
                >
                    <Option value="name">Name</Option>
                    <Option value="username"> Username </Option>
                    <Option value="address"> Address </Option>
                </Select>
                
                <Input 
                    placeholder={`Search by ${filteredValue}`}
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    style={{ width: 200 }}
                />
            </div>
            
            <Table dataSource={filteredUsers} rowKey="id" style={{ marginLeft: "50px" }} bordered>
                <Column title="Username" dataIndex="username" key="username" />
                <Column title="First Name" dataIndex="name" key="name" />
                <Column title="Last Name" dataIndex="surname" key="surname" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Address" dataIndex="address" key="address" />
            
                <Column
                    title="Action"
                    key="action"
                    render={(_, user) => (
                        <Space size="middle">
                            <Button
                                type="primary"
                                onClick={() => navigate(`/admin/users/${user.id}`)}
                            >
                                See
                            </Button>
                        </Space>
                    )}
                />
            </Table>
        </>
    ) : (
        <div>Loading...</div>
    );
};
