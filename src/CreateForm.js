import React,{useState} from 'react';
import {
    Form,
    Input,
    Upload
  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import './style.css';


const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

const CreateForm = () => {

    // const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <div className='creat-btn'>
       <Form
        
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{width:'800px'}}

      >

        <Form.Item  rules={[{ required: true}]} >
          
            <label htmlFor="">
                <span className='required'>*</span> 
                Project Name
            </label>
          <Input  style={{cursor:'text'}}/>
        </Form.Item>
        <Form.Item >
            <label htmlFor="" >
                <span className='required'>*</span> 
                Project Type
            </label>
          <Input   style={{cursor:'text'}} />
        </Form.Item>

        <Form.Item >
          <label htmlFor="">
            <span className='required'>*</span> 
            Description
        </label>
          <TextArea rows={4}   style={{cursor:'text'}} />
        </Form.Item>
    
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <label htmlFor="">
            <span className='required'>*</span>
            Primary Image    
        </label>
        <Upload.Dragger name="files" action="/upload.do" style={{width:'470px',cursor:'pointer'}}>
          <p className="ant-upload-drag-icon">
          <PlusOutlined  style={{color:'#5189db'}}/>
          </p>
          <p className="ant-upload-text" style={{color:'black'}}>Click or drag file to this area to upload</p>
          <p className="ant-upload-hint" style={{color:'#9fa0a1'}}>Support for a single image only (jpg,jpeg,PNG)</p>
        </Upload.Dragger>
      </Form.Item>

          
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <label htmlFor="">
            <span className='required'>*</span>
            Multiple Images    
        </label>
        <Upload.Dragger name="files" action="/upload.do" style={{width:'470px',cursor:'pointer'}}>
          <p className="ant-upload-drag-icon">
          <PlusOutlined  style={{color:'#5189db'}}/>
          </p>
          <p className="ant-upload-text" style={{color:'black'}}>Click or drag file to this area to upload</p>
          <p className="ant-upload-hint" style={{color:'#9fa0a1'}}>Support for a single image only (jpg,jpeg,PNG)</p>
        </Upload.Dragger>
      </Form.Item>

      </Form>
    </div>
  )
}

export default CreateForm;
