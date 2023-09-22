import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'

function OwnerDefaultLayout(props) {
    const owner = JSON.parse(localStorage.getItem('owner'))
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
          
          href="/owneruserbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      
      <Menu.Item onClick={()=>{
          localStorage.removeItem('owner');
          window.location.href='/ownerlogin'
      }}>
        <a> logout</a>
         
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1" style={{backgroundColor:"darkblue"}}>
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>SHARE AND RENT CAR</Link></b></h1>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button><h5>{owner.username}</h5></Button>
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      
    </div>
  );
}

export default OwnerDefaultLayout;