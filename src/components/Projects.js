import {Table } from 'antd'
import { useState } from 'react';
import CreateForm from '../CreateForm';
// import { Button } from 'antd/es/radio';
import { Modal,Button } from 'antd';
import {  Space} from 'antd';
import EditForm from '../EditForm';
import tableimg from '../image/tableimg.png';
import DeleteForm from '../DeleteForm';
// import { render } from '@testing-library/react';


export default function Project(props) {

    const dataSource = [
        {
          key: '1',
         name: 'Public Architects',
          type: 'Landscape',
          Description: 'A public garden is an institution that maintains plants for the purposes of public education and enjoyment',
          
        },
        {
          key: '2',
          name: 'Art Deco',
          type: 'Interior',
          Description: 'harmonious, clean, geometric, sleek, usually uncomplicated, and visually pleasing artworks',
          
        },

        {
          key: '3',
          name: 'Modern Architecture',
          type: 'Architecture',
          Description: 'Modern architecture is a style of building that emphasizes function and a streamlined form over ornamentation.s',
        },
       
        {
          key: '4',
          name: 'Classical Architecture',
          type: 'Architecture',
          Description: 'Classical architecture originated in ancient Greece and Rome, and is characterized by symmetry, columns, rectangular windows, and marble	Classical Architecture	',
        },
        
      ];
      
      const columns =
       [
        {
          title: 'Project Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Project Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Description',
          dataIndex: 'Description',
          key: 'Description',
        },

        // {
        //   title: 'Image',
        //   dataIndex: 'address',
        //   key: 'address',
        // },
        {
          title: 'Image',
          key: 'tags',
          dataIndex: 'tags',
          render: (tags ) => (
            <span>
              <img src={tableimg} alt=""  style={{width:'70px'}}/>
            </span>
          ),
        },
        
        {  
          title: 'Actions',
          key: 'action',
          render: (_, record) => (
          <Space size="middle">
              {/* <a href='#' onClick={()=>props.handleEdit()} style={{paddingRight:'10px'}}>Edit</a><br /> */}
              {/* <button onClick={()=>props.handleEdit()}>Edit</button> */}
              <Button type='primary' onClick={()=>handleEdit(true) }
              style={{backgroundColor:'white',
                      color : 'blue'
                    
                      }}
                      >Edit</Button>
              {/* <a href='#' style={{color:'red'}}>Delete</a> */}
              <Modal
                  centered
                   open={editbtn}
                    onOk={() => handleEdit(false)}
                  onCancel={() => handleEdit(false)} >
                    <EditForm/>
              </Modal>

              <Button type='primary' onClick={()=>handleDelete(true)}
                      style={{
                        backgroundColor:'white',
                        color:'red',
                        marginRight:'10%'
                      }}
                  >Delete</Button>
              <Modal
                centered
                open={deletebtn}
                onOk={()=>handleDelete(false)}
                onCancel={()=>handleDelete(false)}>
                  <DeleteForm/>
              </Modal>
          </Space>
          
          ),
        },
  
      ];
      
      const[deletebtn,handleDelete] = useState(false)

      const [editbtn,handleEdit] = useState(false)
      

      const[button,handleButton] = useState(false)  

  return (
    <div id='project'>
      <div>
        {/* <CreateForm/> */}
        {/* <button onClick={handleButton} className='btn'>Create New</button> */}
        <Button className='creat-btn' type='primary' onClick={()=>handleButton(true)}
        style={{
              backgroundColor:'orange',
              marginLeft:'85%'

        }}>Create New</Button>

        <Modal
        centered
        open={button}
        onOk={() => handleButton(false)}
        onCancel={() => handleButton(false)} >
          
        <h3>Create New Projects</h3>
        <CreateForm/>
      </Modal>

      </div>
        <h1>List of All Projects</h1>
       <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

