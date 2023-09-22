import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'

function AdminDefaultLayout(props) {
    const admin = JSON.parse(localStorage.getItem('admin'))
  const menu = (
    <Menu className="menu">
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/adminuserbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      
      <Menu.Item onClick={()=>{
          localStorage.removeItem('admin');
          window.location.href='/adminlogin'
      }}>
        <a> logout </a>
          {/* <li style={{color:'orangered'}}>Logout</li> */}
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1" style={{backgroundColor:"darkblue"}}>
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>SheyCars</Link></b></h1>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{admin.username}</Button>
            
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      
    </div>
  );
}

export default AdminDefaultLayout;
