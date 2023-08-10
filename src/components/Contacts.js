import React from 'react'
import {Table } from 'antd'

export default function Contact() {

    const dataSource = [
    {
      key: '1',
      Name: 'Test',
      Email: 'test2507@gmail.com',
      Phone: '9876543210',
      Message: 'Test message',
      Date:  '07/25/2023' ,
      Action: 'Delete',
    },
                                         
    {
     key: '2',
      Name: 'Test',
      Email: 'test@gmail.com',
      Phone: '9876543210',
      Message: '	Need to do interior design at our new office',
      Date:  '07/25/2023' ,
      Action: 'Delete', 
    },

  ];
  
  const columns =
   [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',
    },

    {
      title: 'Message',
      dataIndex: 'Message',
      key: 'Message',
    },

    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
    },

    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
    },
  ];

  return (
    <div id='contact'
        style={{
          margin:'100px',
          marginRight:'100px'
        }}
    >
      <div>
        <h1>List of Users</h1>
      </div>
       <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
