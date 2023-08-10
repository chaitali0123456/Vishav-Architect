
import React, { useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ContactsOutlined,
  LogoutOutlined ,
  UserOutlined
} from '@ant-design/icons';
import logo from './image/login page logo.png'
import { Layout, Menu, Button, theme} from 'antd';
import Projects from './components/Projects';
// import EditForm from './EditForm';
// import Contacts from './components/Contacts';
// import CreateForm from './CreateForm';


const {  Sider } = Layout;


const Home = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const [editbtn,setEdit] = useState(false);
  // const handleEdit= () =>{
  //   setEdit(true)
  //   console.log("second edit function");
  // }
  // if (editbtn === true) {
  //   return(
  //     <div>
  //       <EditForm handleEdit={handleEdit}/>
  //     </div>
  //   );
  // }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:'#202020'}}>
        <div className=" login-header logo"  >
             <img src={logo} alt="" style={{   width: '35px'}}/>
              <h1>VISHV</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Projects',
              
            },
            {
              key: '2',
              icon: <ContactsOutlined />,
              label: 'Contacts',
            },
            {
              key: '3',
              icon: <LogoutOutlined />,
              label: 'Logout',
            },
          ]}
        style={{backgroundColor:'#252525',height:'100vh',outline:'none',border:'none'}}
        />
      </Sider>
      <div style={{width:'100%'}}>

          <div className="Header" style={{ padding: 0, background: colorBgContainer,backgroundColor:'#252525' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color:'white',
              // position:'absolute',
              
            }}
          />

          </div>
          <div className="content">
            {/* <CreateForm/> */}
            <Projects />
            {/* <Contacts/> */}
            
          </div>
      </div>
      
    </Layout>
  );
};

export default Home;