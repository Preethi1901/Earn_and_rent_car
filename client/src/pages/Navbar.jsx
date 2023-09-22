import React from "react";
import { Menu, Dropdown, Button } from "antd";

const Navbar = () => {
  const menu1 = (
    <Menu className="menu">
      <Menu.Item>
        <a href="/adminlogin">ADMIN LOGIN</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/login">USER LOGIN</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/ownerlogin">OWNER LOGIN</a>
      </Menu.Item>
      <Menu.Item onClick={() => {}}>
      </Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu className="menu">
      <Menu.Item>
        <a href="/adminregister">ADMIN SIGNUP</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/register">USER SIGNUP</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/ownerregister">OWNER SIGNUP</a>
      </Menu.Item>
      <Menu.Item onClick={() => {}}>
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/home1">
              HOME <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              ABOUT
            </a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="/services">
              SERVICES
            </a>
          </li>
          <li class="nav-item" style={{paddingRight:"300px"}}>
            <a class="nav-link" href="/guidelines">
              GUIDELINES
            </a>
          </li>
         <li style={{ flex: "1",textAlign:"center" }}>
            <h1 style={{ color: "white"}}>SHARE AND RENT CAR</h1>
          </li>
        </ul>

        <div className="float-right" style={{ marginRight: "20px" }}>
          <Dropdown overlay={menu1} placement="">
            <Button>LOGIN</Button>
          </Dropdown>
        </div>
        <div className="float-right">
          <Dropdown overlay={menu2} placement="">
            <Button>REGISTER</Button>
          </Dropdown>
        </div>
      </div>
    </nav>
</div>

    
  );
};

export default Navbar;
